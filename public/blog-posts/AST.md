This guide provides a comprehensive technical deep dive into the Abstract Syntax Tree (AST) builder for the [JS_CMP_LEXER](https://github.com/JS-CMP/Lexer) project. It is intended for developers who want to understand the internal architecture, memory management, and parsing algorithms used to transform tokens into a structured syntax tree.

## 1. Architecture Overview

The AST builder transforms a linear stream of tokens into a hierarchical tree structure. This tree represents the grammatical structure of the source code and is the foundation for subsequent compilation steps (optimization, code generation).

### The Node Hierarchy

The core of the AST is defined in [include/AST/Node.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/Node.hpp). We use a classical inheritance hierarchy:

*   **`Node`**: The abstract base class for all AST nodes. It defines the virtual interface for operations like printing and transpilation.
*   **`Expr` (Expression)**: Inherits from `Node`. Represents code that produces a value (e.g., `1 + 2`, `x`, `function() {}`).
*   **`Stmt` (Statement)**: Inherits from `Node`. Represents an action or a unit of execution (e.g., `if (...)`, `var x = ...`, `return`).

### Memory Management

We strictly use **`std::unique_ptr`** for all AST node pointers to ensure automatic memory management and clear ownership semantics.

```cpp
// From include/AST/Node.hpp
class Node {
public:
    using Ptr = std::unique_ptr<Node>;
    virtual ~Node() = default;
    // ...
};
```

*   **Ownership**: A parent node owns its children. When a parent node is destroyed, all its children are automatically destroyed.
*   **Transfer**: We use `std::move` to transfer ownership of nodes during parsing (e.g., passing a parsed expression into a binary operator node).

## 2. The Macro System for Node Definitions

To reduce boilerplate code and maintain consistency, we use a powerful C++ macro system defined in [include/AST/Node.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/Node.hpp) and utilized in [include/AST/AST.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/AST.hpp).

### Key Macros

*   **`EXPR(ClassName, Constructor, Members...)`**: Defines a class inheriting from `Expr`.
*   **`STMT(ClassName, Constructor, Members...)`**: Defines a class inheriting from `Stmt`.
*   **`CTOR(...)`**: A helper macro to define the constructor's initializer list.
*   **`DECL(...)`**: A helper macro to declare member variables.

### Example: `BinaryExpr`

In [include/AST/AST.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/AST.hpp), `BinaryExpr` is defined as:

```cpp
EXPR(BinaryExpr, 
     CTOR(left(std::move(left)), op(std::move(op)), right(std::move(right))), 
     Expr::Ptr left, std::string op, Expr::Ptr right)
```

This single line expands to a full class definition equivalent to:

```cpp
class BinaryExpr : public Expr {
public:
    explicit BinaryExpr(Expr::Ptr left, std::string op, Expr::Ptr right) 
        : left(std::move(left)), op(std::move(op)), right(std::move(right)) {}
    
    void print(size_t indent) const final;
    std::ostringstream& transpile(...) const final;
    static Expr::Ptr parse(Parser& parser, Expr::Ptr expr = nullptr);
    
    Expr::Ptr left;
    std::string op;
    Expr::Ptr right;
};
```

This approach makes adding new nodes extremely fast and less error-prone.

## 3. The Parser Engine

The parsing logic is driven by the `Parser` class, declared in [include/AST/Parser.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/Parser.hpp) and implemented in [src/AST/Parser.cpp](https://github.com/JS-CMP/Lexer/blob/main/src/AST/Parser.cpp).

### Recursive Descent Algorithm

We implement a **Recursive Descent Parser**. This means:
1.  The structure of the parser functions mirrors the grammar rules of the language.
2.  Functions call each other recursively to handle nested structures (e.g., an expression inside parentheses).

### Statement Dispatch

The entry point for parsing statements is `Parser::parseStatement()` in [src/AST/Parser.cpp](https://github.com/JS-CMP/Lexer/blob/main/src/AST/Parser.cpp). It uses a lookahead token (`peek()`) to decide which specific statement parser to call.

```cpp
Stmt::Ptr Parser::parseStatement() {
    // ...
    switch (peek().type) {
        case TK_VAR:      return VarDecl::parse(*this);
        case TK_IF:       return IfStmt::parse(*this);
        case TK_FOR:      return ForStmt::parse(*this);
        // ...
        default:          return ExpressionStmt::parse(*this);
    }
}
```

### Expression Precedence

Expression parsing is layered to handle operator precedence automatically. The call hierarchy ensures that operations with higher precedence are parsed first (closer to the leaves of the tree).

**Hierarchy (from lowest to highest precedence):**
1.  `parseExpression` (Comma)
2.  `parseAssignment` (=, +=, etc.)
3.  `parseConditional` (?:)
4.  `parseLogicalOr` (||)
5.  `parseLogicalAnd` (&&)
6.  ...
7.  `parseMultiplicative` (*, /, %)
8.  `parseUnary` (!, -, ++, --)
9.  `parsePrimary` (Literals, Identifiers, Parentheses)

## 4. Node-Specific Parsing Logic

Each AST node is responsible for parsing itself via a static `parse` method. These are implemented in [src/AST/AST_parser.cpp](https://github.com/JS-CMP/Lexer/blob/main/src/AST/AST_parser.cpp).

### Example: `BinaryExpr::parse`

This method is called when an operator is encountered. It takes the *already parsed* left-hand side as an argument.

```cpp
Expr::Ptr BinaryExpr::parse(Parser& parser, Expr::Ptr expr) {
    Token opTok = parser.previous(); // The operator token (e.g., '+')
    // ... validation ...
    Expr::Ptr right = parser.parseAssignment(); // Parse the right side
    return std::make_unique<BinaryExpr>(std::move(expr), opTok.value, std::move(right));
}
```

### Example: `VarDecl::parse`

This method parses a variable declaration statement.

```cpp
// (Simplified logic)
Stmt::Ptr VarDecl::parse(Parser& parser) {
    parser.consume(TK_VAR, ...); // Consume 'var'
    // ... parse identifier ...
    // ... parse optional initializer ...
    return std::make_unique<VarDecl>(...);
}
```

## 5. Step-by-Step Walkthrough: `var x = 1 + 2;`

Let's trace exactly how the parser builds the AST for this line of code.

1.  **Start**: `Parser::parseStatement()` sees the `var` token.
2.  **Dispatch**: Calls `VarDecl::parse(*this)`.
3.  **Variable Declaration**:
    *   `VarDecl::parse` consumes `var` and the identifier `x`.
    *   It sees the `=` token, so it knows there is an initializer.
    *   It calls `parser.parseAssignment()` to parse the value `1 + 2`.
4.  **Expression Parsing**:
    *   `parseAssignment` calls down the chain to `parseAdditive`.
    *   `parseAdditive` calls `parseMultiplicative` -> `parsePrimary`.
    *   `parsePrimary` consumes the number `1` and returns a `Number` node.
5.  **Binary Expression**:
    *   `parseAdditive` sees the `+` token.
    *   It consumes `+` and calls `BinaryExpr::parse` passing the `Number(1)` node as `expr`.
    *   `BinaryExpr::parse` calls `parseAssignment` (recursively) to get the right side.
    *   The right side parses `2` into a `Number(2)` node.
    *   `BinaryExpr::parse` returns a `BinaryExpr` node: `(left: Number(1), op: "+", right: Number(2))`.
6.  **Completion**:
    *   `VarDecl::parse` receives the `BinaryExpr` node.
    *   It constructs and returns a `VarDecl` node containing the name "x" and the `BinaryExpr` as the initializer.

## Conclusion

The JS_CMP_LEXER AST builder combines a robust recursive descent parser with a flexible, macro-based node system. This architecture allows for easy extension of the language grammar while maintaining strict memory safety and code clarity.

For more details, explore the source code:
*   [include/AST/Node.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/Node.hpp)
*   [include/AST/AST.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/AST.hpp)
*   [include/AST/Parser.hpp](https://github.com/JS-CMP/Lexer/blob/main/include/AST/Parser.hpp)
*   [src/AST/Parser.cpp](https://github.com/JS-CMP/Lexer/blob/main/src/AST/Parser.cpp)
*   [src/AST/AST_parser.cpp](https://github.com/JS-CMP/Lexer/blob/main/src/AST/AST_parser.cpp)


