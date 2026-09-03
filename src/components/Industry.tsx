import { useReveal } from '@/hooks/useReveal';
import {
  salaryTiers,
  hiringEcosystems,
  capabilities,
} from '@/data/programData';
import {
  Zap,
  Thermometer,
  Cpu,
  Cloud,
  Database,
  Network,
  Shield,
  Server,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';

const capabilityIcons: Record<string, typeof Zap> = {
  zap: Zap,
  thermometer: Thermometer,
  cpu: Cpu,
  cloud: Cloud,
  database: Database,
  network: Network,
  shield: Shield,
  server: Server,
};

const ecosystemColors: Record<string, string> = {
  sky: 'text-sky-700 border-sky-300 bg-sky-50',
  emerald: 'text-emerald-700 border-emerald-300 bg-emerald-50',
  amber: 'text-amber-700 border-amber-300 bg-amber-50',
};

export default function Industry() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="industry"
      className="relative py-20 lg:py-28 bg-white border-t border-slate-200"
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
              CAREER ACCELERATION
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              From Generalist Roles to High-Compensation Specialist Positions
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Because Tier-IV data center engineering represents the physical bottleneck of the AI
              boom, compensation for qualified infrastructure architects has soared. The program is
              explicitly engineered to launch working engineers into high-echelon specialist roles.
            </p>
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h3 className="text-sm font-semibold text-slate-700 mb-5">
              Engineering Capabilities You Will Master
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {capabilities.map((cap, i) => {
                const Icon = capabilityIcons[cap.icon] || Zap;

                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2.5 glass glass-hover rounded-lg"
                  >
                    <Icon className="w-4 h-4 text-accent-600" />
                    <span className="text-sm text-slate-700">
                      {cap.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Salary table */}
          <div className="mb-16">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-5 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent-600" />
              Salary Trajectory: Pre-DCSE vs Post-DCSE
            </h3>

            {/* Desktop table */}
            <div className="hidden lg:block glass rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left text-xs font-mono text-slate-500 uppercase tracking-wider px-5 py-4">
                      Experience
                    </th>
                    <th className="text-left text-xs font-mono text-slate-500 uppercase tracking-wider px-5 py-4">
                      Pre-DCSE Role
                    </th>
                    <th className="text-left text-xs font-mono text-slate-500 uppercase tracking-wider px-5 py-4">
                      Pre-DCSE Salary
                    </th>
                    <th className="text-left text-xs font-mono text-slate-500 uppercase tracking-wider px-5 py-4">
                      Post-DCSE Role
                    </th>
                    <th className="text-right text-xs font-mono text-accent-600 uppercase tracking-wider px-5 py-4">
                      Post-DCSE Salary
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {salaryTiers.map((tier, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                        {tier.experience}
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-500">
                        {tier.preRole}
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-500 font-mono">
                        {tier.preSalary}
                      </td>

                      <td className="px-5 py-4 text-xs text-slate-600">
                        {tier.postRole}
                      </td>

                      <td className="px-5 py-4 text-sm font-bold text-accent-700 text-right font-mono">
                        {tier.postSalary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-3">
              {salaryTiers.map((tier, i) => (
                <div
                  key={i}
                  className="glass glass-hover rounded-xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-900">
                      {tier.experience}
                    </span>

                    <ArrowUpRight className="w-4 h-4 text-accent-600" />
                  </div>

                  <div className="space-y-2">
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">
                        Before
                      </p>

                      <p className="text-xs text-slate-600">
                        {tier.preRole}
                      </p>

                      <p className="text-xs text-slate-500 font-mono">
                        {tier.preSalary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-[10px] font-mono text-accent-600 uppercase">
                        After DCSE
                      </p>

                      <p className="text-xs text-slate-600">
                        {tier.postRole}
                      </p>

                      <p className="text-sm font-bold text-accent-700 font-mono">
                        {tier.postSalary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring ecosystems */}
          <div>
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-5">
              Target Hiring Ecosystems
            </h3>

            <p className="text-sm text-slate-600 mb-6">
              Graduates are primed for premier domestic and multinational hyperscalers, colocation
              giants, and facility engineering conglomerates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {hiringEcosystems.map((eco, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 border ${
                    ecosystemColors[eco.color] || ecosystemColors.sky
                  }`}
                >
                  <h4 className="font-display font-semibold text-sm mb-4">
                    {eco.category}
                  </h4>

                  <div className="space-y-2">
                    {eco.companies.map((company, j) => (
                      <p
                        key={j}
                        className="text-xs text-slate-600"
                      >
                        {company}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}