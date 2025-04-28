import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex border-b border-b-[#4F4D4D]">
        <div className="flex items-center flex-start gap-2 p-4 w-1/2 h-16">
            <Image src="/eclair.png" width={40} height={40} className="h-10 w-auto" alt="Logo" />
            <a href='/' className="text-xl font-custom text-white">JSCMP</a>
        </div>
        <div className="flex items-center justify-end w-1/2 p-5 gap-3">
            <a className='hover:underline' href='https://js-cmp.github.io/JS-CMP/' target='blank'>Docs</a>
            <a className='hover:underline' href='https://github.com/JS-CMP' target='blank'>GitHub</a>
            <a className='hover:underline' href='/blogs' target='blank'>Blogs</a>
        </div>
    </div>
  );
}
