import { useState } from 'react'
import Header from './components/Header'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-10 space-y-10">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-800">Shop by category</h2>
          <CategoryGrid onSelect={(slug) => setSelectedCategory(slug)} />
        </section>

        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl font-semibold text-slate-800">
              {selectedCategory ? `Products in "+selectedCategory+"` : 'All products'}
            </h2>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full sm:w-64 px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => { setSelectedCategory(''); setQuery('') }}
                className="px-3 py-2 rounded-lg border border-slate-300 hover:border-slate-400 text-sm"
              >
                Clear
              </button>
            </div>
          </div>

          <ProductGrid category={selectedCategory} query={query} />
        </section>
      </main>
    </div>
  )
}

export default App
