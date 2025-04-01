import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Phone, MessageCircle, Sparkles, Gift, Clock, Star } from 'lucide-react';

const FloatingIcon = ({ children, delay }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className="absolute"
  >
    {children}
  </motion.div>
);

const EnhancedDealsSection = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to right, #ffffff, #b5e48c)",
        "linear-gradient(to right, #ffffff, #d9ff70)",
        "linear-gradient(to right, #f9f9f9, #fdfd96, #caffbf)"
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="relative py-14 overflow-hidden"
      animate={controls}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow1 rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-green1"
        >
          {/* Decorative Elements */}
          <FloatingIcon delay={0}>
            <Star className="text-yellow2 w-8 h-8 -translate-x-20 -translate-y-10" />
          </FloatingIcon>
          <FloatingIcon delay={1}>
            <Sparkles className="text-green6 w-6 h-6 translate-x-20 -translate-y-5" />
          </FloatingIcon>

          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="font-tangerine text-5xl md:text-7xl mb-6 text-green-950 drop-shadow-lg">
              Get the Best Deals Today!
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-green3 to-transparent" />
            </h2>
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-yellow1 to-green6 opacity-30 blur-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-tinos text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Contact us now for wholesale prices and special offers on premium mangoes
            <motion.span
              className="inline-block ml-2"
              animate={{
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            >
              🥭
            </motion.span>
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
            variants={itemVariants}
          >
            <motion.a
              href="tel:+918151881796"
              className="group flex items-center px-8 py-4 bg-yellow1 text-darkGreen2 rounded-full hover:bg-yellow2 transition-all shadow-lg hover:shadow-xl w-64 md:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} className="mr-3 group-hover:rotate-12 transition-transform" />
              <span className="font-tinos font-bold">Call Now</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-yellow2 opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.a>

            <motion.a
              href="https://wa.me/+918151881796"
              className="group flex items-center px-8 py-4 bg-green6 text-darkGreen2 rounded-full hover:bg-green5 transition-all shadow-lg hover:shadow-xl w-64 md:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={24} className="mr-3 group-hover:rotate-12 transition-transform" />
              <span className="font-tinos font-bold">WhatsApp</span>
              <motion.span
                className="absolute inset-0 rounded-full bg-green5 opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.a>
          </motion.div>

          {/* Limited Time Offer Badge */}
          <motion.div
            className="absolute top-auto right-0 md:right-10 bg-yellow1 text-darkGreen2 px-4 py-2 rounded-bl-lg rounded-br-lg shadow-lg"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <Clock size={20} />
              <span className="font-tinos font-bold">Limited Time Offer!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnhancedDealsSection;