import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex border-b-2 border-b-[#4F4D4D]">
      <div className="flex items-center flex-start gap-2 p-4 w-1/2 h-16">
        <Image src="/eclair.png" width={40} height={40} className="h-10 w-auto" alt="Logo" />
        <div className="text-xl font-custom text-white">JSCMP</div>
      </div>
      <div className="flex items-center justify-end w-1/2 p-5 gap-3">
        <div>Docs</div>
        <div>GitHub</div>
      </div>
    </div>
  );
}
