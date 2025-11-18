import { useEffect, useState } from 'react'

export default function CategoryGrid({ onSelect }) {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/categories`)
        const data = await res.json()
        setCategories(data.items || [])
      } catch (e) {
        console.error('Failed to fetch categories', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-slate-200 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((c) => (
        <button
          key={c._id}
          onClick={() => onSelect?.(c.slug)}
          className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-md transition"
        >
          <div className="aspect-[4/3] w-full bg-slate-100">
            {c.image ? (
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                {c.name}
              </div>
            )}
          </div>
          <div className="p-3 text-left">
            <p className="text-sm font-medium text-slate-800">{c.name}</p>
            <p className="text-xs text-slate-500">/{c.slug}</p>
          </div>
        </button>
      ))}
    </div>
  )
}
