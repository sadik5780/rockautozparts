import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Categories from '@/components/Categories/Categories';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import FAQ from '@/components/FAQ/FAQ';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import MobileCallButton from '@/components/MobileCallButton/MobileCallButton';
import { JsonLd, faqSchema } from '@/lib/structuredData';
import { faqs } from '@/data/faqs';

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
