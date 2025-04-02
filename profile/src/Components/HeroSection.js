import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import banner1 from "../Images/MangoProject/HeroImgs/banner1.jpg"
import banner2 from "../Images/MangoProject/HeroImgs/banner2.jpg"
import banner3 from "../Images/MangoProject/HeroImgs/banner3.jpg"
import banner4 from "../Images/MangoProject/HeroImgs/banner4.jpg"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Finest Quality Mangoes",
      subtitle: "Fresh from Farm to Your Table",
      description: "Experience the juicy goodness of premium hand-picked mangoes",
      cta: "Order Now",
      accent: "from-white/50 to-transparent", // Soft white glow
      textGradient: "from-gray-800 to-gray-900", // Dark text for contrast
    },
    {
      id: 2,
      image: banner2,
      title: "Mango Paradise",
      subtitle: "Pure Tropical Delight",
      description: "Savor the taste of perfectly ripened mangoes",
      cta: "Shop Premium",
      accent: "from-gray-100 to-transparent", // Subtle white shade
      textGradient: "from-gray-800 to-gray-900",
    },
    {
      id: 3,
      image: banner3,
      title: "Fresh Mango Delivery",
      subtitle: "Quality Guaranteed",
      description: "Get farm-fresh mangoes delivered to your doorstep",
      cta: "Get Fresh",
      accent: "from-gray-200 to-transparent", // Light grayish-white
      textGradient: "from-gray-800 to-gray-900",
    },
    {
      id: 4,
      image: banner4,
      title: "Premium Selection",
      subtitle: "Handpicked Excellence",
      description: "Discover our exclusive range of premium mangoes",
      cta: "Explore Now",
      accent: "from-gray-300 to-transparent", // Softer white theme
      textGradient: "from-gray-800 to-gray-900",
    }
  ];


  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (isRightSwipe) setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    setTouchStart(null);
    setTouchEnd(null);
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden bg-neutral-100"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Gradient Overlays */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Content Container */}
          <div className="relative h-full container mx-auto px-6 flex items-center">
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Title with Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`font-bold text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r ${slides[currentSlide].textGradient} bg-clip-text text-transparent font-tangerine`}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle with Animation */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl font-medium text-neutral-700 font-tinos"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              {/* Description with Fade */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm md:text-base lg:text-lg text-neutral-600 max-w-md mx-auto md:mx-0 font-garamond"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Button with Hover Effects */}
              <a href="#contact">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    {slides[currentSlide].cta}
                  </span>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows with Hover Effects */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80  flex items-center justify-center text-neutral-700 hover:bg-white hover:text-neutral-900 transition-colors shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/80  flex items-center justify-center text-neutral-700 hover:bg-white hover:text-neutral-900 transition-colors shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50'
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;