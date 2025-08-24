// components/OrderSection.jsx
import { motion } from "framer-motion";

export default function OrderSection() {
  return (
    <section
      id="order"
      className="py-20 px-6 bg-gradient-to-b from-green-900 to-green-800 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/bg.png" // yaha apne product image ka path do
            alt="Rajwadi Kadak Chai"
            className="w-80 md:w-96 rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Product Details + Order Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-yellow-400">
            Rajwadi Kadak Chai
          </h2>
          <p className="text-gray-200">
            A premium blend of strong leaf tea that gives you the authentic 
            taste of tradition. Perfect for every tea lover who enjoys rich, 
            bold and aromatic chai.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>✅ 100% Natural Ingredients</li>
            <li>✅ Strong Leaf Tea</li>
            <li>✅ Packed with Aroma & Taste</li>
            <li>✅ 1 Kg Pack</li>
          </ul>

          <div className="text-2xl font-semibold text-yellow-400">
            Price: ₹450 / 1Kg
          </div>

          {/* Order Form */}
          <form className="space-y-4 bg-green-950 p-6 rounded-2xl shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none"
              required
            />
            <input
              type="text"
              placeholder="Your Address"
              className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-green-800 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition"
            >
              Place Order
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
