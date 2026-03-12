import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: "High-End Kitchens",
      description: "The culinary heart of your home, reimagined. We design and build bespoke kitchens featuring custom cabinetry, premium stone surfaces, and state-of-the-art appliances seamlessly integrated into elegant layouts.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Luxury Bath Retreats",
      description: "Transform your daily routine into a spa-like experience. Our bathroom remodels incorporate freestanding soaking tubs, expansive walk-in showers with custom tile work, and refined fixtures that exude tranquility.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Whole-Home Remodels",
      description: "Comprehensive transformations that redefine your living space. From structural changes to cohesive interior design, we manage every aspect of your whole-home remodel with meticulous oversight and unparalleled craftsmanship.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="bg-rusk-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
          >
            Our Expertise
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-rusk-slate-dark mb-6"
          >
            Bespoke <span className="italic font-light">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light text-lg"
          >
            Delivering uncompromising quality and sophisticated design for Marksville's most discerning homeowners.
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-serif text-rusk-slate-dark mb-6">{service.title}</h2>
                <div className="w-12 h-px bg-rusk-gold mb-6"></div>
                <p className="text-gray-600 leading-relaxed font-light text-lg mb-8">
                  {service.description}
                </p>
                <Link 
                  to="/gallery" 
                  className="text-sm uppercase tracking-widest font-medium text-rusk-slate-dark hover:text-rusk-gold transition-colors border-b border-transparent hover:border-rusk-gold pb-1"
                >
                  View Related Work
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Process Section */}
        <div className="mt-32 border-t border-gray-200 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
            >
              How We Work
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-6"
            >
              The Rusk <span className="italic font-light">Process</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We begin with a private meeting to understand your vision, lifestyle, and the unique architectural character of your home." },
              { step: "02", title: "Design & Planning", desc: "Our experts craft detailed 3D renderings and source premium materials, ensuring every detail aligns with your expectations." },
              { step: "03", title: "Master Craftsmanship", desc: "Construction begins with our trusted local artisans. We maintain rigorous quality control and clear communication throughout." },
              { step: "04", title: "The Reveal", desc: "We unveil your reimagined space, meticulously cleaned and styled, ready for you to step into your new standard of living." }
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pt-8"
              >
                <span className="text-7xl font-serif text-gray-100 absolute top-0 left-0 -z-10 leading-none">{item.step}</span>
                <div className="relative z-10 pl-4 border-l border-rusk-gold/30">
                  <h3 className="text-xl font-serif text-rusk-slate-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32 pt-24 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
              >
                Inquiries
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-5xl font-serif text-rusk-slate-dark mb-6"
              >
                Frequently <br/><span className="italic font-light">Asked</span>
              </motion.h2>
              <p className="text-gray-600 font-light text-lg mb-8">
                Answers to common questions about our luxury remodeling process in Avoyelles Parish.
              </p>
              <Link 
                to="/quote" 
                className="text-sm uppercase tracking-widest font-medium text-rusk-slate-dark hover:text-rusk-gold transition-colors border-b border-transparent hover:border-rusk-gold pb-1"
              >
                Ask a Question
              </Link>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              {[
                { q: "Do you handle the architectural design?", a: "Yes. Rusk Construction offers a comprehensive design-build experience. We partner with elite local architects and interior designers to ensure your vision is flawlessly executed from the first sketch to the final polish." },
                { q: "What is the typical timeline for a whole-home remodel?", a: "A luxury whole-home remodel typically ranges from 6 to 12 months, depending on the scope and complexity. We prioritize precision over speed, ensuring every detail meets the Rusk Standard." },
                { q: "How do you manage dust and disruption during construction?", a: "We employ advanced dust mitigation systems, including negative pressure air scrubbers and heavy-duty zip walls. Our team is trained to treat your home with the utmost respect, minimizing disruption to your daily life." },
                { q: "Do you source materials locally?", a: "We believe in supporting Avoyelles Parish and Louisiana artisans. We source custom millwork, cypress, and stone locally whenever possible, while also importing premium materials like Italian marble when the design calls for it." }
              ].map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-b border-gray-200 pb-8"
                >
                  <h3 className="text-xl font-serif text-rusk-slate-dark mb-4">{faq.q}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
