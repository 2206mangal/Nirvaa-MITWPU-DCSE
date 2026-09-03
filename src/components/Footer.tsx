import { programInfo } from '@/data/programData';
import { Server } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent-50 border border-accent-200 flex items-center justify-center">
                <Server className="w-5 h-5 text-accent-600" />
              </div>

              <span className="font-display font-semibold text-slate-900 text-sm">
                M.Tech DCSE
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              {programInfo.name} — a pioneering industry-academia collaborative initiative
              engineering India's next-generation Tier-IV AI data centres.
            </p>
          </div>

          {/* Institution */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              Institution
            </h4>

            <p className="text-sm text-slate-800 mb-1">
              {programInfo.university}
            </p>

            <p className="text-xs text-slate-500 mb-3">
              {programInfo.school}
            </p>

            <p className="text-xs text-slate-500">
              {programInfo.department}
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">
              Program Details
            </h4>

            <div className="space-y-1.5">
              <p className="text-xs text-slate-600">
                <span className="text-slate-400">Partner:</span>{' '}
                {programInfo.industryPartner}
              </p>

              <p className="text-xs text-slate-600">
                <span className="text-slate-400">Delivery:</span>{' '}
                {programInfo.deliveryModel}
              </p>

              <p className="text-xs text-slate-600">
                <span className="text-slate-400">Campus:</span>{' '}
                {programInfo.classrooms}
              </p>

              <p className="text-xs text-slate-600">
                <span className="text-slate-400">Academic Year:</span>{' '}
                {programInfo.academicYear}
              </p>

              <p className="text-xs text-slate-600">
                <span className="text-slate-400">Reference:</span>{' '}
                {programInfo.docRef}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            {programInfo.tagline}
          </p>

          <p className="text-xs text-slate-400">
            {programInfo.universityShort} &bull; {programInfo.industryPartner}
          </p>
        </div>
      </div>
    </footer>
  );
}