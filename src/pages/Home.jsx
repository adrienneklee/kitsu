export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-caviar.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div>
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            kitsu private dining
          </h1>
          <h2 className="md:text-2xl font-bold text-center">
          Savour the art of fine dining 
          </h2>
        </div>

      </div>
    </div>
  );
}
