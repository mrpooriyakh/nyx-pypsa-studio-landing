import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Workflow } from './components/Workflow';
import { PreReleaseNotice } from './components/PreReleaseNotice';
import { UseCases } from './components/UseCases';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Features />
      <Workflow />
      <PreReleaseNotice />
      <UseCases />
      <FinalCTA />
      <Footer />
      <ScrollToTop />
    </div>
  );
}