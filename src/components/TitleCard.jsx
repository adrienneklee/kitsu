import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import About from "./About"

export default function TitleCard() {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

const overlayY = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);
    return (
      <div ref={containerRef} className="relative h-[200vh] w-full overflow-hidden">
        <motion.div
            style={{ y: overlayY }}
            className="fixed top-0 left-0 w-full h-screen z-10 flex items-center justify-center bg-black/60 text-white"
        >
            <div className="text-center">
            <img src="/kitsu_logo.png" alt="Logo" className="mx-auto mb-4 w-32 h-32 object-contain" />
            <h1 className="text-4xl md:text-6xl font-bold">Kitsu Dining</h1>
            </div>
        </motion.div>
        {/* <About/> */}
      </div>
    );
  }



