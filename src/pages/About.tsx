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

        {/* The Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1541888081622-67290161d763?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Trevor Ruby - Master Builder Reviewing Plans"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rusk-slate-dark text-white p-8 shadow-2xl hidden md:block max-w-xs z-10">
              <p className="font-serif text-2xl mb-2 text-rusk-gold">Trevor Ruby</p>
              <div className="w-12 h-px bg-white/20 mb-3 mt-4" />
              <p className="text-sm text-gray-400 uppercase tracking-wider">Founder & Master Builder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-0"
          >
            <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">The Vision</span>
            <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-6 leading-tight">
              A Dedication to <br /> <span className="italic text-rusk-gold">Exceptional Living</span>
            </h2>
            <div className="w-12 h-px bg-rusk-gold mb-8"></div>

            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                Founded by Trevor Ruby, Rusk Construction was born in the heart of Avoyelles Parish out of a profound respect for architectural integrity and a desire to elevate the standard of living for our community. We are more than simple contractors; we are curators of fine spaces and trusted advisors in the transformation of your most valuable asset.
              </p>
              <p>
                From our earliest days, the philosophy has remained unchanged: never compromise on the quality of materials, never rush the meticulous process of master craftsmanship, and always build as if we were constructing our own family home.
              </p>
              <p>
                Today, Rusk Construction stands as the premier luxury remodeler in Louisiana. We pride ourselves on a transparent, white-glove approach that removes the friction from renovations, leaving you with a home that is as structurally enduring as it is visually breathtaking.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl text-rusk-slate-dark">T. Ruby</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Lead Designer</span>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <img
                src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Signature"
                className="h-10 opacity-40 mix-blend-multiply grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Core Values / Guiding Principles */}
        <div className="bg-white p-12 md:p-24 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rusk-bg rounded-full -mr-32 -mt-32 opacity-50"></div>

          <div className="text-center mb-20 relative z-10">
            <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">The Standard</span>
            <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-6">Our Guiding <span className="italic text-rusk-gold">Principles</span></h2>
            <p className="text-gray-500 font-light max-w-2xl mx-auto text-lg">
              The foundational beliefs that govern every nail driven, stone laid, and consultation held.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {[
              { title: "Uncompromising Materials", desc: "We source only the finest materials, from imported Italian marble to locally milled Louisiana cypress, ensuring longevity, durability, and timeless beauty." },
              { title: "Transparent Integrity", desc: "True luxury includes peace of mind. We provide clear timelines, detailed line-item budgets, and constant, proactive communication throughout the entire build." },
              { title: "Architectural Harmony", desc: "We deeply respect the existing soul of your home. Our designs seamlessly blend modern, high-end amenities with classic Southern architectural details." }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 mx-auto border border-rusk-gold flex items-center justify-center mb-8 transform rotate-45 group-hover:bg-rusk-gold transition-colors duration-500">
                  <div className="w-2 h-2 bg-rusk-slate-dark group-hover:bg-white transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl font-serif text-rusk-slate-dark mb-4 group-hover:text-rusk-gold transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 font-light text-base leading-relaxed">{value.desc}</p>
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
