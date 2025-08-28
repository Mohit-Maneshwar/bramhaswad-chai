import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 800)
  }   

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 text-white py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-0 sm:px-6">
        <motion.header
          className="rounded-3xl bg-gradient-to-r from-green-800/60 to-green-900/60 p-8 mb-10 shadow-2xl backdrop-blur"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold">Contact Bramhaswad</h1>
              <p className="mt-2 text-yellow-200 max-w-xl">Questions, orders, or feedback — our team is happy to help. Reach out for catering, wholesale, or retail orders.</p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/order"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-green-900 rounded-lg font-semibold shadow hover:scale-105 transform transition"
              >
                <Send size={16} /> Order Now
              </a>
              <div className="text-sm text-yellow-100">Call us: <span className="font-medium">+91 98765 43210</span></div>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.section
            className="lg:col-span-2 bg-white/5 rounded-2xl p-8 shadow-inner"
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Send us a message</h2>
            <p className="text-yellow-100 mb-6">Tell us about your order, preferred pickup/delivery time, or any questions — we'll get back fast.</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="col-span-1 md:col-span-1 px-4 py-3 rounded-lg bg-white/10 placeholder-yellow-200 border border-white/10 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="col-span-1 md:col-span-1 px-4 py-3 rounded-lg bg-white/10 placeholder-yellow-200 border border-white/10 focus:outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your order or question"
                className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-white/10 placeholder-yellow-200 border border-white/10 focus:outline-none"
              />

              <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                <button type="submit" className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-lg shadow hover:scale-105 transform transition">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'sent' && <div className="text-yellow-200">Thanks! We’ll reply soon.</div>}
                <div className="ml-auto text-sm text-yellow-100">We typically reply within a few hours.</div>
              </div>
            </form>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/3 rounded-lg">
                <div className="flex items-center gap-3 text-yellow-300 mb-2"><Phone /> <span className="font-semibold">Phone</span></div>
                <div className="text-sm text-yellow-100">+91 98765 43210</div>
              </div>
              <div className="p-4 bg-white/3 rounded-lg">
                <div className="flex items-center gap-3 text-yellow-300 mb-2"><Mail /> <span className="font-semibold">Email</span></div>
                <div className="text-sm text-yellow-100">hello@bramhaswadchai.com</div>
              </div>
              <div className="p-4 bg-white/3 rounded-lg">
                <div className="flex items-center gap-3 text-yellow-300 mb-2"><MapPin /> <span className="font-semibold">Visit</span></div>
                <div className="text-sm text-yellow-100">Mumbai, Maharashtra</div>
              </div>
            </div>
          </motion.section>

          <motion.aside
            className="flex flex-col gap-6"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 rounded-2xl p-6 shadow-inner">
              <h3 className="font-bold text-yellow-300 mb-3">Where to find us</h3>
              <div className="w-full h-48 bg-black/20 rounded-md overflow-hidden">
                <img src="/images/bg.png" alt="map" className="w-full h-full object-cover opacity-80" />
              </div>
              <p className="mt-3 text-sm text-yellow-100">Delivery across Mumbai and select cities. For bulk orders, contact us for custom quotes and scheduling.</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 shadow-inner">
              <h3 className="font-bold text-yellow-300 mb-3">Common questions</h3>
              <details className="mb-2 text-yellow-100">
                <summary className="cursor-pointer font-medium">Do you ship outside India?</summary>
                <p className="mt-2 text-sm">Currently we ship within India only; international shipping coming soon.</p>
              </details>
              <details className="mb-2 text-yellow-100">
                <summary className="cursor-pointer font-medium">How long does delivery take?</summary>
                <p className="mt-2 text-sm">Standard delivery: 3–5 business days depending on location.</p>
              </details>
              <details className="mb-2 text-yellow-100">
                <summary className="cursor-pointer font-medium">Do you offer catering for events?</summary>
                <p className="mt-2 text-sm">Yes — email us with your event date and headcount and we’ll send a quote.</p>
              </details>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  )
}

export default Contact
