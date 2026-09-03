import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { faqs } from '@/data/programData';
import { Plus } from 'lucide-react';

export default function FAQs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative py-20 lg:py-28 bg-slate-50 border-t border-slate-200"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-accent-600 tracking-widest mb-3">
              FREQUENTLY ASKED
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Questions and Answers
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;

              return (
                <div
                  key={i}
                  className={`glass glass-hover rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-accent-400/40 shadow-sm' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        isOpen ? 'text-slate-900' : 'text-slate-700'
                      }`}
                    >
                      {faq.q}
                    </span>

                    <Plus
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-accent-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}