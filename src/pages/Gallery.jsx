import { useState, useEffect } from 'react';

const images = [
  { src: '/kitsu-bts.jpg', alt: 'Jon Kemeny and a sous chef delicately plate details on a fine dining dish' },
  { src: '/kitsu-caviar.jpg', alt: 'black caviar eggs up close' },
  { src: '/kitsu-dish.jpg', alt: 'a single seared scallop and caviar sit in a sauce on a white plate' },
  { src: '/kitsu-dish2.JPG', alt: 'two hands gently place white asparagus on an orange sauce' },
  { src: '/kitsu-plating.JPG', alt: 'two hands gently place a scorched sliced peach on a sauce' },
  { src: '/kitsu-sauce.JPG', alt: 'a white creamy sauce is dribbled on a blue plate' },
  { src: '/kitsu-beef.JPG', alt: 'a chef in a white apron slices a cut of beef' },
  { src: '/kitsu-bts2.jpg', alt: 'Jon Kemeny and a sous chef cook in a kitchen' },
  { src: '/kitsu-cod.JPG', alt: 'a delicate piece of fish sits in an orange sauce' },
  { src: '/kitsu-dining.JPG', alt: 'a modern set dining room table' },
  { src: '/kitsu-scallop.JPG', alt: 'tweezers place details on top of a dish of canapés' },
  { src: '/kitsu-tweezers.JPG', alt: 'two hands are seen holding tweezers placing details on a canapé' },
  { src: '/kitsu-urchin.JPG', alt: 'a delicious canapé is plated on a blue dish' },
];

export default function Gallery() {
  const [lightboxImg, setLightboxImg] = useState(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="gallery-scroll" className="w-screen h-screen overflow-y-auto p-4 bg-black">
      <div className="gallery columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            onClick={() => setLightboxImg(image)}
            className="w-full mb-4 rounded-lg break-inside-avoid shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            className="max-w-full max-h-full object-contain rounded"
            onClick={e => e.stopPropagation()} // prevent closing when clicking image
          />
        </div>
      )}
    </div>
  );
}
