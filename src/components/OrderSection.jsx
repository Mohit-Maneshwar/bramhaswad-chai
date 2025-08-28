// components/OrderSection.jsx
import React, { useState } from "react"
import { motion } from "framer-motion"

export default function OrderSection() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [qty, setQty] = useState(1)
  const [error, setError] = useState("")

  const product = {
    name: "Rajvadi Kadak Chai - 1Kg",
    price: 450,
    desc: "A premium royal blend with strong aroma and bold taste.",
    img: "/images/bg.png",
  }

  function validate() {
    if (!name.trim()) return "Please enter your name."
    if (!address.trim()) return "Please enter delivery address."
    if (!phone.trim() || phone.replace(/\D/g, "").length < 7) return "Please enter a valid phone number."
    if (qty < 1) return "Quantity must be at least 1."
    return null
  }

  function placeOrder(e) {
    e.preventDefault()
    setError("")
    const v = validate()
    if (v) {
      setError(v)
      return
    }

    const msg = `Order%20from%20website:%0AName:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AProduct:%20${encodeURIComponent(product.name)}%20(x${qty})%0APrice:%20₹${product.price * qty}%0AAddress:%20${encodeURIComponent(address)}`
    const wa = `https://wa.me/917880298698?text=${msg}`
    window.open(wa, "_blank")
  }

  return (
    <section id="order" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-green-900 to-green-800 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img src={product.img} alt={product.name} className="w-72 md:w-96 rounded-3xl shadow-2xl border-2 border-yellow-400/20" />
            <div className="absolute -bottom-4 left-4 bg-yellow-400 text-green-900 font-bold px-3 py-1 rounded-xl shadow-lg">Best Seller</div>
          </div>
        </motion.div>

        {/* Product Details + Order Form */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">{product.name}</h2>
          <p className="text-gray-200 max-w-xl">{product.desc}</p>

          <div className="flex items-center gap-6">
            <ul className="space-y-2 text-gray-300">
              <li>✅ 100% Natural Ingredients</li>
              <li>✅ Rich aroma and bold taste</li>
              <li>✅ Packed for freshness</li>
            </ul>

            <div className="ml-auto text-2xl font-semibold text-yellow-400">Price: ₹{product.price} / 1Kg</div>
          </div>

          <form onSubmit={placeOrder} className="space-y-4 bg-white/5 p-6 rounded-2xl shadow-inner">
            <div>
              <label htmlFor="order-name" className="sr-only">Name</label>
              <input id="order-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none" required />
            </div>

            <div>
              <label htmlFor="order-address" className="sr-only">Address</label>
              <input id="order-address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address" className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none" required />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="order-phone" className="sr-only">Phone</label>
                <input id="order-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none" type="tel" required />
              </div>
              <div>
                <label htmlFor="order-qty" className="sr-only">Quantity</label>
                <input id="order-qty" value={qty} onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))} placeholder="Quantity" className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none" type="number" min={1} />
              </div>
            </div>

            {error && <div className="text-red-300 text-sm">{error}</div>}

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-3 bg-yellow-400 text-green-900 font-bold rounded-lg hover:bg-yellow-300 transition">
              Place Order via WhatsApp
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
