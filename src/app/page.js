import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Categories from '@/components/Categories/Categories';
import HowItWorks from '@/components/HowItWorks/HowItWorks';
import Testimonials from '@/components/Testimonials/Testimonials';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import MobileCallButton from '@/components/MobileCallButton/MobileCallButton';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
