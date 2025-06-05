export default function About() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-bts.jpg')" }}
      />

      {/* Dark overlay with content */}
      <div className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center px-4">
        <div className="max-w-3xl text-white">
          <h2 className="text-xl sm:text-4xl mb-6 tracking-wider lowercase">
            About kitsu
          </h2>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            kitsu is the culmination of a career in the service of hospitality.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            With over 15 years of dedication to training in world class kitchens, dreamy bakeries and ethereal restaurants, kitsu seeks to provide the experience of fine dining in the comfort of your own home.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            We source the world’s best ingredients and pair them with intention and attention to offer you and your guests a truly unique experience.
          </p>

          <p className="text-sm sm:text-base md:text-lg mb-4">
            With kitsu, you can finally dine on your own terms.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg">
            Curate your guest list, pour your favourite wine, pick the playlist, and let us handle the rest.
          </p>
        </div>
      </div>
    </div>
  );
}
