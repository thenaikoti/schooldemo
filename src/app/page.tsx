import { Hero } from "@/components/v2/Hero";
import { AboutSchool } from "@/components/v2/AboutSchool";
import { Programs } from "@/components/v2/Programs";
import { StudentLife } from "@/components/v2/StudentLife";
import { TrustSection } from "@/components/v2/TrustSection";
import { SmartAdmissions } from "@/components/v2/SmartAdmissions";
import { Gallery } from "@/components/v2/Gallery";
import { Testimonials } from "@/components/v2/Testimonials";
import { ContactForm } from "@/components/v2/ContactForm";
import { FinalCTA } from "@/components/v2/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSchool />
      <Programs />
      <StudentLife />
      <TrustSection />
      <SmartAdmissions />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <FinalCTA />
    </div>
  );
}
