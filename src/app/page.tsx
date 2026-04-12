import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Programs } from "@/components/sections/Programs";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { AdmissionProcess } from "@/components/sections/AdmissionProcess";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <Programs />
      <WhyChooseUs />
      <AdmissionProcess />
      <GalleryPreview />
      <Testimonials />
      <EnquiryForm />
      <ContactSection />
    </div>
  );
}
