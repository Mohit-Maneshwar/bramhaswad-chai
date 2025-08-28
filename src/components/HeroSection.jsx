import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/img1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)", 
        }}
      ></div>

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Bramhaswad <span className="text-yellow-400">Rajvadi Kadak Chai</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the perfect blend of strong aroma, bold taste, and refreshing energy.  
            Rajvadi Kadak Chai is more than just tea—it’s a tradition of royalty in every sip.  
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.a
            href="/order"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-yellow-500 text-green-900 font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Order Now
          </motion.a>
        </div>

        {/* Right Side - Two Images */}
        <div className="flex justify-center md:justify-end gap-6">
          <motion.img
            src="/images/logo2.png"
            alt="Rajvadi Kadak Chai Pack 1"
            className="w-40 md:w-56 rounded-xl shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
          <motion.img
            src="/images/logo.png"
            alt="Rajvadi Kadak Chai Pack 2"
            className="w-40 md:w-56 rounded-xl shadow-xl hidden sm:block"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓
      </motion.div>
    </section>
  );
}
