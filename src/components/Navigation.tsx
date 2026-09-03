import { useEffect, useState } from 'react';
import { Menu, X, Server } from 'lucide-react';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Why DCSE', href: '#why' },
  { label: 'Program', href: '#program' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Labs', href: '#labs' },
  { label: 'Industry', href: '#industry' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : 'bg-white/75 backdrop-blur-md border-b border-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <button
            onClick={() => handleClick('#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-accent-50 border border-accent-200 flex items-center justify-center transition-all group-hover:bg-accent-100 group-hover:border-accent-300">
              <Server className="w-5 h-5 text-accent-600" />
            </div>

            <span className="font-display font-semibold text-sm tracking-tight text-slate-900">
              M.Tech DCSE
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="px-3.5 py-2 text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-all"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleClick('#apply')}
              className="ml-2 px-4 py-2 text-[13px] font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-md transition-all hover:shadow-md hover:shadow-accent-500/20"
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 shadow-lg">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleClick('#apply')}
              className="block w-full text-center px-4 py-3 text-sm font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-lg mt-2 transition-colors"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}