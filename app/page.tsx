'use client';

import { ModalProvider } from './lib/modal-context';
import CustomCursor from './components/CustomCursor';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import WorkGrid from './components/WorkGrid';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function Home() {
  return (
    <ModalProvider>
      <main className="cursor-none">
        <CustomCursor />
        <NavBar />
        <Hero />
        <WhyUs />
        <WorkGrid />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
        <ContactModal />
      </main>
    </ModalProvider>
  );
}
