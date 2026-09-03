import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { programInfo } from '@/data/programData';
import HeroSlideTwo from '@/components/HeroSlideTwo';

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slide: number) => {
    setActiveSlide(slide);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % 2);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + 2) % 2);
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* =========================================================
     AUTOMATIC SLIDESHOW
     Changes slide every 7 seconds
     ========================================================= */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 2);
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* =====================================================
          SLIDE 1
          ===================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 0
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-60" />

          {/* Soft technical glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-100/60 rounded-full blur-[120px] pointer-events-none" />

          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute left-0 right-0 h-px glow-line animate-scan" />
          </div>

          {/* Server rack decoration */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center opacity-40 pointer-events-none">
            <div className="space-y-3 w-64">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 rounded border border-accent-200 bg-white/80 shadow-sm flex items-center px-3 gap-2 animate-pulse-slow"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-blink"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />

                  <div className="flex-1 h-1.5 bg-accent-100 rounded" />

                  <div className="w-6 h-1.5 bg-accent-50 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
            <div className="max-w-3xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-blink" />

                <span className="text-xs font-mono text-accent-700 tracking-wider">
                  AY {programInfo.academicYear} · NOW ACCEPTING APPLICATIONS
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-950 leading-[1.05] tracking-tight mb-6 animate-fade-up">
                Engineering the
                <br />
                <span className="text-gradient">
                  Infrastructure
                </span>
                <br />
                Behind the AI Era
              </h1>

              {/* Subtitle */}
              <p
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 animate-fade-up"
                style={{ animationDelay: '0.15s' }}
              >
                India's premier M.Tech program bridging Tier-IV data centre facility engineering and
                hyperscale cloud architecture. A weekend-intensive postgraduate degree from{' '}
                <span className="text-slate-950 font-medium">
                  MIT-WPU
                </span>{' '}
                in collaboration with{' '}
                <span className="text-slate-950 font-medium">
                  NIRVAA Solution
                </span>.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                <button
                  onClick={() => scrollTo('#overview')}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-500/25"
                >
                  Explore the Program

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollTo('#curriculum')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 hover:border-accent-400 text-slate-800 font-semibold rounded-lg transition-all hover:bg-accent-50"
                >
                  View Curriculum
                </button>
              </div>

              {/* Info badges */}
              <div
                className="flex flex-wrap gap-3 animate-fade-up"
                style={{ animationDelay: '0.45s' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm rounded-lg">
                  <GraduationCap className="w-4 h-4 text-accent-600" />

                  <span className="text-xs text-slate-700">
                    {programInfo.universityShort}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm rounded-lg">
                  <Building2 className="w-4 h-4 text-accent-600" />

                  <span className="text-xs text-slate-700">
                    NIRVAA Solution
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-xl border border-slate-200 shadow-sm rounded-lg">
                  <Calendar className="w-4 h-4 text-accent-600" />

                  <span className="text-xs text-slate-700">
                    Weekend-Intensive (Fri–Sun)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block">
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-accent-500 animate-bounce" />
            </div>
          </div>
        </section>
      </div>

      {/* =====================================================
          SLIDE 2
          ===================================================== */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 1
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <HeroSlideTwo />
      </div>

      {/* =====================================================
          CAROUSEL CONTROLS
          ===================================================== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">

        {/* Previous */}
        <button
          type="button"
          onClick={previousSlide}
          className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-300 hover:shadow-md transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Pagination */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">

          <button
            type="button"
            onClick={() => goToSlide(0)}
            className={`text-xs font-mono font-semibold transition-colors ${
              activeSlide === 0
                ? 'text-accent-500'
                : 'text-slate-400 hover:text-slate-700'
            }`}
            aria-label="Go to slide 1"
          >
            01
          </button>

          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => goToSlide(0)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeSlide === 0
                  ? 'w-8 bg-accent-500'
                  : 'w-3 bg-slate-200'
              }`}
              aria-label="Slide 1"
            />

            <button
              type="button"
              onClick={() => goToSlide(1)}
              className={`h-1 rounded-full transition-all duration-500 ${
                activeSlide === 1
                  ? 'w-8 bg-accent-500'
                  : 'w-3 bg-slate-200'
              }`}
              aria-label="Slide 2"
            />
          </div>

          <button
            type="button"
            onClick={() => goToSlide(1)}
            className={`text-xs font-mono font-semibold transition-colors ${
              activeSlide === 1
                ? 'text-accent-500'
                : 'text-slate-400 hover:text-slate-700'
            }`}
            aria-label="Go to slide 2"
          >
            02
          </button>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-300 hover:shadow-md transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}