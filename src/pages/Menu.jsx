export default function Menu() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-dish.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center px-4 py-12">
        <div className="text-center text-white max-w-4xl w-full mt-30">
          <h2 className="text-3xl sm:text-4xl mb-4 tracking-wider lowercase">
            Menu
          </h2>

          <p className="mb-8 text-sm sm:text-base md:text-lg">
            Our menus are tailored to the tastes of each of our unique clients.
            Based on your personal appetite and seasonal availability, only the best
            ingredients are sourced for you and are guaranteed to impress. A sample
            menu can be found below:
          </p>

          <div className="space-y-6 text-sm sm:text-base md:text-lg">
            <a className="menu" href="/Kitsu-sample-menu.pdf" target="_blank" rel="noopener noreferrer">Summer 2025 Sample Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}
