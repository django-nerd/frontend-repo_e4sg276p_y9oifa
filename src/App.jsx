import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import CartBar from './components/CartBar'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [cart, setCart] = useState([])
  const [message, setMessage] = useState('')

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => (p.id || p.sku) === (item.id || item.sku))
      if (existing) {
        return prev.map((p) => (p.id || p.sku) === (item.id || item.sku) ? { ...p, quantity: p.quantity + 1 } : p)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const checkout = async () => {
    try {
      const payload = {
        items: cart.map((c) => ({
          product_id: c.id || c.sku,
          quantity: c.quantity,
          price: c.price,
          title: c.title,
        }))
      }
      const r = await fetch(`${API}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await r.json()
      if (data.ok) {
        setMessage('Order placed! ID: ' + data.order_id)
        setCart([])
      } else {
        setMessage('Checkout failed')
      }
    } catch (e) {
      setMessage('Checkout error')
    }
  }

  return (
    <div className="min-h-screen bg-[#070511]">
      <Navbar />
      <Hero />

      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.25),rgba(2,0,12,0))]" />
        <div className="relative z-10">
          <ProductGrid onAdd={addToCart} />

          {message && (
            <div className="max-w-6xl mx-auto px-6">
              <div className="mt-6 p-3 rounded-lg bg-white/10 text-purple-100 text-sm">{message}</div>
            </div>
          )}

          <div className="h-16" />
          <CartBar items={cart} onCheckout={checkout} />
          <div className="h-10" />
        </div>
      </div>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 text-purple-200/80 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Victus MC • Not affiliated with Mojang/Microsoft</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}
