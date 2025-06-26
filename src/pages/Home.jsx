export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://video.wixstatic.com/video/1d20b7_07ef8e940c364ea8a7c6c313a8bcea22/1080p/mp4/file.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:text-6xl font-bold text-center">
            kitsu private dining
          </h1>
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-2 text-center">
          savour the taste of fine dining at home
          </h2>
        </div>

      </div>
    </div>
  );
}
