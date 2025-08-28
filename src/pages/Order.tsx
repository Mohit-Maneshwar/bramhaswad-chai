import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, CreditCard, Check } from 'lucide-react'

type Product = {
  id: string
  name: string
  price: number
  desc?: string
}

type OrderData = {
  productId: string
  productName: string
  qty: number
  name: string
  phone: string
  email?: string
  address: string
  payment: 'cash' | 'online'
}

const PRODUCTS: Product[] = [
  { id: 'pkg-small', name: 'Rajvadi Kadak Chai - 250g', price: 149, desc: 'Bold & aromatic' },
  { id: 'pkg-medium', name: 'Rajvadi Kadak Chai - 500g', price: 279, desc: 'Popular choice' },
  { id: 'pkg-large', name: 'Rajvadi Kadak Chai - 1kg', price: 499, desc: 'Best value' },
]

export default function Order() {
  const [data, setData] = useState<OrderData>({
    productId: PRODUCTS[0].id,
    productName: PRODUCTS[0].name,
    qty: 1,
    name: '',
    phone: '',
    email: '',
    address: '',
    payment: 'cash',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const update = (patch: Partial<OrderData>) => setData((d) => ({ ...d, ...patch }))

  const product = PRODUCTS.find((p) => p.id === data.productId) || PRODUCTS[0]
  const total = (product.price || 0) * data.qty

  function validate() {
    if (!data.name.trim()) return 'Please enter your name.'
    if (!/^[0-9]{7,15}$/.test(data.phone.replace(/\s|\+/g, ''))) return 'Please enter a valid phone number.'
    if (!data.address.trim()) return 'Please enter delivery address.'
    if (data.qty < 1) return 'Quantity must be at least 1.'
    return null
  }

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    setError(null)
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    // Build a friendly WhatsApp order message
  const lines: string[] = []
    lines.push(`Order: ${product.name}`)
    lines.push(`Quantity: ${data.qty}`)
    lines.push(`Total: ₹${total}`)
    lines.push('')
    lines.push('Customer details:')
    lines.push(`Name: ${data.name}`)
    lines.push(`Phone: ${data.phone}`)
    if (data.email) lines.push(`Email: ${data.email}`)
    lines.push(`Address: ${data.address}`)
    lines.push(`Payment: ${data.payment === 'cash' ? 'Cash on Delivery' : 'Online'}`)

    const text = encodeURIComponent(lines.join('\n'))
    const waNumber = '917880298698' // requested number without +
    const url = `https://wa.me/${waNumber}?text=${text}`

    // Open WhatsApp chat in a new tab/window
    window.open(url, '_blank')
    setStatus('sent')
  }

  return (
    <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6 bg-gradient-to-b from-green-900 to-green-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white/5 rounded-2xl p-6 sm:p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-2">Place an Order</h2>
        <p className="text-sm text-yellow-100 mb-6">Select a product, provide delivery details, and confirm your order.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <label htmlFor="product-select" className="text-sm text-yellow-200">Product</label>
          <select
            value={data.productId}
            id="product-select"
            onChange={(e) => {
              const id = e.target.value
              const prod = PRODUCTS.find((p) => p.id === id)!
              update({ productId: id, productName: prod.name })
            }}
            className="px-3 py-2 rounded-md bg-white/10 border border-white/10"
          >
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.id} className="text-black">
                {p.name} — ₹{p.price}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="quantity-input" className="text-sm text-yellow-200">Quantity</label>
              <input
                type="number"
                min={1}
                id="quantity-input"
                value={data.qty}
                onChange={(e) => update({ qty: Math.max(1, Number(e.target.value) || 1) })}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
              />
            </div>

            <div>
              <label htmlFor="payment-select" className="text-sm text-yellow-200">Payment</label>
              <select
                value={data.payment}
                id="payment-select"
                onChange={(e) => update({ payment: e.target.value as any })}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
              >
                <option value="cash">Cash on Delivery</option>
                <option value="online">Online Payment</option>
              </select>
            </div>
          </div>

          <label htmlFor="name-input" className="text-sm text-yellow-200">Full name</label>
          <input
            id="name-input"
            value={data.name}
            onChange={(e) => update({ name: e.target.value })}
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
            placeholder="Your name"
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="phone-input" className="text-sm text-yellow-200">Phone</label>
              <input
                id="phone-input"
                value={data.phone}
                onChange={(e) => update({ phone: e.target.value })}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
                placeholder="+91 9xxxx xxxxx"
              />
            </div>
            <div>
              <label htmlFor="email-input" className="text-sm text-yellow-200">Email (optional)</label>
              <input
                id="email-input"
                value={data.email}
                onChange={(e) => update({ email: e.target.value })}
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <label htmlFor="address-input" className="text-sm text-yellow-200">Delivery address</label>
          <textarea
            id="address-input"
            value={data.address}
            onChange={(e) => update({ address: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10"
            placeholder="House / street / landmark"
          />

          {error && <div className="text-red-300 text-sm">{error}</div>}

          <div className="flex items-center justify-between mt-2">
            <div>
              <div className="text-sm text-yellow-200">Summary</div>
              <div className="text-lg font-semibold text-yellow-300">
                {data.qty} × {product.name} = ₹{total}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {status === 'sent' ? (
                <div className="inline-flex items-center gap-2 text-green-300 bg-white/6 px-3 py-2 rounded-md">
                  <Check /> Order placed
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="px-4 py-2 bg-yellow-400 text-green-900 font-semibold rounded-md shadow hover:scale-105 transform transition"
                >
                  {status === 'sending' ? 'Placing...' : 'Place Order'}
                </button>
              )}
            </div>
          </div>
        </form>

        <motion.div className="mt-6 text-sm text-yellow-100/90" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-4">
            <Phone /> <span>Need help? Call us at <strong className="text-yellow-200">+91 98765 43210</strong></span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Mail /> <span>Or email <strong className="text-yellow-200">hello@bramhaswadchai.com</strong></span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
