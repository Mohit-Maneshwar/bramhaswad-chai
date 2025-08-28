import { motion } from "framer-motion";
import { Leaf, Coffee, Crown, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white py-20 px-4 md:px-16 overflow-hidden">
      {/* Subtle pattern for premium feel */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-6 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-yellow-400 text-green-900 rounded-full font-semibold">Premium Blend</div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-yellow-300">Bramhaswad Rajvadi Kadak Chai</h2>
          <p className="text-gray-300 text-lg leading-relaxed">Experience a royal cup crafted from handpicked leaves and traditional spices. Our signature Rajvadi Kadak Chai combines bold strength with a silky finish — designed for true chai connoisseurs.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Leaf className="text-yellow-400 w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Natural Ingredients</div>
                <div className="text-sm text-gray-300">No artificial flavors. Just tea, spices, and love.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Coffee className="text-yellow-400 w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Bold & Balanced</div>
                <div className="text-sm text-gray-300">Strong aroma with a smooth aftertaste.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Crown className="text-yellow-400 w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Royal Recipe</div>
                <div className="text-sm text-gray-300">Inspired by traditional palace blends.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="text-yellow-400 w-6 h-6 mt-1" />
              <div>
                <div className="font-semibold">Beloved Taste</div>
                <div className="text-sm text-gray-300">Favored by thousands of customers.</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/order">
              <button className="px-6 py-3 bg-yellow-400 text-green-900 font-semibold rounded-xl shadow hover:scale-105 transform transition">Order Now</button>
            </Link>
            <Link to="/about-more">
              <button className="px-6 py-3 border border-yellow-300 rounded-xl text-yellow-200 hover:bg-white/5 transition">Learn Our Story</button>
            </Link>
          </div>
        </motion.div>

        {/* Right: Visual / Story */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>

          <div className="w-full max-w-md bg-white/5 rounded-3xl p-6 shadow-2xl backdrop-blur border border-white/6">
            <img src="/images/bg.png" alt="Rajvadi Kadak Chai" className="w-full h-64 object-cover rounded-2xl mb-4" />
            <h4 className="text-xl font-bold text-yellow-300">From Leaf to Cup</h4>
            <p className="text-sm text-gray-300 mt-2">We partner with small tea gardens to source the best black tea leaves. Each batch is blended and tested for consistent quality.</p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-yellow-300 font-bold">250+</div>
                <div className="text-xs text-gray-300">Batches</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-300 font-bold">4.8★</div>
                <div className="text-xs text-gray-300">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-300 font-bold">10k+</div>
                <div className="text-xs text-gray-300">Cups/Month</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Testimonials / Mission block */}
      <motion.div
        className="mt-20 max-w-5xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold mb-6 text-yellow-300">What our customers say</h3>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          <motion.blockquote className="bg-white/5 p-6 rounded-2xl text-left" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <p className="text-gray-200">"The strongest, most flavourful chai I've had — a daily ritual now."</p>
            <footer className="mt-3 text-sm text-yellow-200">— Aarti, Mumbai</footer>
          </motion.blockquote>
          <motion.blockquote className="bg-white/5 p-6 rounded-2xl text-left" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <p className="text-gray-200">"Perfect for events — guests loved the royal touch."</p>
            <footer className="mt-3 text-sm text-yellow-200">— Rohit, Pune</footer>
          </motion.blockquote>
          <motion.blockquote className="bg-white/5 p-6 rounded-2xl text-left" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <p className="text-gray-200">"Bold, consistent, and authentic. Highly recommended."</p>
            <footer className="mt-3 text-sm text-yellow-200">— Meera, Delhi</footer>
          </motion.blockquote>
        </div>
      </motion.div>

      {/* Mission / Footer CTA */}
      <motion.div className="mt-16 max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h3 className="text-3xl font-bold mb-4 text-yellow-300">Our Mission</h3>
        <p className="text-gray-300 leading-relaxed text-lg mb-6">To deliver a premium Kadak Chai experience while supporting sustainable sourcing and local tea gardens. We believe great taste comes from respect for ingredients and craft.</p>
        <Link to="/contact">
          <button className="px-8 py-3 bg-yellow-400 text-green-900 rounded-xl font-semibold hover:scale-105 transition">Get in touch</button>
        </Link>
      </motion.div>
    </section>
  );
}
