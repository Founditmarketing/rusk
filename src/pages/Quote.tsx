import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Quote() {
  return (
    <div className="bg-rusk-bg min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
          >
            Inquire
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-rusk-slate-dark mb-6"
          >
            Request a <span className="italic font-light">Consultation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-light text-lg"
          >
            Begin the journey to your reimagined home. Contact our design team to discuss your vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4 space-y-10"
          >
            <div>
              <h3 className="font-serif text-2xl text-rusk-slate-dark mb-6">Contact Details</h3>
              <div className="w-12 h-px bg-rusk-gold mb-8"></div>
              <ul className="space-y-6 text-gray-600 font-light">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-4 mt-1 text-rusk-gold shrink-0" />
                  <span>123 Heritage Blvd<br />Marksville, LA 71351<br />Avoyelles Parish</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-4 text-rusk-gold shrink-0" />
                  <span>(318) 555-0198</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-4 text-rusk-gold shrink-0" />
                  <span>inquiries@ruskconstruction.com</span>
                </li>
              </ul>
            </div>

            <div className="bg-rusk-slate-dark text-white p-8">
              <h4 className="font-serif text-xl mb-4 text-rusk-gold">Office Hours</h4>
              <ul className="space-y-2 text-sm text-gray-300 font-light">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>By Appointment</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 bg-white p-8 md:p-12 shadow-sm border border-gray-100"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent" placeholder="(318) 555-0000" />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Project Type</label>
                <select id="projectType" className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent text-gray-700">
                  <option value="">Select a service...</option>
                  <option value="kitchen">High-End Kitchen</option>
                  <option value="bath">Luxury Bath Retreat</option>
                  <option value="whole-home">Whole-Home Remodel</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Project Details</label>
                <textarea id="message" rows={4} className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-rusk-gold transition-colors bg-transparent resize-none" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="submit" className="w-full bg-rusk-slate-dark text-white py-4 uppercase tracking-widest text-sm hover:bg-rusk-gold transition-colors">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
