import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Kitchens', 'Baths', 'Interiors'];

  const images = [
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Modern Kitchen Island", category: "Kitchens", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Luxury Bathroom", category: "Baths", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Living Room Remodel", category: "Interiors", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Custom Cabinetry", category: "Kitchens", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "High-End Kitchen", category: "Kitchens", colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Spa-like Tub", category: "Baths", colSpan: "col-span-1", rowSpan: "row-span-1" },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="bg-rusk-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-rusk-slate-dark mb-6"
          >
            Selected <span className="italic font-light">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light text-lg"
          >
            A curated collection of our finest remodeling projects across Avoyelles Parish.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-sm uppercase tracking-widest transition-all duration-300 pb-1 border-b-2 ${
                filter === category 
                  ? 'text-rusk-slate-dark border-rusk-gold font-medium' 
                  : 'text-gray-400 border-transparent hover:text-rusk-slate-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px]">
          <AnimatePresence>
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-serif text-xl tracking-wide">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
