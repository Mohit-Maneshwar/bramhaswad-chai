import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-green-900 to-green-800 flex items-center justify-center text-white p-6">
      {/* Decorative blurred shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl transform rotate-12" />
      <div className="absolute -bottom-28 -right-20 w-96 h-96 bg-yellow-300/6 rounded-full blur-2xl" />

      <div className="relative z-10 w-full max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left: Animated 404 number */}
          <motion.div className="flex-1 flex items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.h1 className="text-7xl md:text-9xl font-extrabold text-yellow-300 leading-tight drop-shadow-xl"
              animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              404
            </motion.h1>
          </motion.div>

          {/* Right: Message and animated cup */}
          <motion.div className="flex-1 text-center md:text-left"
            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-100 mb-3">Page not found</h2>
            <p className="text-yellow-200 mb-6 max-w-xl">The royal chai you were looking for is taking a short break — let's get you back to something warm and familiar.</p>

            {/* Steaming cup animation */}
            <motion.div className="flex items-center gap-6 justify-center md:justify-start mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <motion.svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path d="M10 44c0 6 6 10 14 10s14-4 14-10H10z" fill="#FFF7EA" />
                <motion.path d="M38 20c6 0 12 3 12 8s-6 8-12 8" stroke="#F6E27A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <motion.path d="M44 28c2-2 2-6 0-8" stroke="#F6E27A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                {/* steam */}
                <motion.path d="M22 12c0 4-4 6-2 10" stroke="#FFD96B" strokeWidth="1.6" strokeLinecap="round" animate={{ y: [0, -6, 0], opacity: [1, 0.6, 1] }} transition={{ repeat: Infinity, duration: 2.4 }} />
                <motion.path d="M28 10c0 5-5 7-3 11" stroke="#FFD96B" strokeWidth="1.2" strokeLinecap="round" animate={{ y: [0, -8, 0], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2.8 }} />
              </motion.svg>

              <div>
                <div className="text-yellow-100 font-semibold">Need a hand?</div>
                <div className="text-yellow-200 text-sm">Try returning home or contact our team for help.</div>
              </div>
            </motion.div>

            <div className="flex justify-center md:justify-start gap-4">
              <Link to="/" className="inline-flex items-center gap-2 px-5 py-3 bg-yellow-400 text-green-900 font-semibold rounded-full shadow hover:bg-yellow-300 transition">Home</Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 border border-yellow-300 text-yellow-100 rounded-full hover:bg-white/3 transition">Contact</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
