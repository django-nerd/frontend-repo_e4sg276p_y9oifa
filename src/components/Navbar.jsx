import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur-md/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-lg" />
          <span className="text-white text-lg font-semibold tracking-wide">Victus MC</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#store" className="text-sm text-purple-100 hover:text-white transition-colors">Store</a>
          <a href="#ranks" className="text-sm text-purple-100 hover:text-white transition-colors">Ranks</a>
          <a href="#support" className="text-sm text-purple-100 hover:text-white transition-colors">Support</a>
        </nav>
        <button className="md:hidden text-white/80"><Menu /></button>
      </div>
    </header>
  )
}
