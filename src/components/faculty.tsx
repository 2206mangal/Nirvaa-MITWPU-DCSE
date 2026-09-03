import { useReveal } from '@/hooks/useReveal';
import { faculty } from '@/data/programData';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';

export default function Faculty() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="faculty"
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
              FACULTY LEADERSHIP
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Mentored by Industry Veterans and C-Suite Technical Leaders
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Students are trained directly by active industry leaders holding executive roles at
              NIRVAA Solution alongside seasoned academicians from MIT-WPU — bringing 13 to 30+ years
              of direct field experience into the classroom.
            </p>
          </div>

          {/* Faculty grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {faculty.map((member, i) => (
              <div
                key={i}
                className="glass glass-hover rounded-xl p-5 group"
              >
                {/* Avatar circle */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 ${
                      member.organization === 'NIRVAA'
                        ? 'bg-accent-50 border border-accent-300 text-accent-700'
                        : 'bg-sky-50 border border-sky-300 text-sky-700'
                    }`}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-slate-900 text-sm leading-tight truncate">
                      {member.name}
                    </h3>

                    <p className="text-xs text-slate-500 truncate">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded ${
                      member.organization === 'NIRVAA'
                        ? 'bg-accent-50 text-accent-700 border border-accent-100'
                        : 'bg-sky-50 text-sky-700 border border-sky-100'
                    }`}
                  >
                    <Building2 className="w-3 h-3" />
                    {member.organization}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    <GraduationCap className="w-3 h-3" />
                    {member.qualification}
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded bg-slate-100 text-slate-600 border border-slate-200">
                    <Briefcase className="w-3 h-3" />
                    {member.experience}
                  </span>
                </div>

                {/* Specialization */}
                <p className="text-xs text-slate-500 leading-relaxed">
                  {member.specialization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}