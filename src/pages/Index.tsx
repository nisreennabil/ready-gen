import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ValueSection from "@/components/ValueSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TransformationSection from "@/components/TransformationSection";
import CTASection from "@/components/CTASection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ValueSection />
      <CoursesSection />
      <TestimonialsSection />
      <TransformationSection />
      <CTASection />
      <ConnectSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
