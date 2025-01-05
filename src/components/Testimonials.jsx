import React from "react";
import { motion } from "framer-motion"; // Import motion

function Testimonials() {
  const testimonials = [
    { name: "Ama", text: "Chopbox Express makes cooking so easy for me!" },
    {
      name: "Kwame",
      text: "Fast delivery and authentic taste. Highly recommend!",
    },
    { name: "Akosua", text: "Best Ghanaian delicacies I’ve had in a while." },
  ];

  return (
    <div className="py-12 bg-white">
      {/* Animate the section title to slide in from the left */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ x: -100, opacity: 0 }}  // Start from left and invisible
        animate={{ x: 0, opacity: 1 }}    // Slide to position and become visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        What Our Customers Say
      </motion.h2>

      {/* Animate the container of testimonials */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-yellow-100 p-6 shadow rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05, // Scale up on hover for a nice effect
              transition: { duration: 0.3 },
            }}
            transition={{
              delay: index * 0.3, // Stagger the animations for each testimonial
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <p className="italic">"{testimonial.text}"</p>
            <h3 className="mt-4 text-green-800 font-bold">{testimonial.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Testimonials;
