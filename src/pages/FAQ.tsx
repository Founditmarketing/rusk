import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What areas of Louisiana do you serve?",
        answer: "Rusk Construction is proudly based in Marksville, LA. We primarily serve Avoyelles Parish and the surrounding Central Louisiana region, bringing our premier luxury remodeling services to homeowners seeking uncompromising quality."
    },
    {
        question: "Do you handle both design and construction?",
        answer: "Yes, we are a full-service design-build firm. Our team collaborates with you from the initial conceptual design tailored to your lifestyle, all the way through obtaining permits, sourcing premium materials, and executing the final construction with our master craftsmen."
    },
    {
        question: "How long does a typical kitchen or bathroom remodel take?",
        answer: "The timeline varies based on the scope and complexity of the project. A standard luxury bathroom remodel may take 4-6 weeks, while a comprehensive kitchen redesign might take 8-12 weeks. We provide a detailed project schedule during our consultation phase so you know exactly what to expect."
    },
    {
        question: "What makes Rusk Construction a 'luxury' remodeler?",
        answer: "Luxury at Rusk means two things: the quality of the materials and the exceptional level of our craftsmanship. We focus on bespoke, custom solutions rather than builder-grade materials. Our meticulous attention to detail and our sophisticated design approach ensure a result that feels truly premium and enduring."
    },
    {
        question: "How do we get started with a project?",
        answer: "The first step is to schedule a private consultation. We'll discuss your vision, evaluate your space, and begin outlining potential design solutions and budgets. You can request a consultation through our website or by calling our office."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-rusk-bg min-h-screen pt-32 pb-24">
            {/* Header */}
            <section className="px-4 max-w-4xl mx-auto text-center mb-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-rusk-gold uppercase tracking-[0.2em] text-sm font-medium block mb-4"
                >
                    Inquiries
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-serif text-rusk-slate-dark mb-6"
                >
                    Frequently Asked <span className="italic font-light">Questions</span>
                </motion.h1>
            </section>

            {/* FAQ Accordion */}
            <section className="px-4 max-w-3xl mx-auto">
                <div className="border-t border-gray-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex justify-between items-center text-left group"
                            >
                                <span className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${openIndex === index ? 'text-rusk-gold' : 'text-rusk-slate-dark group-hover:text-rusk-gold'}`}>
                                    {faq.question}
                                </span>
                                <span className="ml-6 shrink-0 text-rusk-slate-dark">
                                    {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 text-gray-600 font-light leading-relaxed text-lg">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
