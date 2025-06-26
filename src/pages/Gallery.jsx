import { useState, useEffect } from 'react';
import images from '../assets/galleryImages';

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
