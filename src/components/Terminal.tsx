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
    <div className="bg-[#fafafa] rounded-xl shadow-md w-full lg:w-[50%] p-3 md:p-4 font-mono text-xs md:text-sm relative overflow-hidden border border-gray-200">
      <div className="flex space-x-2 mb-3 md:mb-4 pl-2 pt-1">
        <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></span>
        <span className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></span>
      </div>

      <pre className="whitespace-pre-wrap px-2 md:px-4 pb-3 md:pb-4 text-[#3c3c3c] overflow-x-auto">
        <code ref={codeRef} className={`language-${language} ` }>
          {content}
        </code>
      </pre>
    </div>
  );
}