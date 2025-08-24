import { motion } from "framer-motion";
import { Leaf, Coffee, Crown, Heart } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 Link import

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="relative grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Text Part */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">About Us</h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            <span className="font-semibold text-yellow-400">Bramhaswad Rajvadi Kadak Chai</span> 
            is more than just tea—it’s a royal experience in every sip. 
            Crafted from the finest handpicked black tea leaves, our blend 
            delivers a perfect balance of <span className="text-yellow-400">strength, aroma, and refreshment</span>.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Leaf className="text-yellow-400 w-6 h-6" />
              <p className="text-gray-300">100% Natural Ingredients</p>
            </div>
            <div className="flex items-center gap-3">
              <Coffee className="text-yellow-400 w-6 h-6" />
              <p className="text-gray-300">Strong & Bold Taste</p>
            </div>
            <div className="flex items-center gap-3">
              <Crown className="text-yellow-400 w-6 h-6" />
              <p className="text-gray-300">Royal Heritage Recipe</p>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-yellow-400 w-6 h-6" />
              <p className="text-gray-300">Loved by Thousands</p>
            </div>
          </div>

          {/* Learn More -> Link to new page */}
          <Link to="/about-more">
            <button className="px-8 py-3 bg-yellow-500 text-green-900 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-lg">
              Learn More
            </button>
          </Link>
        </motion.div>

        {/* Image Part */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-72 h-72 rounded-full bg-yellow-500 opacity-20 blur-3xl"></div>
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-yellow-500 relative z-10">
            <img
              src="/images/bg.png"
              alt="Rajvadi Kadak Chai"
              className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Extra Bottom Content */}
      <motion.div
        className="relative mt-16 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4 text-yellow-400">Our Mission</h3>
        <p className="text-gray-300 leading-relaxed text-lg">
          At Bramhaswad, we aim to bring the authentic taste of Indian Kadak Chai 
          to every household. Every cup tells a story of tradition, heritage, 
          and the royal culture of true tea lovers.  
        </p>
      </motion.div>
    </section>
  );
}
