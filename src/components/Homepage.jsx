import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TitleCard from "./TitleCard";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const overlayY = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full overflow-hidden">
      {/* Fullscreen Looped Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />

        <TitleCard/>
    </div>
  );
}
