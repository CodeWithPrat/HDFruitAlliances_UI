// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import Banganapalli from "../Images/mangosjpg/Banganapalli.jpg";
// import Totapuri from "../Images/mangosjpg/Totapuri.jpg";
// import Badami from "../Images/mangosjpg/Badami.jpg";
// import Dashehari from "../Images/mangosjpg/Dashehari.jpg";
// import Alphonso from "../Images/mangosjpg/Alphonso.jpg";
// import Pairi from "../Images/mangosjpg/Pairi.jpg";
// import Himsagar from "../Images/mangosjpg/Himsagar.jpg";
// import Langra from "../Images/mangosjpg/Langra.jpg";
// import BombayGreen from "../Images/mangosjpg/BombayGreen.jpg";

// const MangoCategories = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();
//   const [touchStart, setTouchStart] = useState(null);
//   const [touchEnd, setTouchEnd] = useState(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [cardsToShow, setCardsToShow] = useState(6);

//   const categories = [
//     {
//       title: "Banganapalli",
//       description:
//         "Sweet and juicy variety from South India, known for its delicate aroma and golden yellow color.",
//       region: "South India",
//       season: "May-June",
//       image: Banganapalli,
//     },
//     {
//       title: "Totapuri",
//       description:
//         "Long, green mango with a distinctive taste, perfect for both raw consumption and cooking.",
//       region: "Karnataka",
//       season: "June-July",
//       image: Totapuri,
//     },
//     {
//       title: "Alphonso",
//       description:
//         "King of mangoes, celebrated worldwide for its rich, creamy pulp and intense flavor.",
//       region: "Maharashtra",
//       season: "April-May",
//       image: Alphonso,
//     },
//     {
//       title: "Dashehari",
//       description:
//         "Popular North Indian variety with fiber-free pulp and a distinct aromatic sweetness.",
//       region: "Uttar Pradesh",
//       season: "June-July",
//       image: Dashehari,
//     },
//     {
//       title: "Langra",
//       description:
//         "Late-season variety with unique taste, known for its intense flavor and smooth texture.",
//       region: "Bihar",
//       season: "July-August",
//       image: Langra,
//     },
//     {
//       title: "Badami",
//       description:
//         "Known as the Alphonso of Karnataka, this variety has a rich flavor and smooth texture.",
//       region: "Karnataka",
//       season: "May-June",
//       image: Badami,
//     },
//     {
//       title: "Pairi",
//       description:
//         "A traditional variety from Maharashtra, known for its strong aroma and fibrous texture.",
//       region: "Maharashtra",
//       season: "April-May",
//       image: Pairi,
//     },
//     {
//       title: "Himsagar",
//       description:
//         "A West Bengal specialty, fiberless and extremely sweet, popular for its unique taste.",
//       region: "West Bengal",
//       season: "May-June",
//       image: Himsagar,
//     },
//     {
//       title: "Bombay Green",
//       description:
//         "A highly aromatic variety from North India, commonly used for making pickles and juices.",
//       region: "North India",
//       season: "June-July",
//       image: BombayGreen,
//     },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width >= 1536) setCardsToShow(6);
//       else if (width >= 1280) setCardsToShow(5);
//       else if (width >= 1024) setCardsToShow(4);
//       else if (width >= 768) setCardsToShow(3);
//       else if (width >= 640) setCardsToShow(2);
//       else setCardsToShow(1);

//       if (carousel.current) {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     let timer;
//     if (isAutoPlaying && !isHovered) {
//       timer = setInterval(() => {
//         nextSlide();
//       }, 4000);
//     }
//     return () => clearInterval(timer);
//   }, [currentIndex, isHovered, isAutoPlaying]);

//   const handleTouchStart = (e) => {
//     setTouchStart(e.touches[0].clientX);
//     setIsAutoPlaying(false);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;

//     const distance = touchStart - touchEnd;
//     const minSwipeDistance = 50;

//     if (Math.abs(distance) >= minSwipeDistance) {
//       if (distance > 0) {
//         nextSlide();
//       } else {
//         prevSlide();
//       }
//     }

