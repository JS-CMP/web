import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <>
        <head>
            <title>JSCMP</title>
            <title>JS-CMP – JavaScript to C++ Transpiler</title>
            <meta name="title" content="JS-CMP – JavaScript to C++ Transpiler"/>
            <meta name="description"
                  content="JS-CMP is a transpiler that converts JavaScript code into C++, compiling it into high-performance binaries. Supports Linux and macOS."/>

            <link rel="icon" type="image/png" href="eclair.png"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://github.com/JS-CMP/web/"/>
            <meta property="og:title" content="JS-CMP – JavaScript to C++ Transpiler"/>
            <meta property="og:description"
                  content="Convert JavaScript to high-performance C++ executables. Supports Linux and macOS."/>
            <meta property="og:image" content="eclair.png"/>

            <meta property="twitter:card" content="summary"/>
            <meta property="twitter:url" content="https://github.com/JS-CMP/web/"/>
            <meta property="twitter:title"
                  content="JS-CMP – JavaScript to C++ Transpiler"/>
            <meta property="twitter:description"
                  content="Transpile JavaScript to C++, compile to binary, and boost performance."/>
            <meta property="twitter:image" content="eclair.png"/>

            <script defer data-domain="github.com/js-cmp/web"
                    src="https://plausible.hgalan.dev/js/script.file-downloads.js"></script>
        </head>
            <body>
            <Header/>
            <div className="px-28">
                {children}
            </div>
            </body>
        </>
    )
}
