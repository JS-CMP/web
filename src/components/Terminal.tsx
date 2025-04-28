import React from "react";

interface TerminalProps {
  content: string;
  size?: 'sm' | 'md' | 'lg';
}

const Terminal: React.FC<TerminalProps> = ({ content, size = 'md' }) => {
  const sizeClasses = {
    sm: {
      container: 'p-4',
      buttonSize: 'w-3 h-3',
      buttonSpacing: 'space-x-2 mb-4',
      text: 'text-sm',
      content: 'px-4 pb-4'
    },
    md: {
      container: 'p-5',
      buttonSize: 'w-3.5 h-3.5',
      buttonSpacing: 'space-x-2.5 mb-5',
      text: 'text-base',
      content: 'px-5 pb-5'
    },
    lg: {
      container: 'p-6',
      buttonSize: 'w-4 h-4',
      buttonSpacing: 'space-x-3 mb-6',
      text: 'text-lg',
      content: 'px-6 pb-6'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`bg-[#ffffff] rounded-xl shadow-md w-fit font-mono relative overflow-hidden border border-gray-200 ${currentSize.container} ${currentSize.text}`}>
      <div className={`flex pl-2 pt-1 ${currentSize.buttonSpacing}`}>
        <span className={`${currentSize.buttonSize} bg-red-500 rounded-full`}></span>
        <span className={`${currentSize.buttonSize} bg-yellow-400 rounded-full`}></span>
        <span className={`${currentSize.buttonSize} bg-green-500 rounded-full`}></span>
      </div>

      <pre className={`whitespace-pre-wrap text-[#3c3c3c] ${currentSize.content}`}>
        {content}
      </pre>
    </div>
  );
};

export default Terminal;
