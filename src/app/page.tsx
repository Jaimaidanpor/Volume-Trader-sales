import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import SolutionSection from "@/components/SolutionSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-poppins">
      <UrgencyBar />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <CoursesSection />
      <TestimonialsSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
