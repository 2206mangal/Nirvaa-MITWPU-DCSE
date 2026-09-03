import type { ReactNode } from 'react';
import {
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  Network,
  Snowflake,
  Zap,
} from 'lucide-react';

export default function HeroSlideTwo() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-slide-two"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f3f9fc]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5fbfd] to-[#e8f5fa]" />

      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Soft cyan glow */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[700px] h-[700px] bg-cyan-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-4 lg:gap-0 items-center min-h-[calc(100vh-96px)]">

          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-2xl">

            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-accent-200 shadow-sm mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />

              <span className="text-xs font-mono text-accent-700 tracking-wider">
                NIRVAA × MIT-WPU
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.8rem] xl:text-[4.3rem] font-bold text-slate-950 leading-[1.02] tracking-tight mb-6">
              ONE M.TECH.
              <br />
              THE ENTIRE
              <br />
              <span className="text-gradient">
                AI INFRASTRUCTURE
              </span>
              <br />
              STACK.
            </h1>

            {/* Accent line */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-1 bg-accent-500 rounded-full" />
              <div className="w-4 h-1 bg-accent-200 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7">
              From power and cooling to cloud and compute—
              <br className="hidden sm:block" />
              engineer every layer that powers the AI era.
            </p>

            {/* Infrastructure Layers */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-1 max-w-xl mb-8">
              <InfrastructureItem
                icon={<Zap className="w-4 h-4" />}
                title="POWER"
                subtitle="Reliability at Scale"
              />

              <InfrastructureItem
                icon={<Snowflake className="w-4 h-4" />}
                title="COOLING"
                subtitle="Liquid & Immersion"
              />

              <InfrastructureItem
                icon={<Cpu className="w-4 h-4" />}
                title="COMPUTE"
                subtitle="GPU Dense Systems"
              />

              <InfrastructureItem
                icon={<Network className="w-4 h-4" />}
                title="NETWORK"
                subtitle="High-Speed Fabric"
              />

              <InfrastructureItem
                icon={<Database className="w-4 h-4" />}
                title="STORAGE"
                subtitle="Distributed & Secure"
              />

              <InfrastructureItem
                icon={<Cloud className="w-4 h-4" />}
                title="CLOUD"
                subtitle="Scalable & Resilient"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={() => scrollTo('#overview')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent-500/25"
              >
                Explore the Program

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('#curriculum')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-300 hover:border-accent-400 text-slate-800 font-semibold rounded-lg transition-all hover:bg-white"
              >
                View Curriculum
              </button>
            </div>

            {/* Program Badges */}
            <div className="flex flex-wrap gap-3">
              <ProgramBadge text="MIT-WPU" />
              <ProgramBadge text="NIRVAA Solution" />
              <ProgramBadge text="Weekend-Intensive (Fri–Sun)" />
            </div>
          </div>

          {/* RIGHT DATA CENTRE VISUAL */}
          <div className="relative h-[500px] sm:h-[620px] lg:h-[730px] -mr-8 lg:-mr-28">

            {/* Image glow */}
            <div className="absolute inset-0 bg-cyan-100/30 rounded-full blur-[90px] pointer-events-none" />

            {/* Image container */}
            <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[125%] h-[92%] overflow-hidden">

              {/* Fade mask hides the image's built-in left labels */}
              <div
                className="absolute inset-0 bg-contain bg-right bg-no-repeat"
                style={{
                  backgroundImage:
                    "url('/data-center-stack-slide2.png')",
                  maskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, black 34%, black 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, transparent 18%, black 34%, black 100%)',
                }}
              />

              {/* Soft blend on image's left edge */}
              <div className="absolute left-[15%] top-0 bottom-0 w-[22%] bg-gradient-to-r from-[#f3f9fc] via-[#f3f9fc]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
        <button
          type="button"
          className="w-10 h-10 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-300 transition-all"
          aria-label="Previous slide"
        >
          <span className="text-xl leading-none">‹</span>
        </button>

        <div className="flex items-center gap-2 px-4">
          <span className="text-sm font-mono font-semibold text-accent-500">
            02
          </span>

          <span className="text-sm font-mono text-slate-300">
            /
          </span>

          <span className="text-sm font-mono text-slate-500">
            02
          </span>
        </div>

        <button
          type="button"
          className="w-10 h-10 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-500 hover:text-accent-600 hover:border-accent-300 transition-all"
          aria-label="Next slide"
        >
          <span className="text-xl leading-none">›</span>
        </button>
      </div>
    </section>
  );
}

function InfrastructureItem({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center text-center px-1 py-2">
      <div className="w-9 h-9 rounded-lg border border-accent-200 bg-white flex items-center justify-center text-accent-500 mb-2 shadow-sm">
        {icon}
      </div>

      <span className="text-[10px] font-semibold text-slate-700 tracking-wide">
        {title}
      </span>

      <span className="text-[8px] text-slate-400 leading-tight mt-0.5">
        {subtitle}
      </span>
    </div>
  );
}

function ProgramBadge({ text }: { text: string }) {
  return (
    <span className="text-xs text-slate-600 px-3 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
      {text}
    </span>
  );
}