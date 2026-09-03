import { useReveal } from '@/hooks/useReveal';
import { labDomains, weekendSchedule, programInfo } from '@/data/programData';
import {
  Thermometer,
  Zap,
  Database,
  ShieldAlert,
  Clock,
  MapPin,
} from 'lucide-react';

const labIcons = [Thermometer, Zap, Database, ShieldAlert];

const dayColors: Record<
  string,
  { text: string; bg: string; border: string; dot: string }
> = {
  emerald: {
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    dot: 'bg-emerald-500',
  },
  slate: {
    text: 'text-slate-600',
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    dot: 'bg-slate-500',
  },
  rose: {
    text: 'text-rose-700',
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    dot: 'bg-rose-500',
  },
};

export default function Labs() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="labs"
      className="relative py-20 lg:py-28 bg-slate-50 border-t border-slate-200"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Heading */}
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono text-accent-600 tracking-widest mb-3">
              HANDS-ON LABORATORY
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Learn by Operating the Infrastructure
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Students do not simply study theoretical concepts from textbooks — they actively
              interact with physical and virtual telemetry architectures in a hardware-in-the-loop
              environment.
            </p>
          </div>

          {/* Lab domains */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {labDomains.map((lab, i) => {
              const Icon = labIcons[i];

              return (
                <div
                  key={i}
                  className="glass glass-hover rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-50 border border-accent-200 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent-600" />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-slate-900 text-sm mb-2">
                        {lab.domain}
                      </h3>

                      <p className="text-xs text-slate-500 mb-2">
                        <span className="text-slate-700 font-medium">
                          Tools:
                        </span>{' '}
                        {lab.tools}
                      </p>

                      <p className="text-xs text-slate-500">
                        <span className="text-emerald-700 font-medium">
                          Outcome:
                        </span>{' '}
                        {lab.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weekend schedule */}
          <div className="mb-6">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">
              Master Operational Timetable
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent-600" />
                {programInfo.timeRange}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-600" />
                {programInfo.classrooms}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                {programInfo.weeklyHours} Contact Hours / Week
              </span>
            </div>
          </div>

          {/* Day-by-day */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {weekendSchedule.map((day, i) => {
              const c = dayColors[day.color] || dayColors.slate;

              return (
                <div
                  key={i}
                  className="glass glass-hover rounded-xl p-6"
                >
                  {/* Day header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}
                    >
                      <span
                        className={`font-display font-bold text-sm ${c.text}`}
                      >
                        {i === 0 ? 'F' : i === 1 ? 'S' : 'S'}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold text-slate-900 text-sm">
                        {day.day}
                      </h4>

                      <p className={`text-xs ${c.text}`}>
                        {day.focus}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {day.description}
                  </p>

                  {/* Sessions */}
                  <div className="space-y-2">
                    {day.sessions.map((session, j) => (
                      <div
                        key={j}
                        className="flex items-start gap-3 py-2 border-t border-slate-200"
                      >
                        <div className="text-[10px] font-mono text-slate-500 w-20 flex-shrink-0 pt-0.5">
                          {session.time}
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-slate-700 leading-snug">
                            {session.subject}
                          </p>

                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {session.instructor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}