//     setTouchStart(null);
//     setTouchEnd(null);
//     setIsAutoPlaying(true);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev + cardsToShow >= categories.length ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? categories.length - cardsToShow : prev - 1
//     );
//   };

//   return (
//     <div className="w-full max-w-8xl mx-auto p-8 relative bg-gradient-to-b from-white to-neutral-50 rounded-3xl ">
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-12"
//       >
//         <h2 className="text-6xl font-tangerine font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-6">
//           Discover Mango Varieties
//         </h2>
//         <p className="text-gray-600 text-lg mb-6 font-tinos max-w-2xl mx-auto">
//           Explore India's finest mango varieties, each with its unique flavor profile and cultural significance.
//         </p>
//         <div className="h-2 w-48 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-300 mx-auto rounded-full shadow-lg"></div>
//       </motion.div>

//       <div
//         className="relative overflow-hidden px-4"
//         ref={carousel}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <motion.div
//           className="flex gap-6"
//           animate={{
//             x: `-${currentIndex * (100 / cardsToShow)}%`,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 200,
//             damping: 25,
//           }}
//         >
//           {categories.map((category, index) => (
//             <motion.div
//               key={index}
//               className={`relative flex-shrink-0 w-[calc(${100 / cardsToShow}%-${((cardsToShow - 1) * 1.5) / cardsToShow
//                 }rem)]`}
//               whileHover={{ scale: 1.05 }}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="relative group h-64 w-64 rounded-full overflow-hidden shadow-2xl border-4 border-green-950">
//                 {/* Background Gradient */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full"></div>

//                 <div className="relative group">
//                   {/* Mango Image with Gray Overlay */}
//                   <img
//                     src={category.image}
//                     alt={category.title}
//                     className="w-full h-full object-cover rounded-full transform transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Gray Overlay */}
//                   <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full transition-opacity duration-300 group-hover:bg-opacity-30"></div>

//                   {/* Title */}
//                   <div className="absolute inset-0 flex items-center justify-center z-10">
//                     <h3 className="text-white text-7xl font-tangerine font-extrabold text-center px-4 transition-opacity duration-300 group-hover:opacity-0">
//                       {category.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Hover Content */}
//                 <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-6 rounded-full">
//                   <h3 className="text-white text-xl font-bold mb-2">{category.title}</h3>
//                   <div className="flex gap-2 mb-3">
//                     <span className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-white text-xs">
//                       {category.region}
//                     </span>
//                     <span className="px-3 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full text-white text-xs">
//                       {category.season}
//                     </span>
//                   </div>
//                   <p className="text-white/90 text-sm text-center leading-relaxed">
//                     {category.description}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/95 p-4 rounded-full shadow-xl hover:bg-yellow-50 transition-all z-30 transform hover:scale-110 hover:shadow-2xl group"
//         >
//           <ChevronLeft className="w-4  h-4  text-yellow-600 group-hover:text-orange-500 transition-colors" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/95 p-4 rounded-full shadow-xl hover:bg-yellow-50 transition-all z-30 transform hover:scale-110 hover:shadow-2xl group"
//         >
//           <ChevronRight className="w-6 h-4  text-yellow-600 group-hover:text-orange-500 transition-colors" />
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center items-center gap-3 mt-8">
//         {Array.from({ length: Math.ceil(categories.length / cardsToShow) }).map((_, index) => (
//           <motion.button
//             key={index}
//             initial={{ scale: 0.8 }}
//             animate={{
//               scale: Math.floor(currentIndex / cardsToShow) === index ? 1.2 : 1,
//               backgroundColor: Math.floor(currentIndex / cardsToShow) === index ? "#F59E0B" : "#FDE68A",
//             }}
//             whileHover={{ scale: 1.3 }}
//             className="w-5 h-2 rounded-full shadow-md transition-all duration-300"
//             onClick={() => setCurrentIndex(index * cardsToShow)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MangoCategories;