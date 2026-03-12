import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-rusk-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-rusk-slate-dark mb-6"
          >
            A Legacy of <span className="italic font-light">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light text-lg"
          >
            Building the finest luxury homes and remodels in Avoyelles Parish with an unwavering commitment to craftsmanship.
          </motion.p>
        </div>

        {/* The Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Trevor Ruby - Master Builder" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rusk-slate-dark text-white p-8 shadow-xl hidden md:block max-w-xs">
              <p className="font-serif text-2xl mb-2 text-rusk-gold">Trevor Ruby</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Founder & Master Builder</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-rusk-slate-dark mb-6">
              The Visionary Behind <br/> <span className="italic text-rusk-gold">The Craft</span>
            </h2>
            <div className="w-12 h-px bg-rusk-gold mb-8"></div>
            <p className="text-gray-600 leading-relaxed font-light text-lg mb-6">
              Founded by Trevor Ruby, Rusk Construction was born out of a profound respect for architectural integrity and a desire to elevate the standard of living in Marksville and the greater Louisiana area.
            </p>
            <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
              With a background steeped in traditional woodworking and modern structural design, Trevor approaches every project not just as a contractor, but as a curator of fine living spaces. His philosophy is simple: never compromise on materials, never rush the process, and always build as if it were your own home.
            </p>
            <div className="flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Signature" 
                className="h-12 opacity-50 mix-blend-multiply grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-white p-12 md:p-20 shadow-sm border border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-rusk-slate-dark mb-4">Our Core <span className="italic text-rusk-gold">Values</span></h2>
            <p className="text-gray-500 font-light">The principles that guide every nail driven and stone laid.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Uncompromising Quality", desc: "We source only the finest materials, from imported Italian marble to locally milled Louisiana cypress, ensuring longevity and timeless beauty." },
              { title: "Transparent Integrity", desc: "Luxury is peace of mind. We provide clear timelines, detailed financial breakdowns, and constant communication throughout the build." },
              { title: "Architectural Harmony", desc: "We respect the existing soul of your home, seamlessly blending modern amenities with classic Southern architectural details." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto border border-rusk-gold flex items-center justify-center mb-6 transform rotate-45">
                  <div className="w-2 h-2 bg-rusk-slate-dark"></div>
                </div>
                <h3 className="text-xl font-serif text-rusk-slate-dark mb-4">{value.title}</h3>
                <p className="text-gray-600 font-light text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-serif text-rusk-slate-dark mb-6">Experience the Rusk Difference</h2>
          <Link
            to="/quote"
            className="inline-block bg-rusk-slate-dark text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-rusk-gold transition-colors"
          >
            Schedule a Meeting
          </Link>
        </div>

      </div>
    </div>
  );
}
