import Terminal from './Terminal';

const code = `// the hello world program
console.log('Hello World!');`;

const code_Cpp = `#include "types/JsAny.hpp"
#include "global/global.hpp"
#include "types/objects/Types.hpp"

int main() {console["log"](JS::Any("Hello World!"));}
`;

const code_result = `./js_cmp test.js && g++ test.js.cpp
> Hello World!`;


export default function Main_Tuto() {
  return (
    <div className="w-full">
        <div className="mb-10 flex gap-4">
            <h1 className="text-4xl font-bold">How does it work?</h1>
        </div>

        <div className="flex gap-20 w-full">
            <div className='flex flex-col gap-10 w-full'>
                <div className='flex w-full justify-between'>
                    <div className='max-w-xl'>
                        <span className="text-2xl font-bold text-[#F0C417] mb-2">01</span>
                        <p className="text-lg mb-6">
                            Write your JavaScript code as usual. No special syntax or restrictions!
                        </p>
                    </div>
                    <Terminal content={code} language="javascript" />
                </div>

                <div className='flex w-full justify-between'>
                    <div className='max-w-xl'>
                        <span className="text-2xl font-bold text-[#F0C417] mb-2">02</span>
                        <p className="text-lg mb-6">
                            Compile it using <code>js_cmp</code> into modern, fast C++ code.
                        </p>
                    </div>
                    <Terminal content={code_Cpp} language="cpp" />
                </div>

                <div className='flex w-full justify-between'>
                    <div className='max-w-xl'>
                        <span className="text-2xl font-bold text-[#F0C417] mb-2">03</span>
                        <p className="text-lg mb-6">
                            Build and run your C++ program — it behaves exactly like your original JavaScript!
                        </p>
                    </div>
                    <Terminal content={code_result} language="shell" />
                </div>
            </div>
        </div>
    </div>
  );
}