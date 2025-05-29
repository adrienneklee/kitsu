export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-sauce.JPG')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div className="text-center">
        <h2 className="text-4xl mb-4 tracking-wider lowercase">Gallery</h2>
        <p className="max-w-2xl mx-auto mt-6">Coming soon...</p>
        </div>

      </div>
    </div>
  );
}
