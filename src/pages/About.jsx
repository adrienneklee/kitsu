import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-4xl mb-4 uppercase tracking-wider">About Kitsu Dining</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Chef Masaki Saito brings Edomae-style sushi to Toronto with precision, elegance, and artistic discipline.
        </p>
      </div>
    </motion.div>
  );
}
