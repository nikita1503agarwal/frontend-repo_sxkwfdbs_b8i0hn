import { useEffect, useState } from 'react'

export default function ProductGrid({ category, query }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const params = new URLSearchParams()
        if (category) params.append('category', category)
        if (query) params.append('q', query)
        const res = await fetch(`${base}/api/products?${params.toString()}`)
        const data = await res.json()
        setProducts(data.items || [])
      } catch (e) {
        console.error('Failed to fetch products', e)
      } finally {
        setLoading(false)
      }
    }
    setLoading(true)
    load()
  }, [category, query])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-64 rounded-xl bg-slate-200 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <div key={p._id} className="rounded-xl border border-slate-200 bg-white hover:shadow-md transition overflow-hidden">
          <div className="aspect-square bg-slate-100">
            {p.image ? (
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                {p.title}
              </div>
            )}
          </div>
          <div className="p-3 space-y-1">
            <p className="text-sm font-medium text-slate-800 line-clamp-1">{p.title}</p>
            <p className="text-xs text-slate-500">{p.category}</p>
            <p className="text-sm font-semibold text-blue-600">${'{'}p.price.toFixed(2){'}'}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
