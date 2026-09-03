import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { courses } from '@/data/programData';
import type { Course } from '@/data/programData';
import {
  ChevronDown,
  BookOpen,
  FlaskConical,
  Award,
  X,
} from 'lucide-react';

const colorMap: Record<
  string,
  { bg: string; text: string; border: string; dot: string }
> = {
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-300',
    dot: 'bg-emerald-500',
  },
  rose: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-300',
    dot: 'bg-rose-500',
  },
  slate: {
    bg: 'bg-slate-100',
    text: 'text-slate-600',
    border: 'border-slate-300',
    dot: 'bg-slate-500',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
    border: 'border-indigo-300',
    dot: 'bg-indigo-500',
  },
  fuchsia: {
    bg: 'bg-fuchsia-50',
    text: 'text-fuchsia-700',
    border: 'border-fuchsia-300',
    dot: 'bg-fuchsia-500',
  },
  sky: {
    bg: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-300',
    dot: 'bg-sky-500',
  },
  cyan: {
    bg: 'bg-cyan-50',
    text: 'text-cyan-700',
    border: 'border-cyan-300',
    dot: 'bg-cyan-500',
  },
};

export default function Curriculum() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [modalCourse, setModalCourse] = useState<Course | null>(null);

  const toggle = (code: string) => {
    setExpanded(expanded === code ? null : code);
  };

  return (
    <section
      id="curriculum"
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
              SEMESTER I CURRICULUM
            </p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-5">
              21 Credits Across 7 Courses
            </h2>

            <p className="text-slate-600 leading-relaxed">
              The First Semester curriculum establishes rigorous foundations across physical
              facility design, distributed cloud storage, mathematical queuing theory, engineering
              research, and leadership resilience.
            </p>
          </div>

          {/* Credit breakdown */}
          <div className="glass rounded-xl p-5 mb-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Credit Breakdown:
            </span>

            <span className="text-sm text-slate-600">
              <span className="text-emerald-600 font-semibold">10 cr</span>{' '}
              Technical Core
            </span>

            <span className="text-slate-300">·</span>

            <span className="text-sm text-slate-600">
              <span className="text-indigo-600 font-semibold">8 cr</span>{' '}
              Math & Research
            </span>

            <span className="text-slate-300">·</span>

            <span className="text-sm text-slate-600">
              <span className="text-sky-600 font-semibold">3 cr</span>{' '}
              Holistic & Wellness
            </span>
          </div>

          {/* Course list */}
          <div className="space-y-3">
            {courses.map((course) => {
              const c = colorMap[course.categoryColor] || colorMap.slate;
              const isOpen = expanded === course.code;
              const hasDetail = course.units.length > 0;

              return (
                <div
                  key={course.code}
                  className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-accent-400/40 shadow-sm' : ''
                  }`}
                >
                  {/* Course header */}
                  <button
                    onClick={() => hasDetail && toggle(course.code)}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div
                      className={`w-2 h-12 rounded-full ${c.dot} flex-shrink-0`}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-slate-500">
                          {course.code}
                        </span>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${c.bg} ${c.text} ${c.border}`}
                        >
                          {course.category}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                        {course.title}
                      </h3>
                    </div>

                    <div className="hidden sm:flex items-center gap-5 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-xs text-slate-500">LTP</div>
                        <div className="text-sm font-mono text-slate-600">
                          {course.ltp}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-xs text-slate-500">Credits</div>
                        <div className="text-lg font-display font-bold text-slate-900">
                          {course.credits}
                        </div>
                      </div>
                    </div>

                    <div className="sm:hidden text-center flex-shrink-0">
                      <div className="text-lg font-display font-bold text-slate-900">
                        {course.credits}
                      </div>
                      <div className="text-[10px] text-slate-500">cr</div>
                    </div>

                    {hasDetail && (
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Expanded content */}
                  {isOpen && hasDetail && (
                    <div className="px-5 pb-5 pt-0 animate-fade-in">
                      <div className="pl-6 border-l border-slate-200 ml-2 space-y-4">
                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 text-xs">
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <Award className="w-3.5 h-3.5 text-accent-600" />
                            {course.scheme}
                          </div>

                          {course.standards && (
                            <div className="flex items-center gap-1.5 text-slate-500">
                              <BookOpen className="w-3.5 h-3.5 text-accent-600" />
                              {course.standards}
                            </div>
                          )}
                        </div>

                        {/* Instructors */}
                        <p className="text-xs text-slate-500">
                          <span className="text-slate-700 font-medium">
                            Instructors:
                          </span>{' '}
                          {course.instructors}
                        </p>

                        {/* Rationale */}
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {course.rationale}
                        </p>

                        {/* Units */}
                        <div className="space-y-3">
                          {course.units.map((unit, j) => (
                            <div key={j} className="flex gap-3">
                              <div className="flex-shrink-0 w-6 h-6 rounded bg-accent-50 border border-accent-200 flex items-center justify-center text-[10px] font-mono text-accent-700">
                                {j + 1}
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-slate-800 mb-0.5">
                                  {unit.title}
                                </p>

                                <p className="text-xs text-slate-500 leading-relaxed">
                                  {unit.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Lab deliverables */}
                        {course.labDeliverables && (
                          <div className="pt-3 border-t border-slate-200">
                            <div className="flex items-center gap-2 mb-2">
                              <FlaskConical className="w-4 h-4 text-emerald-600" />

                              <span className="text-xs font-semibold text-emerald-700">
                                Practical Laboratory Deliverables
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {course.labDeliverables.map((lab, j) => (
                                <div
                                  key={j}
                                  className="text-xs text-slate-500 flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                                  {lab}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for course detail */}
      {modalCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setModalCourse(null)}
        >
          <div
            className="bg-white border border-slate-200 shadow-2xl rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="font-mono text-xs text-slate-500">
                  {modalCourse.code}
                </span>

                <h3 className="font-display text-xl font-bold text-slate-900">
                  {modalCourse.title}
                </h3>
              </div>

              <button
                onClick={() => setModalCourse(null)}
                className="text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {modalCourse.rationale}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}