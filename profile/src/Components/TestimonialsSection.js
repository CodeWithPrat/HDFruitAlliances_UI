import React, { useEffect, useState } from "react";
import { Star, Sparkles, LeafyGreen } from "lucide-react";

import amitsharma from "../Images/testimonials/amitsharma.jpeg"
import anitha from "../Images/testimonials/anitha.jpg"
import deepakreddy from "../Images/testimonials/deepakreddy.jpg"
import karthik from "../Images/testimonials/karthik.jpg"
import keerthi from "../Images/testimonials/keerthi.jpg"
import lakshmi from "../Images/testimonials/lakshmi.jpg"
import mohankumar from "../Images/testimonials/mohankumar.jpg"
import nehatiwari from "../Images/testimonials/nehatiwari.jpg"
import priyaverma from "../Images/testimonials/priyaverma.jpg"
import rajeshgupta from "../Images/testimonials/rajeshgupta.jpg"
import rameshbabu from "../Images/testimonials/rameshbabu.jpg"
import vikrammalhotra from "../Images/testimonials/vikrammalhotra.jpg"


const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Your existing testimonials array here
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Restaurant Owner",
      text: "The quality of mangoes is consistently excellent. Best supplier we've worked with!",
      stars: 5,
      image: amitsharma,
    },
    {
      name: "Priya Verma",
      role: "Regular Customer",
      text: "Their mangoes are simply the best! The delivery is always on time.",
      stars: 5,
      image: priyaverma,
    },
    {
      name: "Rajesh Gupta",
      role: "Fruit Retailer",
      text: "Great wholesale prices and professional service. Highly recommended!",
      stars: 4,
      image: rajeshgupta,
    },
    {
      name: "Neha Tiwari",
      role: "Supermarket Manager",
      text: "Fresh and high-quality fruits every time. Our customers love them!",
      stars: 5,
      image: nehatiwari,
    },
    {
      name: "Vikram Malhotra",
      role: "Juice Bar Owner",
      text: "Their fruits make the freshest juices. We love the consistent quality!",
      stars: 5,
      image: vikrammalhotra,
    },
    {
      name: "Ramesh Babu",
      role: "Health Coach",
      text: "I recommend their fruits to all my clients. Best quality and taste!",
      stars: 5,
      image: rameshbabu,
    },
    {
      name: "Anitha Rajan",
      role: "Online Fruit Seller",
      text: "Fast delivery and fresh fruits. A great partner for my business!",
      stars: 4,
      image: anitha,
    },
    {
      name: "Karthik Subramanian",
      role: "Homemaker",
      text: "My family loves the quality and freshness of their fruits. Never disappoints!",
      stars: 5,
      image: karthik,
    },
    {
      name: "Mohan Kumar",
      role: "Caterer",
      text: "Perfect fruits for events and catering. Great taste and reliable service!",
      stars: 5,
      image: mohankumar,
    },
    {
      name: "Lakshmi Narayanan",
      role: "Nutritionist",
      text: "High-quality fruits that I confidently recommend to my clients.",
      stars: 5,
      image: lakshmi,
    },
    {
      name: "Deepak Reddy",
      role: "Hotel Chef",
      text: "Their fruits add a fresh and delicious touch to our dishes. Fantastic supplier!",
      stars: 5,
      image: deepakreddy,
    },
    {
      name: "Keerthi Venkatesh",
      role: "Fitness Trainer",
      text: "I always trust their fruits for my diet plans. Great taste and quality!",
      stars: 5,
      image: keerthi,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isHovered && !isMobile) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isMobile, testimonials.length]);

  const renderStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 text-yellow1 fill-yellow1 animate-pulse"
        />
      ));
  };

  const DecorativeLeaf = ({ className }) => (
    <LeafyGreen className={`text-green3 opacity-50 ${className}`} />
  );

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-green6/10 to-white py-16 overflow-hidden mb-[-40px]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green4/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green3/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Decorative Corner Leaves */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <DecorativeLeaf className="w-24 h-24 rotate-45 animate-sway" />
      </div>
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <DecorativeLeaf className="w-24 h-24 -rotate-45 animate-sway-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-12 relative">
          <Sparkles className="absolute left-1/4 text-yellow1 w-6 h-6 animate-twinkle" />
          <h2 className="text-center font-tangerine text-6xl md:text-7xl text-green1 animate-fade-in relative">
            What Our Customers Say
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green3 to-transparent" />
          </h2>
          <Sparkles className="absolute right-1/4 text-yellow1 w-6 h-6 animate-twinkle-delayed" />
        </div>

        {/* Desktop View - Single Row */}
        <div className="hidden md:block overflow-hidden ">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative flex gap-6 mb-2">
              {/* First set of cards */}
              <div className="flex gap-6 animate-infinite-scroll">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="flex-none w-96 transform transition-all duration-500 hover:scale-105 hover:z-10"
                  >
                    <div className="relative bg-white/80  p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green4/20 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-green4/5 via-transparent to-green3/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green1 to-green4 rounded-full animate-spin-slow opacity-50" />
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="relative w-16 h-16 rounded-full border-2 border-green1 object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-tinos text-green1 text-xl font-bold">
                              {testimonial.name}
                            </h3>
                            <p className="font-garamond text-brown2 italic">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-3 space-x-1">
                          {renderStars(testimonial.stars)}
                        </div>
                        <p className="font-garamond text-gray-900 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 animate-infinite-scroll">
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={`duplicate-${idx}`}
                    className="flex-none w-96 transform transition-all duration-500 hover:scale-105 hover:z-10"
                  >
                    <div className="relative bg-white/80  p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green4/20 group">
                      <div className="absolute inset-0 bg-gradient-to-br from-green4/5 via-transparent to-green3/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-green1 to-green4 rounded-full animate-spin-slow opacity-50" />
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="relative w-16 h-16 rounded-full border-2 border-green1 object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-tinos text-green1 text-xl font-bold">
                              {testimonial.name}
                            </h3>
                            <p className="font-garamond text-brown2 italic">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <div className="flex mb-3 space-x-1">
                          {renderStars(testimonial.stars)}
                        </div>
                        <p className="font-garamond text-gray-900 leading-relaxed">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View - Enhanced Swipeable Cards */}
        <div className="md:hidden">
          <div className="relative h-[400px] w-full mt-[-20px]">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="absolute w-full transform transition-all duration-500 cursor-grab active:cursor-grabbing"
                style={{
                  transform: `translateX(${(idx - activeIndex) * 100}%) scale(${
                    idx === activeIndex ? 1 : 0.9
                  }) translateY(${idx === activeIndex ? "0px" : "20px"})`,
                  opacity: idx === activeIndex ? 1 : 0.5,
                  zIndex: testimonials.length - Math.abs(activeIndex - idx),
                }}
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const startX = touch.clientX;

                  const handleTouchMove = (e) => {
                    const touch = e.touches[0];
                    const diff = touch.clientX - startX;
                    if (Math.abs(diff) > 50) {
                      if (diff > 0 && activeIndex > 0) {
                        setActiveIndex((prev) => prev - 1);
                      } else if (
                        diff < 0 &&
                        activeIndex < testimonials.length - 1
                      ) {
                        setActiveIndex((prev) => prev + 1);
                      }
                      document.removeEventListener(
                        "touchmove",
                        handleTouchMove
                      );
                    }
                  };

                  document.addEventListener("touchmove", handleTouchMove);
                  document.addEventListener(
                    "touchend",
                    () => {
                      document.removeEventListener(
                        "touchmove",
                        handleTouchMove
                      );
                    },
                    { once: true }
                  );
                }}
              >
                <div className="bg-white/80 p-6 rounded-xl shadow-xl border border-green4/20 mx-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green1 to-green4 rounded-full animate-spin-slow opacity-50" />
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-20 h-20 rounded-full border-4 border-green-950 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-tinos text-green1 text-xl font-bold">
                        {testimonial.name}
                      </h3>
                      <p className="font-garamond text-brown2 italic">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-3 space-x-1">
                    {renderStars(testimonial.stars)}
                  </div>
                  <p className="font-garamond text-gray-900 leading-relaxed">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Mobile Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-[-140px] mb-[-30px]">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? "bg-green1 w-8" : "bg-green4/50"
                } hover:bg-green2`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes sway {
          0%,
          100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
          animation-play-state: running;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-sway {
          animation: sway 4s ease-in-out infinite;
        }

        .animate-sway-delayed {
          animation: sway 4s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle 2s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
