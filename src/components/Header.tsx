import Image from 'next/image';

export default function Header() {
  return (
      <div className="flex w-screen border-b border-b-[#4F4D4D] flex-col sm:flex-row">
          <div className="flex items-center flex-start gap-2 p-4 w-full sm:w-1/2 h-16">
              <Image src="/web/eclair.png" width={40} height={40} className="h-8 sm:h-10 w-auto" alt="Logo"/>
              <a href='/web/' className="classic text-lg sm:text-xl font-custom text-white">JSCMP</a>
          </div>
          <div className="flex items-center justify-center sm:justify-end w-full sm:w-1/2 p-4 sm:p-5 gap-4 sm:gap-3">
              <a className='classic hover:underline text-sm sm:text-base' href='https://js-cmp.github.io/JS-CMP/' target='blank'>Docs</a>
              <a className='classic hover:underline text-sm sm:text-base' href='https://github.com/JS-CMP' target='blank'>GitHub</a>
              <a className='classic hover:underline text-sm sm:text-base' href='/web/blogs' target='blank'>Blogs</a>
          </div>
      </div>
  );
}
