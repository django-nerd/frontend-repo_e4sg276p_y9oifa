import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ProductCard({ item, onAdd }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 hover:-translate-y-1 transition-all">
      <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-900/40 to-fuchsia-900/40 flex items-center justify-center">
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-purple-200">{item.title}</div>
        )}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">{item.title}</h3>
          {item.badge && (
            <span className="text-[10px] uppercase bg-purple-600/30 text-purple-200 px-2 py-1 rounded">{item.badge}</span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 text-sm text-purple-200/80 line-clamp-2">{item.description}</p>
        )}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-purple-100 font-semibold">${item.price.toFixed(2)}</span>
          <button onClick={() => onAdd(item)} className="px-3 py-1.5 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm">Add</button>
        </div>
      </div>
    </div>
  )
}

export default function ProductGrid({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch(`${API}/api/products`)
        const data = await r.json()
        setItems(data.items || [])
      } catch (e) {
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <p className="text-purple-200">Loading products...</p>
  if (error) return <p className="text-red-300">{error}</p>

  return (
    <section id="store" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Items</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <ProductCard key={it.id || it.sku} item={it} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
