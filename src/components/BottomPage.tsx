export default function BottomPage() {
  return (
    <footer className="w-full bg-[#19191F] text-gray-400 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">Based in Lille, France</p>
        <div className="flex justify-center items-center gap-1 text-sm">
          <span>Created by</span>
          <a href="https://github.com/HForGames" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition underline">
            Hugo GALAN
          </a>
          <span>,</span>
          <a href="https://github.com/SimonBandiera" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition underline">
            Simon BANDIERA
          </a>
          <span>and</span>
          <a href="https://github.com/victornu" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition underline">
            Victor BRAUN
          </a>
        </div>
      </div>
    </footer>
  );
}