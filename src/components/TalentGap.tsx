import { useReveal } from '@/hooks/useReveal';
import { talentGap } from '@/data/programData';
import { Monitor, Zap, Layers, Check, X, ArrowRight } from 'lucide-react';

const icons: Record<string, typeof Monitor> = {
  monitor: Monitor,
  zap: Zap,
  layers: Layers,
};

export default function TalentGap() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="why"
      className="relative py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Heading */}
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono text-accent-600 tracking-widest mb-3">
              THE TALENT CHASM
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Why Traditional Engineering Programs Fall Short
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Despite soaring demand and high compensation packages, hyperscale operators are
              bottlenecked by a profound talent shortage caused by academic silos. The M.Tech in
              Data Centre Systems Engineering was forged specifically to dissolve them — cultivating
              hybrid engineers who command mastery from the{' '}
              <span className="text-slate-900 font-medium">
                electrical substation to the cloud control plane
              </span>.
            </p>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {talentGap.map((group, i) => {
              const Icon = icons[group.icon];
              const isBridge = group.isBridge;

              return (
                <div
                  key={i}
                  className={`rounded-xl p-6 lg:p-7 transition-all duration-300 ${
                    isBridge
                      ? 'bg-gradient-to-b from-accent-50 to-white border border-accent-300/60 shadow-md lg:scale-105'
                      : 'glass glass-hover'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ${
                      isBridge
                        ? 'bg-accent-100 border border-accent-300/60'
                        : 'bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isBridge ? 'text-accent-600' : 'text-slate-500'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-display font-semibold mb-4 ${
                      isBridge
                        ? 'text-slate-900 text-lg'
                        : 'text-slate-800 text-base'
                    }`}
                  >
                    {group.group}
                  </h3>

                  {group.has.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {group.has.map((item, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isBridge
                                ? 'text-accent-600'
                                : 'text-emerald-600'
                            }`}
                          />
                          <span className="text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {group.lacks.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-slate-200">
                      {group.lacks.map((item, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm">
                          <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-rose-500/80" />
                          <span className="text-slate-500">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {isBridge && (
                    <div className="mt-5 pt-5 border-t border-accent-200">
                      <div className="flex items-center gap-2 text-xs font-mono text-accent-700">
                        <ArrowRight className="w-3.5 h-3.5" />
                        THE DCSE SOLUTION
                      </div>
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