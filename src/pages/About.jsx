export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-bts.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center">
        <div className="">
          <h2 className="text-4xl mb-4 tracking-wider lowercase">About kitsu</h2>
          <p className="max-w-2xl mx-auto mb-2">
          kitsu is the culmination of a career in the service of hospitality. 
          </p>
          <p className="max-w-2xl mx-auto mb-2">
          With over 15 years of dedication to training in world class kitchens, dreamy bakeries and ethereal restaurants, kitsu seeks to provide the experience of fine dining in the comfort of your own home. 
          </p>
          <p className="max-w-2xl mx-auto mb-2">
          We source the worlds best ingredients and pair them with intention and attention to offer you and your guests with a truly unique experience.  
          </p>
          <p className="max-w-2xl mx-auto mb-2">
          With kitsu, you can finally dine on your own terms. 
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Curate your guest list, pour your favourite wine, pick the playlist and let us handle the rest. 
          </p>
        </div>
      </div>
    </div>
  );
}




