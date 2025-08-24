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
          Our tea is sourced from the best gardens, blended with a secret 
          royal recipe that has been passed down through generations. 
          Each cup is designed to refresh your mind and energize your soul.
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
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <img
            src="/images/img2.jpg"
            alt="Rajvadi Kadak Chai Pack"
            className="rounded-2xl shadow-2xl w-80 md:w-96"
          />
        </motion.div>
      </div>
    </section>
  );
}
