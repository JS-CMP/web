
# Reducing Boilerplate in C++ with Macros

Modern C++ is powerful, but verbose. Operator overloading, in particular, often involves a lot of boilerplate code—wrapping types, defining friend functions, managing access modifiers, and more.

**SyntaxSmith** is a lightweight C++ header-only library that dramatically reduces that overhead by using macros to automate common patterns like operator overloading and function wrapping. Whether you're building DSLs or just want cleaner syntax, SyntaxSmith gives you the flexibility to define **custom operators and syntax extensions** with minimal code.

---

## 🧠 Why SyntaxSmith?

The library was originally created to simplify the lexing process of `JS_CMP`, a JavaScript interpreter project. It turns out that many of the same challenges—like operator chaining and symbolic parsing—benefit from the ability to easily define new syntactic structures.

With SyntaxSmith, you can write:

```cpp
std::cout << "The quintuple of 10 is: " << (quintuple 10) << std::endl;
std::cout << "10 + 2 is: " << (10 add 2) << std::endl;
```

Instead of manually writing structs or classes for every custom operator, this is all you need:

```cpp
int quintuple(int value) { return value * 5; }
int customAdd(int a, int b) { return a + b; }

CREATE_ONE_SIDE_OPERATOR(quintuple, quintuple)
#define quintuple quintupleClass()>

CREATE_OPERATOR(add, customAdd)
#define add <addClass()>
```

---

## 🔧 How It Works

Under the hood, SyntaxSmith provides two key macros:

- `CREATE_OPERATOR(name, function)` for two-sided operators (`lhs op rhs`)
- `CREATE_ONE_SIDE_OPERATOR(name, function)` for one-sided operators (`op rhs`)

These macros auto-generate:

- A class wrapping your function
- Overloads of the `<` and `>` operators
- A `set()` method to store `lhs` (for two-sided)
- A `curr` member to hold intermediate state

### Example: Two-Sided Operator

For a binary operation like `10 add 2`, this is all the boilerplate you *don’t* have to write:

```cpp
CREATE_OPERATOR(add, customAdd)
#define add <addClass()>
```

Expands into something like:

```cpp
class addClass {
public:
    template <typename T>
    auto operator>(T other) const {
        return _op0(curr, other);
    }

    template <typename T>
    void set(T value) { curr = value; }

private:
    int curr{};
    int (*_op0)(int, int) = customAdd;
};

template <typename T>
addClass operator<(T lhs, addClass rhs) {
    rhs.set(lhs);
    return rhs;
}
```

### Example: One-Sided Operator

Want a prefix-like function operator?

```cpp
int quintuple(int x) { return x * 5; }

CREATE_ONE_SIDE_OPERATOR(quintuple, quintuple)
#define quintuple quintupleClass()>
```

Which generates:

```cpp
class quintupleClass {
public:
    template <typename T>
    auto operator>(T other) const {
        return _op0(other);
    }

private:
    int (*_op0)(int) = quintuple;
};
```

---

## 💡 Design Philosophy

C++ macros are often frowned upon for being hard to debug and easy to misuse. But when applied carefully, they can eliminate real pain points—like writing near-identical boilerplate code for every custom operation.

SyntaxSmith uses macros not for metaprogramming magic, but for **convenience, clarity, and consistency**.

It leverages:
- `decltype(&function)` to introspect types
- `std::tuple` to analyze argument signatures
- Template-based operator overloading for flexibility

---

## 🧩 Summary

SyntaxSmith is an experiment in making C++ more expressive by reducing friction where it hurts the most: syntax. It’s not meant to replace standard patterns, but to **augment your toolbox** with a clean, macro-driven way to define custom behavior.

### ✅ Benefits:
- Less boilerplate
- Cleaner syntax for DSLs
- Operator overloading made easy

---

## 📚 Source

Available on [GitHub](https://github.com/SimonBandiera/SyntaxSmith).

Have questions or ideas? Feel free to reach out or contribute to the project!

---

[Simon](#https://github.com/SimonBandiera)
*April 29, 2025*
