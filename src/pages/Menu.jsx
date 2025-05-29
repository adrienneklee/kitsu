export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-dish.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div className="text-center mt-18">
          <h2 className="text-4xl mb-2 tracking-wider lowercase">Menu</h2>
          <p className="max-w-4xl mx-auto italic mb-6">	Our menus are tailored to the tastes of each of our unique clients. Based on your personal appetite and seasonal availability only the best ingredients are sourced for you and are guaranteed to impress. A sample menu can be found below: </p>

          <p className="max-w-2xl mx-auto italic">Canapés</p>
          <p className="max-w-2xl mx-auto">kistu signature caviar tart</p>
          <p className="max-w-2xl mx-auto">Tuna tartare spring roll</p>
          <p className="max-w-2xl mx-auto">Foie gras honey butter toast </p>

          <p className="max-w-2xl mx-auto mt-6">BC spot prawns + wild leeks</p>
          <p className="max-w-2xl mx-auto italic">celery root and ramp emulsion</p>

          <p className="max-w-2xl mx-auto mt-6">Hokkaido scallops + caviar </p>
          <p className="max-w-2xl mx-auto italic">brown butter beurre blanc </p>

          <p className="max-w-2xl mx-auto mt-6">Black cod + white asparagus </p>
          <p className="max-w-2xl mx-auto italic">crab and corn bisque </p>

          <p className="max-w-2xl mx-auto mt-6">Dry aged ribeye + wild mushrooms </p>
          <p className="max-w-2xl mx-auto italic">glazed leeks and truffle jus </p>

          <p className="max-w-2xl mx-auto mt-6">Coffee + Chocolate</p>
          <p className="max-w-2xl mx-auto">Milk + Honey</p>
        </div>
      </div>
    </div>
  );
}




