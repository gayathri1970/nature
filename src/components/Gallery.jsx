import React from "react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Mystical Forest",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Majestic Mountains",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Serene Beach",
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Crystal River",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Golden Sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
      title: "Ancient Trees",
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2>Nature Gallery</h2>
        <p className="section-subtitle">Immerse yourself in the breathtaking beauty of our natural world</p>
        <div className="image-gallery">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <h3>{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
