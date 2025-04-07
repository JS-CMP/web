import Terminal from './Terminal';

const code = `// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}`;


export default function Main_Tuto() {
    return (
        <div className='p-10 bg-[#fafafa]'>
            <div className="px-20 gap mb-8 flex">
                <h1 className="text-4xl font-bold">To Start</h1>
            </div>
            <div className='px-20'>
                <Terminal content={code} />
            </div>
        </div>
    )
}