// src/pages/Gallery.jsx
import { motion } from 'framer-motion';

export default function Gallery() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-4xl mb-4 uppercase tracking-wider">Gallery</h2>
        <p className="text-gray-400">Images coming soon...</p>
      </div>
    </motion.div>
  );
}
