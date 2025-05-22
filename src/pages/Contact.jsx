import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white flex items-center justify-center px-8 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h2 className="text-4xl mb-4 uppercase tracking-wider">Contact</h2>
        <p className="text-gray-400">For reservations or inquiries, please email us directly.</p>

        <a href="mailto: jonathan.kemeny@gmail.com?subject=Kitsu Dining Reservations & Inquiries." 
        title="Email" 
        aria-label="Email address"
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400"
        >
          Kitsu@Email.com
        </a>

      </div>
    </motion.div>
  );
}
