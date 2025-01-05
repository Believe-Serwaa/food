import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import img1 from '../assets/images/hausa-koko.jpg';
import img2 from '../assets/images/koose.jpg';
import img3 from '../assets/images/pancake.jpg';
import img4 from '../assets/images/toogb3i.jpg';

const images = [img1, img2, img3, img4];

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-yellow-100 h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-green-900 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Authentic Ghanaian Delicacies
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-700 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Bringing tradition to your table, with a modern twist.
      </motion.p>
      <motion.button
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-500 hover:scale-105 transition relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        Shop Now
      </motion.button>
    </div>
  );
}

export default HeroSection;
