"use client";

import React, {useEffect, useRef} from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // Import the style you prefer
import "./index.css";

type MarkdownRendererProps = {
    content: string;
};

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({content}) => {
    return (
        <div className="prose max-w-none p-6 rounded-lg shadow-md">
            <ReactMarkdown
                children={content}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    code(props) {
                        const language = props.className?.replace(/language-/, "") || "text";

                        const codeRef = useRef<HTMLElement>(null);

                        useEffect(() => {
                            if (codeRef.current) {
                                hljs.highlightElement(codeRef.current);
                            }
                        }, []);


                        if (!props.className && (props.children as unknown as string)?.split("\n").length < 2) {
                            return (
                                <code ref={codeRef} className={`language-${language}`} style={{display: "inline"}}>{props.children}</code>
                            );
                        }

                        return (
                                <code ref={codeRef} className={`language-${language}`} {...props}>
                                    {String(props.children).replace(/\n$/, "")}
                                </code>
                        );
                    }
                }}
            />
        </div>
    );
};

export default MarkdownRenderer;
