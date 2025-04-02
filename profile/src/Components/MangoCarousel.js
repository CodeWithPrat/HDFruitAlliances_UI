import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import alphonso from "../Images/mangosjpg/alphonso.jpg"
import banganapalli from "../Images/mangosjpg/banganapalli.jpg"
import sindhura from "../Images/mangosjpg/Sindhura.jpg"
import Daseri from "../Images/mangosjpg/Daseri.jpg"
import imampassand from "../Images/mangosjpg/imampasand.jpg"
import kalapad from "../Images/mangosjpg/Kalapad.jpg"
import kesar from "../Images/mangosjpg/kesar.jpg"
import mallika from "../Images/mangosjpg/Mallika.jpg"
import malgova from "../Images/mangosjpg/Malgova.jpg"
import raspuri from "../Images/mangosjpg/Raspuri.jpg"
import sugarbeans from "../Images/mangosjpg/Sugar.jpg"

// Sample data for mango varieties
const mangoes = [
  {
    id: 1,
    name: "Alphonso Mango",
    price5kg: 1200,
    price10kg: 2300,
    image: alphonso
  },
  {
    id: 2,
    name: "Banganapalli Mango",
    price5kg: 900,
    price10kg: 1700,
    image: banganapalli
  },
  {
    id: 3,
    name: "Sindhura Mango",
    price5kg: 850,
    price10kg: 1600,
    image: sindhura
  },
  {
    id: 4,
    name: "Mallika Mango",
    price5kg: 950,
    price10kg: 1800,
    image: mallika
  },
  {
    id: 5,
    name: "Sugar Beans Mango",
    price5kg: 1100,
    price10kg: 2100,
    image: sugarbeans
  },
  {
    id: 6,
    name: "Malgova Mango",
    price5kg: 1000,
    price10kg: 1900,
    image: malgova
  },
  {
    id: 7,
    name: "Raspuri Mango",
    price5kg: 800,
    price10kg: 1500,
    image: raspuri
  },
  {
    id: 8,
    name: "Kesar Mango",
    price5kg: 1300,
    price10kg: 2500,
    image: kesar
  },
  {
    id: 9,
    name: "Imampasand Mango",
    price5kg: 1050,
    price10kg: 2000,
    image: imampassand
  },
  {
    id: 10,
    name: "Kalapad Mango",
    price5kg: 920,
    price10kg: 1750,
    image: kalapad
  },
  {
    id: 11,
    name: "Daseri Mango",
    price5kg: 880,
    price10kg: 1680,
    image: Daseri
  }
];

const MangoCarousel = () => {
  // Define these outside the component or memoize them if you need them inside
  const itemsToShow = {
    sm: 1,
    md: 2,
    lg: 5,
    xl: 5
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [visibleItems, setVisibleItems] = useState(itemsToShow.lg);
  
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const touchStartRef = useRef(0);
  
  // Update visible items on window resize - fixed dependency array
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleItems(itemsToShow.sm);
      else if (width < 768) setVisibleItems(itemsToShow.md);
      else if (width < 1024) setVisibleItems(itemsToShow.lg);
      else setVisibleItems(itemsToShow.xl);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemsToShow.sm, itemsToShow.md, itemsToShow.lg, itemsToShow.xl]);

  // Start autoplay
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (mangoes.length - visibleItems + 1));
    }, 5000);

    autoPlayRef.current = autoplayInterval;

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [visibleItems]);

  const nextSlide = () => {
    if (currentIndex < mangoes.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop back to the beginning with animation
      setTransitionEnabled(false);
      setCurrentIndex(0);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end with animation
      setTransitionEnabled(false);
      setCurrentIndex(mangoes.length - visibleItems);
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const resetAutoplay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % (mangoes.length - visibleItems + 1));
    }, 5000);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    touchStartRef.current = e.touches[0].clientX;
    
    // Pause autoplay during touch
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartRef.current - currentX;
    
    // Threshold for swiping
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    resetAutoplay();
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    
    // Pause autoplay during drag
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    
    // Threshold for dragging
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    resetAutoplay();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      resetAutoplay();
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-yellow-100 via-green-100 to-yellow-100 py-5 overflow-hidden font-garamond">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-orange-800">
          Explore Our Premium Mangoes
        </h2>
        <p className="text-center text-lg mb-4 text-orange-700 max-w-3xl mx-auto">
          Freshly sourced from the finest orchards, our mangoes are known for their exceptional taste, aroma, and quality.
        </p>
        
        {/* Carousel Container */}
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={carouselRef}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-[-30px] z-10 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-orange-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-[-30px] z-10 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-orange-800" />
          </button>
          
          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div 
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {mangoes.map((mango) => (
                <div 
                  key={mango.id} 
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 rounded-br-lg font-medium z-10">
                        Premium
                      </div>
                      <img 
                        src={mango.image} 
                        alt={mango.name} 
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-green-800 mb-2">{mango.name}</h3>
                      <div className="flex-grow">
                        <div className="mb-3">
                          <p className="text-black text-sm">5 Kg Pack</p>
                          <p className="text-xl font-bold text-orange-700">₹{mango.price5kg}</p>
                        </div>
                        <div className="mb-4">
                          <p className="text-black text-sm">10 Kg Pack</p>
                          <p className="text-xl font-bold text-orange-700">₹{mango.price10kg}</p>
                        </div>
                      </div>
                      <button className="bg-yellow-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-lg w-full flex items-center justify-center gap-2 transition-colors duration-300">
                        <ShoppingCart size={18} />
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: mangoes.length - visibleItems + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full mx-1 transition-all duration-300 ${
                  currentIndex === index ? 'bg-orange-600 w-6' : 'bg-orange-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangoCarousel;