import React from "react";

interface TerminalProps {
  content: string;
}

export default function Terminal({ content }: TerminalProps) {
  return (
    <div className="bg-[#fafafa] rounded-xl shadow-md w-fit p-4 font-mono text-sm relative overflow-hidden border border-gray-200">
      <div className="flex space-x-2 mb-4 pl-2 pt-1">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      <pre className="whitespace-pre-wrap px-4 pb-4 text-[#3c3c3c]">
        {content}
      </pre>
    </div>
  );
}
