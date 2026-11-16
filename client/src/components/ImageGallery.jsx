// components/ImageGallery.jsx
import React, { useState } from "react";

const PLACEHOLDER = "https://placehold.co/600x400?text=No+Image+Available";

const ImageGallery = ({ imageUrl, businessName }) => {
  const [imgError, setImgError] = useState(false);
  const src = imageUrl && !imgError ? imageUrl : PLACEHOLDER;

  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-gray-100">
      <img
        src={src}
        alt={businessName ? `Image of ${businessName}` : "Business image"}
        className="w-full h-64 object-cover"
        onError={() => setImgError(true)}
      />
    </div>
  );
};

export default ImageGallery;
