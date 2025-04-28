import Terminal from './Terminal';
import Image from 'next/image';

const code = `// the hello world program
console.log('Hello World!');`;

const code_Cpp = `#include "types/JsAny.hpp"
#include "global/global.hpp"
#include "types/objects/Types.hpp"

int main() {console["log"](JS::Any("Hello World!"));}
`;

const code_result = `JS-CMP git:(main)$ ./js_cmp test.js && g++ test.js.cpp
Hello World!`;

export default function Main_Tuto() {
    return (
        <div className='p-10'>
            <div className="px-20 mb-10 flex">
                <h1 className="text-4xl font-bold">To Start</h1>
            </div>
            <div className='flex'>
                <div>
                    <Terminal content={code} size="md" />
                </div>
                <div className="flex items-center justify-center p-3">
                    <div className="mr-2 [transform:rotate(210deg)_translateX(-10px)]">
                        <Image src="/arrow.svg" alt="Arrow" width={70} height={70} />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Terminal content={code_Cpp} size="sm" />
                </div>
                <div className="flex items-center justify-center p-3">
                    <div className="mr-2 [transform:rotate(-30deg)_scaleX(-1)_translateX(-10px)]">
                        <Image src="/arrow.svg" alt="Arrow" width={70} height={70} />
                    </div>
                </div>
                <div className="">
                    <Terminal content={code_result} size="sm" />
                </div>
            </div>
        </div>
    )
}