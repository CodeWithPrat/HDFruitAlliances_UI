import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Phone,
  MessageCircle,
  ChevronUp,
  Menu,
  X,
  MapPin,
  Mail,
  ChevronRight,
  Leaf,
  Citrus,
  Heart,
  Package,
  Truck,
  Star,
  Clock,
  Sprout,
  ShieldCheck,
  Check,
  Sparkles, Facebook, Instagram, Linkedin, Twitter, Youtube
} from "lucide-react";

import HeroSection from "./Components/HeroSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import EnhancedDealsSection from "./Components/EnhancedDealsSection";
import LocationSection from "./Components/LocationSection";
import MessageCards from "./Components/MessageCards";
import MangoCategories from "./Components/MangoCategories";
import ContactForm from "./Components/ContactForm";
import MangoCarousel from "./Components/MangoCarousel";
import OurClients from "./Components/clientLogos";

import HDFAlogo from "./Images/MangoProject/hfa.png";
import hfa_footer from "./Images/MangoProject/hfa_footer.jpg";
import fmm_footer from "./Images/MangoProject/fmm_footer.jpg";
import modal from "./Images/MangoProject/model.png"

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState(null);

  const reasons = [
    {
      title: "Premium Quality Assurance",
      description:
        "Every Mango meets our rigorous quality standards, ensuring freshness, taste, and nutritional value in every bite.",
      icon: Check,
    },
    {
      title: "Direct from Farm",
      description:
        "Fresh produce straight from trusted farmers, minimizing handling time and preserving natural goodness.",
      icon: Sparkles,
    },
    {
      title: "Competitive Pricing",
      description:
        "Best value without compromising quality, offering farm-fresh Mangoes at affordable rates for everyone.",
      icon: Check,
    },
    {
      title: "Expert Support",
      description:
        "Professional guidance at every step, from selection to delivery, ensuring a seamless and hassle-free experience.",
      icon: Sparkles,
    },
  ];


  const footer_navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" }
  ];

  const springConfig = {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  };

  const textY = useSpring(
    useTransform(scrollY, [0, 300], [100, 0]),
    springConfig
  );

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isRightSwipe && !isNavOpen) {
      setIsNavOpen(true);
    } else if (isLeftSwipe && isNavOpen) {
      setIsNavOpen(false);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Navigation links
  const navLinks = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
  };

  const decorativeIcons = [
    { Icon: Leaf, color: "text-green-500", delay: 0.2 },
    { Icon: Citrus, color: "text-amber-500", delay: 0.3 },
    { Icon: Heart, color: "text-red-400", delay: 0.4 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    {
      number: "60+",
      label: "Years Experience",
      icon: "🌱",
      color: "darkGreen2",
    },
    {
      number: "1,00,000+",
      label: "Happy Customers",
      icon: "🌿",
      color: "green3",
    },
    {
      number: "50+",
      label: "Varieties",
      icon: "🍃",
      color: "green4",
    },
    {
      number: "April - July",
      label: "Support",
      icon: "🌳",
      color: "green5",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const services = [
    {
      title: "Premium Mangoes",
      description:
        "Hand-picked, perfectly ripened mangoes for the finest taste experience",
      icon: Citrus,
      color: "green3",
    },
    {
      title: "Wholesale Supply",
      description:
        "Bulk orders for businesses with competitive pricing and consistent quality",
      icon: Package,
      color: "green3",
    },
    {
      title: "Express Delivery",
      description:
        "Fast and reliable delivery to your doorstep within promised timeframes",
      icon: Truck,
      color: "green3",
    },
    {
      title: "Quality Guarantee",
      description:
        "100% satisfaction guaranteed with our premium selection process",
      icon: Star,
      color: "green3",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock customer service for all your queries and needs",
      icon: Clock,
      color: "green3",
    },
    {
      title: "Safe Packaging",
      description:
        "Secure and eco-friendly packaging to maintain freshness and quality",
      icon: ShieldCheck,
      color: "green3",
    },
    {
      title: "Sustainable Farming",
      description:
        "Environmentally conscious farming practices for better tomorrow",
      icon: Sprout,
      color: "green3",
    },
    {
      title: "Custom Orders",
      description: "Tailored solutions for your specific mango requirements",
      icon: Phone,
      color: "green3",
    },
  ];

  const containerVariants_services = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants_services = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const welcome_fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-green6/10 to-yellow1/10"
      // onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <img src={fmm_footer} alt="fresh mango matrix" className="h-16" />
            </motion.div>

            {/* Desktop Navigation + Second Logo (Right Side) */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="font-tinos text-darkGreen2 hover:text-green3 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.title}
                </motion.a>
              ))}

              <motion.a
                href="tel:+918151881796"
                className="flex items-center px-4 py-2 bg-green3 text-white rounded-full hover:bg-green4 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} className="mr-2" /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/+918151881796"
                className="flex items-center px-4 py-2 bg-green4 text-darkGreen2 rounded-full hover:bg-green5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} className="mr-2" /> WhatsApp
              </motion.a>

              {/* Second Logo (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img src={HDFAlogo} alt="HD Fruit Alliances Logo" className="h-12" />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsNavOpen(!isNavOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </nav>


      {/* Mobile Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNavOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[55%] bg-white z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex flex-col p-6 space-y-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.title}
                    href={link.href}
                    className="font-tinos text-lg text-darkGreen2 hover:text-green3 transition-colors"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.title}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center px-4 py-2 bg-green3 text-white rounded-full hover:bg-green4 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone size={18} className="mr-2" /> Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/1234567890"
                  className="flex items-center px-4 py-2 bg-green4 text-darkGreen2 rounded-full hover:bg-green5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <MessageCircle size={18} className="mr-2" /> WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="w-full overflow-hidden">
            <HeroSection />
          </div>

          {/* Optional Decorative Element */}
          <div className="absolute bottom-[-30px] md:bottom-[-45px] left-0 w-full overflow-hidden leading-0 transform">
            <svg
              className="relative w-full h-8 md:h-12"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="multiColorGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#132a13" />
                  <stop offset="20%" stopColor="#004b23" />
                  <stop offset="40%" stopColor="#9ef01a" />
                  <stop offset="60%" stopColor="#ffea00" />
                  <stop offset="80%" stopColor="#9ef01a" />
                  <stop offset="100%" stopColor="#132a13" />
                </linearGradient>
              </defs>
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="url(#multiColorGradient)"
              />
            </svg>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="relative py-14 bg-gradient-to-b from-white to-neutral-50 overflow-hidden mt-6" id="about">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </div>

          <motion.div
            className="container mx-auto px-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative Icons Section */}
            <div className="flex justify-center gap-8 mb-8">
              {decorativeIcons.map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay, type: "spring", stiffness: 200 }}
                  className={`${color} transition-colors duration-300 hover:scale-110`}
                >
                  <Icon size={32} />
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="w-full md:w-[1700px] ">
              {/* Full width container */}
              <div className="max-w-[2500px] mx-auto px-4 md:px-4">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Text Content */}
                  <div className="order-2 lg:order-1 max-w-4xl mx-auto lg:max-w-none">
                    <motion.div
                      className="text-left mb-8"
                      {...welcome_fadeInUp}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.h2
                        className="font-garamond text-4xl md:text-4xl lg:text-6xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent mb-4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Welcome to Fresh Mango Matrix - A Unit of HD Fruit Alliances
                      </motion.h2>

                      <motion.div
                        className="h-1 w-32 bg-gradient-to-r from-amber-400 to-green-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 128 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </motion.div>

                    {/* Content Cards */}
                    <div className="space-y-6">
                      <motion.div
                        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        {...welcome_fadeInUp}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="font-garamond text-2xl text-green-700 mb-4">Our Legacy</h3>
                        <p className="text-neutral-600 font-tinos">
                          Founded by Late Mr. Beerappanahalli Narasimha Gowda carried by Mr.Beerappanahalli Dyavappa and now led by Mr. Hari Krishna D,
                          we carry forward a four-generation legacy of excellence in fruit distribution.
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        {...welcome_fadeInUp}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="font-garamond text-2xl text-green-700 mb-4">Our Mission</h3>
                        <p className="text-neutral-600 font-tinos">
                          At Fresh Mango Matrix - A Unit of HD Fruit Alliances, our mission is simple yet powerful: to delight customers with the most pristine,
                          highest-quality Mangoes. From orchard to doorstep, we’re dedicated to supplying you with the finest selection
                          of Mangoes, ensuring every bite is a burst of flavor and nutrition. Experience the difference with Fresh Mango Matrix
                          – where quality meets satisfaction, one juicy bite at a time. Along with this our aim to transform
                          corporate wellness with our diverse range of fresh Mangoes, delivered nationwide for a healthier, happier
                          workplace. Experience the vibrant taste of health in every office, every day!
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        {...welcome_fadeInUp}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="font-garamond text-2xl text-green-700 mb-4">Our vision</h3>
                        <p className="text-neutral-600 font-tinos">
                          Fresh Mango Matrix envisions a future where our premium Mangoes are enjoyed in every
                          corner of India. From Pan India to nationwide, our goal is to spread the joy of freshness
                          and quality to every household, ensuring that everyone has access to the finest Mangoes for
                          a healthier, happier lifestyle.
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Column - Brand Ambassador Image */}
                  <motion.div
                    className="order-1 lg:order-2 flex justify-center lg:justify-end mt-[-100px] sm:mt-[-20px] md:mt-[-20px]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative w-full max-w-5xl">
                      <div className="aspect-[2/3] max-h-[800px] overflow-hidden rounded-2xl">
                        <img
                          src={modal}
                          alt="Brand Ambassador"
                          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50 z-0" />
                      <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-100 rounded-full opacity-50 z-0" />
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

            {/* Bottom Description */}
            <motion.p
              className="font-garamond text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed text-neutral-700 mt-12"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              With a strong Pan India presence, we uphold excellence, reliability, and customer satisfaction.
              Our vision is to bring freshness and quality to every Indian household.
            </motion.p>

            {/* Decorative Bottom Element */}
            <motion.div
              className="mt-8 flex justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-amber-500"
                />
              ))}
            </motion.div>
          </motion.div>

          <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>

        <section id="mango-categories">
          <MangoCarousel />
        </section>

        {/* Stats Section */}
        <section className="relative py-8 overflow-hidden">
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green6/10 to-green4/5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Floating background circles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-green3/5"
                style={{
                  width: Math.random() * 150 + 50,
                  height: Math.random() * 150 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  <motion.div
                    className={`p-4 rounded-xl bg-white/80  shadow-md 
                  border border-${stat.color}/20 hover:border-${stat.color}/40 
                  transition-all duration-300`}
                  >
                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green3/30 rounded-tl-lg" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green3/30 rounded-br-lg" />

                    <motion.div
                      className="text-center relative z-10"
                      animate={hoveredIndex === index ? pulseAnimation : {}}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl mb-2"
                      >
                        {stat.icon}
                      </motion.div>

                      <motion.h3
                        className="font-garamond text-2xl md:text-3xl text-darkGreen2 mb-1
                      bg-gradient-to-r from-darkGreen2 to-green3 bg-clip-text text-transparent"
                      >
                        {stat.number}
                      </motion.h3>

                      <motion.p
                        className="font-tinos text-sm md:text-base text-darkGreen3
                      relative after:content-[''] after:block after:w-8 after:h-0.5
                      after:bg-green4 after:mx-auto after:mt-1"
                      >
                        {stat.label}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="relative py-8 overflow-hidden bg-white"
          id="services"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-green4/5"
                style={{
                  width: Math.random() * 150 + 50,
                  height: Math.random() * 150 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5 + Math.random() * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-2 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="font-tangerine text-4xl md:text-6xl text-darkGreen2 mb-2">
                Our Services
              </h2>
              <motion.div
                className="w-24 h-0.5 bg-green4 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>

            <motion.div
              variants={containerVariants_services}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants_services}
                  whileHover={{ scale: 1.02, y: -3 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  <motion.div
                    className={`p-5 rounded-lg bg-white shadow-md border border-${service.color}/20 
                  hover:border-${service.color}/40 transition-all duration-300
                  hover:shadow-lg relative overflow-hidden`}
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 left-0 w-14 h-14">
                      <div
                        className={`absolute transform rotate-45 bg-${service.color}/10 
                    w-12 h-12 -top-6 -left-6 group-hover:scale-150 transition-transform duration-300`}
                      />
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-${service.color}/10 
                      flex items-center justify-center mb-2 group-hover:scale-110 
                      transition-transform duration-300`}
                        animate={
                          hoveredIndex === index
                            ? {
                              rotate: [0, 5, -5, 0],
                              transition: { duration: 0.5 },
                            }
                            : {}
                        }
                      >
                        <service.icon
                          className={`w-8 h-8 text-${service.color}`}
                        />
                      </motion.div>

                      <h3 className="font-garamond text-xl md:text-2xl text-darkGreen2 mb-1">
                        {service.title}
                      </h3>

                      <p className="font-tinos text-sm md:text-lg text-darkGreen3 leading-snug">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover effect outline */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`absolute inset-0 border border-${service.color}/30 
                    rounded-lg scale-105 opacity-0 group-hover:opacity-100 
                    transition-all duration-300`}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-14 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-green6/20 via-yellow1/10 to-green4/20" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-green3/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow1/10 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <motion.h2
                style={{ y: textY }}
                className="font-tangerine text-5xl md:text-7xl text-darkGreen2 mb-4"
              >
                Why Fresh Mango Matrix?
              </motion.h2>
              <div className="w-24 h-1 bg-green3 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-[-40px]">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  onHoverStart={() => setIsHovered(index)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="relative p-6 rounded-xl bg-white/80  border border-green3/20 shadow-lg transform transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      {...(isHovered === index ? floatingAnimation : {})}
                      className="flex-shrink-0"
                    >
                      <reason.icon className="w-8 h-8 text-green3" />
                    </motion.div>
                    <div className="flex-grow">
                      <h3 className="font-tinos text-xl text-darkGreen2 mb-2">
                        {reason.title}
                      </h3>
                      <p className="font-garamond text-lg text-darkGreen1/80">
                        {reason.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-6 h-6 text-green3 transform transition-transform duration-300 ${isHovered === index ? "translate-x-2" : ""
                        }`}
                    />
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-green3/30 rounded-br-xl" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="message">
          <MessageCards />
        </section>

        <section id="clients">
          <OurClients />
        </section>

        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Call for Great Deals Section */}
        <section id="contact">
          <EnhancedDealsSection />
        </section>



        <section>
          <LocationSection />
        </section>

        {/* Contact Form Section */}
        {/* <section>
          <ContactForm />
        </section> */}


      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-br from-emerald-800 to-emerald-950 text-white pt-10">
        <div className="w-full max-w-8xl mx-auto px-6 lg:px-8 pb-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 p-6">
            {/* Company Info */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-between gap-4">
                <img
                  src={fmm_footer}
                  alt="Fresh Nature Mangoes Logo"
                  className="h-20 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-light text-sm text-emerald-100/90 text-center italic border-t border-emerald-400/20 pt-4">
                Delivering fresh, high-quality mangoes to your doorstep with utmost care and excellence
              </p>
            </div>

            {/* Quick Links */}
            <div className="px-4">
              <h3 className="text-2xl font-light mb-8 relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-400"></span>
              </h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="group flex items-center text-emerald-100/90 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="px-4">
              <h3 className="text-2xl font-light mb-8 relative">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-400"></span>
              </h3>
              <ul className="space-y-6">
                <li>
                  <a
                    href="https://www.google.com/maps/dir//Fresh+Mango+Matrix-A+Unit+of+HD+Electronics/@13.0997,77.5764,962m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3bae18cf3fd3c2e7:0x774f6e37fb94b595!2m2!1d77.5764!2d13.0997?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-emerald-100/90 hover:text-white transition-colors duration-300"
                  >
                    <MapPin className="flex-shrink-0 mt-1 group-hover:text-emerald-400 transition-colors duration-300" size={20} />
                    <span className="text-sm leading-relaxed">
                      #31, A Sector, Near Inox Garuda Mall, Canara Bank Complex,
                      Yelahanka New Town, Bengaluru-560064
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/place/Purva+Venezia/@13.096507,77.5678388,962m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae187c87ed88ef:0x78eeb2ba7a5ee8db!8m2!3d13.096507!4d77.5704191!16s%2Fg%2F11btmcjh52!5m1!1e2?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 text-emerald-100/90 hover:text-white transition-colors duration-300"
                  >
                    <MapPin className="flex-shrink-0 mt-1 group-hover:text-emerald-400 transition-colors duration-300" size={20} />
                    <span className="text-sm leading-relaxed">
                      No 103 , Major Unnikrishnan Road Opposite To Purva Venezia Appartment Attur Layout Yelahanka Bengaluru - 560064
                    </span>
                  </a>
                </li>
                <li>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    <a href="tel:+918151881796" className="flex items-center gap-2 text-emerald-100/90 hover:text-white transition-colors duration-300">
                      <Phone className="flex-shrink-0 group-hover:text-emerald-400 transition-colors duration-300" size={16} />
                      <span className="text-sm">+91 8151881796</span>
                    </a>
                    <a href="tel:+919364897935" className="flex items-center gap-2 text-emerald-100/90 hover:text-white transition-colors duration-300">
                      <Phone className="flex-shrink-0 group-hover:text-emerald-400 transition-colors duration-300" size={16} />
                      <span className="text-sm">+91 9364897935</span>
                    </a>
                    <a href="tel:+919364897936" className="flex items-center gap-2 text-emerald-100/90 hover:text-white transition-colors duration-300">
                      <Phone className="flex-shrink-0 group-hover:text-emerald-400 transition-colors duration-300" size={16} />
                      <span className="text-sm">+91 9364897936</span>
                    </a>
                    <a href="tel:+919364897934" className="flex items-center gap-2 text-emerald-100/90 hover:text-white transition-colors duration-300">
                      <Phone className="flex-shrink-0 group-hover:text-emerald-400 transition-colors duration-300" size={16} />
                      <span className="text-sm">+91 9364897934</span>
                    </a>
                  </div>
                </li>

                <li>
                  <a
                    href="mailto:freshmangomatrix@gmail.com"
                    className="group flex items-center gap-3 text-emerald-100/90 hover:text-white transition-colors duration-300"
                  >
                    <Mail className="group-hover:text-emerald-400 transition-colors duration-300" size={20} />
                    <span className="text-sm">freshmangomatrix@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours & Social Media */}
            <div className="px-4">
              <h3 className="text-2xl font-light mb-8 relative">
                Business Hours
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-400"></span>
              </h3>
              <ul className="space-y-4 text-sm text-emerald-100/90">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>8:00 AM - 10:00 PM</span>
                </li>
              </ul>

              {/* Social Media Icons */}
              <h3 className="text-2xl font-light mt-8 mb-6 relative">
                Connect With Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-emerald-400"></span>
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/FreshMangoMatrix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/50 hover:bg-emerald-600 rounded-full p-2.5 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/freshmangomatrix/?next=%2F&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/50 hover:bg-emerald-600 rounded-full p-2.5 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://twitter.com/matrix_mango1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/50 hover:bg-emerald-600 rounded-full p-2.5 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@FreshMangoMatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/50 hover:bg-emerald-600 rounded-full p-2.5 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/fresh-mango-matrix-undefined-9065a4355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700/50 hover:bg-emerald-600 rounded-full p-2.5 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-400/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100/70">
              <p>
                © {new Date().getFullYear()} HD Fruit Alliances. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-40">
        <motion.a
          href="tel:+918151881796"
          className="w-12 h-12 flex items-center justify-center bg-green3 text-white rounded-full shadow-lg hover:bg-green4 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={24} />
        </motion.a>
        <motion.a
          href="https://wa.me/+918151881796"
          className="w-12 h-12 flex items-center justify-center bg-green4 text-darkGreen2 rounded-full shadow-lg hover:bg-green5 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle size={24} />
        </motion.a>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 flex items-center justify-center bg-darkGreen2 text-white rounded-full shadow-lg hover:bg-darkGreen3 transition-colors"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default App;
