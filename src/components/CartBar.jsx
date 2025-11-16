import { useMemo } from 'react'

export default function CartBar({ items, onCheckout, onRemove }) {
  const total = useMemo(() => items.reduce((s, it) => s + it.price * it.quantity, 0), [items])

  return (
    <div className="sticky bottom-4 max-w-6xl mx-auto px-4">
      <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-3 flex items-center justify-between">
        <div className="text-purple-100 text-sm">
          {items.length === 0 ? 'Your cart is empty' : `${items.length} item(s)`}
          {items.length > 0 && <span className="ml-3 text-white font-semibold">${total.toFixed(2)}</span>}
        </div>
        <div className="flex items-center gap-2">
          {items.length > 0 && (
            <button onClick={onCheckout} className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-sm">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
