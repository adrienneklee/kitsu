import React from 'react';

const images = [
  '/kitsu-bts.jpg',
  '/kitsu-caviar.jpg',
  '/kitsu-dish.jpg',
  '/kitsu-dish2.JPG',
  '/kitsu-plating.JPG',
  '/kitsu-sauce.JPG',
  '/kitsu-beef.JPG',
  '/kitsu-bts2.jpg',
  '/kitsu-cod.JPG',
  '/kitsu-dining.JPG',
  '/kitsu-scallop.JPG',
  '/kitsu-tweezers.JPG',
  '/kitsu-urchin.JPG',
];

export default function Gallery() {
  return (
    <div className="w-screen h-screen overflow-y-auto p-4 bg-black">
      <div className="gallery columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`img-${idx}`}
            className="w-full mb-4 rounded-lg break-inside-avoid shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}


