import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kitsu-caviar.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4 lowercase tracking-wider">Contact</h2>
          <p className="mb-2">For reservations or inquiries, please email us directly:</p>

          <a href="mailto: jonathan.kemeny@gmail.com?subject=Kitsu Dining Reservations & Inquiries." 
          title="Email" 
          aria-label="Email address"
          target="_blank" 
          rel="noopener noreferrer" 
          className="mb-2"
          >
            Kitsu@Email.com
          </a>
          
          <div className="flex items-center justify-center mt-2">
            <a href="https://www.instagram.com/kitsu__dining/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram 
              title="Instagram"
              aria-label="Instagram"
              className="text-4xl"/>
            </a>
          </div>


        </div>

      </div>
    </div>
  );
}



