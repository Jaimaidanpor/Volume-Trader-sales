import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import CoursesSection from "@/components/CoursesSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-poppins">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <CoursesSection />
      <InstructorSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
