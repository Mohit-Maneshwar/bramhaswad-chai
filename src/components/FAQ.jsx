// src/components/FAQ.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bramhaswad Rajvadi Kadak Chai kya hai?",
    answer:
      "Ye ek premium blend hai jo strong taste aur rich aroma ke liye jana jata hai. Ye specially banayi gayi hai ek dum kadak chai ke shaukeen ke liye.",
  },
  {
    question: "Kya ye chai 100% natural hai?",
    answer:
      "Haan, ye chai 100% natural tea leaves se banayi gayi hai, bina kisi artificial flavor ke.",
  },
  {
    question: "Is chai ko banane ka best tareeka kya hai?",
    answer:
      "1 cup doodh + 1 cup paani mein 1 chamach chai daal kar 3-4 minute tak ubalein. Apni pasand ke hisaab se cheeni aur adrak/malai add kar sakte ho.",
  },
  {
    question: "Is chai ko store kaise karein?",
    answer:
      "Chai ko hamesha ek air-tight container mein, thandi aur sookhi jagah par rakhein. Direct sunlight se bacha kar rakhein.",
  },
  {
    question: "Delivery aur availability kaisi hai?",
    answer:
      "Bramhaswad Rajvadi Kadak Chai all over India deliver hoti hai. Aap online order kar ke 3-5 din ke andar product receive kar sakte ho.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-green-950 text-white py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-yellow-400"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-green-900 rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={22} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
