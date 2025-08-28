import { motion } from "framer-motion";

export default function AboutMore() {
  return (
    <section className="bg-green-950 text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          More About Rajvadi Kadak Chai
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our tea is sourced from the best gardens, blended with a secret royal
          recipe that has been passed down through generations. Each cup is
          designed to refresh your mind and energize your soul.
        </motion.p>

        <motion.ul
          className="space-y-4 text-gray-200 list-disc list-inside"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <li>🌱 Handpicked premium tea leaves</li>
          <li>🍵 Authentic Rajvadi flavor</li>
          <li>✨ No artificial flavors or preservatives</li>
          <li>💛 Trusted by thousands of tea lovers</li>
        </motion.ul>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.img
            src="/images/bg.png"
            alt="Rajvadi Kadak Chai Pack"
            className="rounded-2xl shadow-2xl w-56 md:w-72"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />

          <motion.blockquote
            className="max-w-xl text-center bg-gradient-to-b from-yellow-50/5 to-transparent border border-yellow-400/10 p-6 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="font-serif font-extrabold text-yellow-300 text-lg md:text-xl tracking-wide leading-relaxed drop-shadow-lg">
              Rajvadi Kadak Chai is a strong and flavorful tea that blends rich spices with bold taste, offering the perfect energizing experience. It captures the royal essence of traditional Indian chai, making every sip warm, comforting, and refreshingly regal.
            </p>
            <footer className="mt-4 text-sm text-yellow-200">— Rajvadi Signature Blend</footer>
          </motion.blockquote>

          <motion.img
            src="/images/bg.png"
            alt="Rajvadi Kadak Chai Pack"
            className="rounded-2xl shadow-2xl w-56 md:w-72"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
