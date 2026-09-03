import { useReveal, useCountUp } from '@/hooks/useReveal';
import { stats } from '@/data/programData';
import { Cpu, Zap, TrendingUp, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const icons: LucideIcon[] = [Cpu, Zap, TrendingUp, Users];

function StatCard({
  stat,
  index,
  visible,
}: {
  stat: typeof stats[0];
  index: number;
  visible: boolean;
}) {
  const Icon = icons[index];
  const count = useCountUp(stat.value, 2000, visible);

  return (
    <div className="glass glass-hover rounded-xl p-6 lg:p-7 group">
      <div className="w-10 h-10 rounded-lg bg-accent-50 border border-accent-400/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 text-accent-600" />
      </div>

      <div className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>

      <div className="text-sm font-medium text-slate-700 mb-1">
        {stat.label}
      </div>

      <div className="text-xs text-slate-500 leading-relaxed">
        {stat.sub}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="overview"
      className="relative py-20 lg:py-28 bg-slate-50 border-t border-slate-200"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="text-center mb-14">
            <p className="text-xs font-mono text-accent-600 tracking-widest mb-3">
              THE SCALE OF THE CHALLENGE
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight">
              The AI Revolution Has a Physical Limit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                stat={stat}
                index={i}
                visible={visible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}