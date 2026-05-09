import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { BookOpen, GraduationCap, Microscope, Palette, Binary, Trophy } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    name: "Pre-Primary",
    description: "Nurturing young minds through play-based and experiential learning.",
    href: "#pre-primary",
    cta: "Learn more",
    Icon: BookOpen,
    background: <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Primary Education",
    description: "Building strong foundations in core subjects with focus on holistic development.",
    href: "#primary",
    cta: "Learn more",
    Icon: Palette,
    background: <div className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "STEM Excellence",
    description: "Advanced laboratories and robotics labs for hands-on scientific exploration.",
    href: "#stem",
    cta: "Learn more",
    Icon: Microscope,
    background: (
      <Image
        src="/images/programs_stem_1776796289895.png"
        alt="STEM Lab"
        fill
        className="object-cover opacity-20 dark:opacity-30"
      />
    ),
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Higher Secondary",
    description: "Comprehensive streams for Science, Commerce, and Humanities with IIT/JEE & NEET integrated coaching.",
    href: "#higher-secondary",
    cta: "Explore streams",
    Icon: GraduationCap,
    background: <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/20" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Coding & AI",
    description: "Future-ready curriculum with early exposure to programming, AI, and digital literacy.",
    href: "#coding",
    cta: "Learn more",
    Icon: Binary,
    background: <div className="absolute inset-0 bg-orange-500/10 dark:bg-orange-500/20" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Sports & Athletics",
    description: "State-of-the-art facilities for football, basketball, swimming, and professional coaching.",
    href: "#sports",
    cta: "View facilities",
    Icon: Trophy,
    background: (
      <Image
        src="/images/programs_sports_1776796309100.png"
        alt="Sports"
        fill
        className="object-cover opacity-20 dark:opacity-30"
      />
    ),
    className: "col-span-3 lg:col-span-2",
  },
];

export function Programs() {
  return (
    <section className="container py-24" id="programs">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 dark:text-neutral-50">
          Academic <span className="text-primary">Excellence</span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          We offer a comprehensive curriculum that challenges and inspires students at every stage of their educational journey.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {programs.map((program) => (
          <BentoCard key={program.name} {...program} />
        ))}
      </BentoGrid>
    </section>
  );
}
