// src/components/Features.jsx
import { motion } from "framer-motion";
import { Leaf, Coffee, HeartPulse, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-500" />,
    title: "Natural Ingredients",
    desc: "Made from carefully selected tea leaves ensuring freshness in every sip."
  },
  {
    icon: <Coffee className="w-10 h-10 text-amber-500" />,
    title: "Strong Aroma & Taste",
    desc: "Perfectly balanced flavor with a kadak kick that energizes your day."
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-red-500" />,
    title: "Health Benefits",
    desc: "Rich in antioxidants that help boost immunity and overall wellness."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    title: "Premium Quality",
    desc: "ISO certified quality ensuring purity and authenticity in every pack."
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-green-950 to-green-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Rajwadi Kadak Chai?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of strong taste, natural health benefits, and premium quality tea leaves.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-green-800/40 rounded-2xl p-6 shadow-lg border border-green-700 hover:border-amber-400 transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
