export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-plating.JPG')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4 lowercase tracking-wider">Contact</h2>
          <p className="">For reservations or inquiries, please email us directly.</p>

          <a href="mailto: jonathan.kemeny@gmail.com?subject=Kitsu Dining Reservations & Inquiries." 
          title="Email" 
          aria-label="Email address"
          target="_blank" 
          rel="noopener noreferrer" 
          className=""
          >
            Kitsu@Email.com
          </a>

        </div>

      </div>
    </div>
  );
}



