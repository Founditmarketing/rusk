import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-rusk-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Home Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-rusk-slate-dark/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-rusk-gold uppercase tracking-[0.3em] text-sm font-medium mb-6"
          >
            Marksville, Louisiana
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8"
          >
            Elevating <span className="italic font-light">Southern</span> Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-12"
          >
            The premier luxury remodeler in Avoyelles Parish. We transform spaces with uncompromising quality and timeless design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/quote"
              className="bg-rusk-gold text-white px-8 py-4 uppercase tracking-widest text-sm hover:bg-rusk-gold-light transition-colors w-full sm:w-auto text-center"
            >
              Request Consultation
            </Link>
            <Link
              to="/gallery"
              className="group flex items-center text-white uppercase tracking-widest text-sm hover:text-rusk-gold transition-colors"
            >
              View Portfolio <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden md:flex"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest mb-3">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-white absolute top-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-8 leading-tight">
              Craftsmanship <br />
              <span className="italic text-rusk-gold">Beyond Expectation</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              At Rusk Construction, we believe that true luxury lies in the details. Based in the heart of Marksville, we bring decades of refined expertise to every project, ensuring that your home is not just renovated, but reimagined.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 font-light">
              From bespoke kitchens to spa-like bathroom retreats, our approach marries modern elegance with enduring quality. We are dedicated to creating spaces that reflect your lifestyle and elevate your everyday experience.
            </p>
            <Link to="/services" className="inline-flex items-center text-rusk-slate-dark uppercase tracking-widest text-sm font-medium hover:text-rusk-gold transition-colors group">
              Explore Our Services <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Kitchen Remodel"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block max-w-xs">
              <p className="font-serif text-2xl text-rusk-slate-dark mb-2">"Unparalleled attention to detail."</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider">— The Rusk Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avoyelles Heritage Section */}
      <section className="bg-rusk-slate-dark text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-square overflow-hidden border border-gray-800 p-2">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsmanship details"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
              <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">Our Roots</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Avoyelles <span className="italic font-light text-gray-300">Heritage</span>
              </h2>
              <div className="w-12 h-px bg-rusk-gold mb-8"></div>
              <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                Deeply rooted in Marksville, Rusk Construction draws inspiration from the rich cultural tapestry and enduring strength of Avoyelles Parish. Our commitment to local craftsmanship is unwavering.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                We partner with the finest local artisans and source premium materials to ensure that every remodel not only meets the highest standards of luxury but also honors the architectural legacy of Louisiana. When you choose Rusk, you are investing in a legacy of excellence built right here at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">Client Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-16">Words of <span className="italic font-light">Praise</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { quote: "Rusk Construction transformed our outdated kitchen into a culinary masterpiece. Their attention to detail is unmatched in Avoyelles Parish.", author: "Eleanor V.", location: "Marksville, LA" },
              { quote: "From the initial design consultation to the final reveal, the professionalism and craftsmanship were truly world-class. Highly recommended.", author: "James & Sarah T.", location: "Alexandria, LA" },
              { quote: "They respected our home's historic architecture while bringing in modern luxury. The team's dedication to perfection is evident in every room.", author: "Michael R.", location: "Bunkie, LA" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="text-rusk-gold mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.904C16.634 14.332 16.762 13.722 16.762 13.095V3H22V13.095C22 15.636 21.096 18.068 19.463 19.982L14.017 21ZM3.017 21L5.41 14.904C5.634 14.332 5.762 13.722 5.762 13.095V3H11V13.095C11 15.636 10.096 18.068 8.463 19.982L3.017 21Z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-light italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-serif text-rusk-slate-dark">{testimonial.author}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center bg-rusk-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-6">Ready to Transform Your Home?</h2>
          <p className="text-gray-600 mb-10 font-light text-lg">
            Schedule a private consultation to discuss your vision with our design and build experts.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-rusk-slate-dark text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-rusk-gold transition-colors"
          >
            Begin Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
