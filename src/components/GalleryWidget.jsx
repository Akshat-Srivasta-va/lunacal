import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryWidget = () => {
  const [images, setImages] = useState([
     'https://plus.unsplash.com/premium_photo-1760631324997-394b4fef96c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
     'https://images.unsplash.com/photo-1761383052886-b7226d14e698?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
     'https://plus.unsplash.com/premium_photo-1759256104503-80fe92559651?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
     'https://images.unsplash.com/photo-1761391963902-f3cc4850ecf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev < Math.max(0, images.length - 3) ? prev + 1 : prev
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-xl font-semibold px-6 py-2 bg-gray-900 rounded-2xl">
          Gallery
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImage}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-medium transition-all duration-200 shadow-lg"
          >
            + ADD IMAGE
          </button>
          <div className="flex gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                currentIndex === 0
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white shadow-lg'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 3}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                currentIndex >= images.length - 3
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 hover:bg-gray-600 text-white shadow-lg'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((img, idx) => (
          <div
            key={currentIndex + idx}
            className="aspect-square rounded-2xl overflow-hidden bg-gray-700 hover:scale-120 hover:-rotate-3 transition-transform duration-200 shadow-lg"
          >
            <img
              src={img}
              alt={`Gallery image ${currentIndex + idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;

