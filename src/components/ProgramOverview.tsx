import { useReveal } from '@/hooks/useReveal';
import { programInfo, leadership } from '@/data/programData';
import {
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  Clock,
  BookOpen,
  FileText,
  CheckCircle2,
} from 'lucide-react';

const overviewItems = [
  {
    icon: GraduationCap,
    label: 'Awarding University',
    value: programInfo.university,
  },
  {
    icon: Building2,
    label: 'Industry Partner',
    value: programInfo.industryPartner,
  },
  {
    icon: Calendar,
    label: 'Academic Year',
    value: programInfo.academicYear,
  },
  {
    icon: Clock,
    label: 'Delivery Model',
    value: programInfo.deliveryModel,
  },
  {
    icon: MapPin,
    label: 'Campus Venue',
    value: `${programInfo.campus} — ${programInfo.classrooms}`,
  },
  {
    icon: BookOpen,
    label: 'School & Department',
    value: `${programInfo.school} · ${programInfo.department}`,
  },
  {
    icon: FileText,
    label: 'Document Reference',
    value: programInfo.docRef,
  },
  {
    icon: CheckCircle2,
    label: 'Status',
    value: programInfo.status,
  },
];

export default function ProgramOverview() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="program"
      className="relative py-20 lg:py-28 bg-slate-50 border-t border-slate-200"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          {/* Heading */}
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-mono text-accent-600 tracking-widest mb-3">
              THE INSTITUTIONAL ALLIANCE
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              A Collaboration Between Academic Excellence and Industry Execution
            </h2>

            <p className="text-slate-600 leading-relaxed">
              The program is built upon an industry-academia synergy that pairs prestigious academic
              accreditation with hands-on enterprise execution.
            </p>
          </div>

          {/* Two-partner visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
            <div className="glass glass-hover rounded-xl p-7 border-t-2 border-sky-500/60">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                Dr. Vishwanath Karad MIT World Peace University
              </h3>

              <p className="text-xs font-semibold text-sky-600 mb-4">
                Academic Excellence & Research Heritage
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                One of India's premier multidisciplinary institutions with a 40-year legacy of
                engineering innovation, state-of-the-art campus infrastructure, NAAC accreditation,
                and a nationally recognized commitment to peace studies and holistic technical
                leadership. Hosted under the School of Engineering & Technology (SoET) and the
                Department of Computer Science Engineering.
              </p>
            </div>

            <div className="glass glass-hover rounded-xl p-7 border-t-2 border-accent-500/60">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                NIRVAA Solution Pvt. Ltd.
              </h3>

              <p className="text-xs font-semibold text-accent-600 mb-4">
                Industry Data Center Engineering Titan
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                A specialized enterprise firm delivering Tier-IV data center design, turnkey facility
                commissioning, IBMS building automation, precision liquid cooling, and distributed
                cloud storage. NIRVAA provides active industry practitioners, C-suite executives,
                and senior engineers with 15 to 30+ years of direct field experience to teach the
                technical core.
              </p>
            </div>
          </div>

          {/* Overview info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {overviewItems.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="glass glass-hover rounded-lg p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-accent-600" />

                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>

                  <p className="text-sm text-slate-800 font-medium leading-snug">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Leadership council */}
          <div>
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-5">
              Academic & Executive Leadership Council
            </h3>

            <div className="glass rounded-xl overflow-hidden">
              <div className="divide-y divide-slate-200">
                {leadership.map((member, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 px-5 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="sm:w-64 flex-shrink-0">
                      <p className="text-sm font-semibold text-slate-900">
                        {member.name}
                      </p>
                    </div>

                    <div className="sm:w-72 flex-shrink-0">
                      <p className="text-xs text-accent-600">
                        {member.designation}
                      </p>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}