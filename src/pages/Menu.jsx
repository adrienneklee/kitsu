// src/pages/Menu.jsx
import { motion } from 'framer-motion';

export default function Menu() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-4xl mb-4 uppercase tracking-wider">Menu</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A seasonal Omakase experience highlighting premium seafood flown in daily from Japan.
        </p>
      </div>
    </motion.div>
  );
}
