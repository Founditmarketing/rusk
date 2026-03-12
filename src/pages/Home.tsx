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
            src="/modern_kitchen_1_1773355099065.png"
            alt="Luxury Home Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-rusk-slate-dark/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="block text-rusk-gold uppercase tracking-[0.4em] text-sm font-medium mb-8"
            >
              Marksville, Louisiana
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white leading-[1.1] mb-8"
            >
              Elevating <span className="italic font-light">Southern</span> Living
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: "easeInOut" }}
              className="w-24 h-[1px] bg-rusk-gold mx-auto mb-8 origin-center"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              The premier luxury remodeler in Avoyelles Parish. We transform spaces with uncompromising quality and timeless design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link
                to="/quote"
                className="bg-transparent border border-rusk-gold text-rusk-gold hover:bg-rusk-gold hover:text-white px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto text-center"
              >
                Request Consultation
              </Link>
              <Link
                to="/gallery"
                className="group flex items-center text-white uppercase tracking-widest text-sm hover:text-rusk-gold transition-colors"
              >
                View Portfolio <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
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
      <section className="py-24 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
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
              Explore Our Services <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden group">
              <img
                src="/modern_bathroom_1_1773355112885.png"
                alt="Beautiful Bathroom Remodel"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl hidden md:block max-w-xs"
            >
              <p className="font-serif text-2xl text-rusk-slate-dark mb-2">"Unparalleled attention to detail."</p>
              <div className="w-12 h-px bg-rusk-gold mb-3 mt-4" />
              <p className="text-sm text-gray-500 uppercase tracking-wider">— The Rusk Standard</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Avoyelles Heritage Section */}
      <section className="bg-rusk-slate-dark text-white py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="aspect-square overflow-hidden border border-gray-800 p-2 relative group">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Craftsmanship details"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-rusk-gold/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2"
            >
              <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">Our Roots</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Avoyelles <span className="italic font-light text-gray-300">Heritage</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-12 h-px bg-rusk-gold mb-8 origin-left"
              />
              <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
                Deeply rooted in Marksville, Rusk Construction draws inspiration from the rich cultural tapestry and enduring strength of Avoyelles Parish. Our commitment to local craftsmanship is unwavering.
              </p>
              <p className="text-gray-400 leading-relaxed font-light">
                We partner with the finest local artisans and source premium materials to ensure that every remodel not only meets the highest standards of luxury but also honors the architectural legacy of Louisiana. When you choose Rusk, you are investing in a legacy of excellence built right here at home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4">Client Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-16">Words of <span className="italic font-light">Praise</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { quote: "Rusk Construction transformed our outdated kitchen into a culinary masterpiece. Their attention to detail is unmatched in Avoyelles Parish.", author: "Eleanor V.", location: "Marksville, LA" },
              { quote: "From the initial design consultation to the final reveal, the professionalism and craftsmanship were truly world-class. Highly recommended.", author: "James & Sarah T.", location: "Alexandria, LA" },
              { quote: "They respected our home's historic architecture while bringing in modern luxury. The team's dedication to perfection is evident in every room.", author: "Michael R.", location: "Bunkie, LA" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                className="flex flex-col items-center bg-rusk-bg p-8 hover:shadow-xl transition-shadow duration-500 rounded-sm border border-gray-100"
              >
                <div className="text-rusk-gold mb-6 opacity-50">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.41 14.904C16.634 14.332 16.762 13.722 16.762 13.095V3H22V13.095C22 15.636 21.096 18.068 19.463 19.982L14.017 21ZM3.017 21L5.41 14.904C5.634 14.332 5.762 13.722 5.762 13.095V3H11V13.095C11 15.636 10.096 18.068 8.463 19.982L3.017 21Z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-light italic leading-relaxed mb-8 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto w-full pt-6 border-t border-gray-200">
                  <p className="font-serif text-rusk-slate-dark text-lg">{testimonial.author}</p>
                  <p className="text-xs text-rusk-gold uppercase tracking-widest mt-1">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 text-center bg-rusk-slate-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-6">Let's Talk</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white">Ready to <span className="italic font-light text-gray-300">Transform</span> Your Home?</h2>
          <p className="text-gray-400 mb-12 font-light text-lg">
            Schedule a private consultation to discuss your vision with our design and build experts.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-rusk-gold text-white px-12 py-5 uppercase tracking-widest text-sm hover:bg-white hover:text-rusk-slate-dark transition-all duration-300 shadow-xl"
          >
            Begin Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
