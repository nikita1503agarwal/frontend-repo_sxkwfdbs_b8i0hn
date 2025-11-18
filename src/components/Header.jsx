import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow">
            e
          </div>
          <span className="text-xl font-semibold text-slate-800">BlueStore</span>
        </div>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="/test" className="text-sm hover:text-slate-900">Status</a>
          <button className="relative inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-400 transition">
            <ShoppingCart size={18} />
            <span className="text-sm">Cart</span>
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
