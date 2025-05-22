import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl font-light tracking-widest uppercase">Kitsu Dining</h1>
      <p className="mt-4 text-sm tracking-widest uppercase text-gray-400">Toronto</p>
    </motion.div>
  );
}
