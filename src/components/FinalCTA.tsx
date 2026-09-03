import { useReveal } from '@/hooks/useReveal';
import { programInfo } from '@/data/programData';
import { ArrowRight, Server } from 'lucide-react';

export default function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="apply"
      className="relative py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-200"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-100/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Server rack decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 hidden lg:flex items-center justify-center opacity-40 pointer-events-none">
        <div className="space-y-3 w-48">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-10 rounded border border-accent-200 bg-white/90 shadow-sm flex items-center px-3 gap-2 animate-pulse-slow"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-blink"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <div className="flex-1 h-1.5 bg-accent-100 rounded" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Icon */}
          <div className="inline-flex w-14 h-14 rounded-xl bg-accent-50 border border-accent-200 items-center justify-center mb-8">
            <Server className="w-7 h-7 text-accent-600" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-5">
            Build the Infrastructure That Powers the Next Decade
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            {programInfo.tagline}
          </p>

          {/* Program info */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="text-xs font-mono text-slate-600 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full">
              {programInfo.degree}
            </span>

            <span className="text-xs font-mono text-slate-600 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full">
              {programInfo.universityShort} × NIRVAA
            </span>

            <span className="text-xs font-mono text-slate-600 px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-full">
              AY {programInfo.academicYear}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => scrollTo('#overview')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-500/25"
            >
              Explore the Program
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('#curriculum')}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-slate-300 hover:border-accent-400 text-slate-800 font-semibold rounded-lg transition-all hover:bg-accent-50"
            >
              View Curriculum
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}