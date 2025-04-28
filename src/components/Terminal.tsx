"use client";

import React, { useEffect, useRef } from "react";
import hljs from "highlight.js"; 
import "highlight.js/styles/github.css";

interface TerminalProps {
  content: string;
  language: string;
}

export default function Terminal({ content, language }: TerminalProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [content, language]);

  return (
    <div className="bg-[#fafafa] rounded-xl shadow-md w-[50%] p-4 font-mono text-sm relative overflow-hidden border border-gray-200">
      <div className="flex space-x-2 mb-4 pl-2 pt-1">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <pre className="whitespace-pre-wrap px-4 pb-4 text-[#3c3c3c]">
        <code ref={codeRef} className={`language-${language} ` }>
          {content}
        </code>
      </pre>
    </div>
  );
}