import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HeroSlideTwo from '@/components/HeroSlideTwo';
import StatsBar from '@/components/StatsBar';
import TalentGap from '@/components/TalentGap';
import ProgramOverview from '@/components/ProgramOverview';
import Curriculum from '@/components/curriculum';
import Faculty from '@/components/faculty';
import Labs from '@/components/Labs';
import Industry from '@/components/Industry';
import FAQs from '@/components/FAQs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-body antialiased">
      <Navigation />

      <main>
        <Hero />
        <StatsBar />
        <TalentGap />
        <ProgramOverview />
        <Curriculum />
        <Faculty />
        <Labs />
        <Industry />
        <FAQs />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}