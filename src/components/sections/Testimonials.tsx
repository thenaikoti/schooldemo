"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Class X Student",
    content: "The transformation in my child's confidence and academic performance has been simply remarkable. The teachers genuinely care.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Alumnus (Batch of 2010)",
    content: "The foundation I received here was instrumental in my medical career. The focus on holistic development made all the difference.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Anjali Desai",
    role: "Parent of Class V Student",
    content: "The robotics and AI curriculum for early grades is exceptional. My daughter already knows more about coding than I do!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Arun Verma",
    role: "Parent of Class XII Student",
    content: "The integrated coaching program saved us so much time and stress. A truly modern approach to secondary education.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Meera Patel",
    role: "Parent of LKG Student",
    content: "We couldn't have asked for a better start to our son's educational journey. The play-based learning approach is wonderful.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
  },
  {
    name: "Vikas Reddy",
    role: "Alumnus (Batch of 2015)",
    content: "The international exchange programs opened up my worldview. Currently pursuing my Master's abroad with full scholarship.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  },
];

const ReviewCard = ({
  image,
  name,
  role,
  content,
}: {
  image: string;
  name: string;
  role: string;
  content: string;
}) => {
  return (
    <figure
      className="relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col gap-4 bg-white/50 border-black/10 hover:bg-white/80 dark:bg-black/50 dark:border-white/10 dark:hover:bg-black/80 transition-colors backdrop-blur-md"
    >
      <div className="flex flex-row items-center gap-4">
        <Image
          className="rounded-full object-cover"
          width="48"
          height="48"
          alt={name}
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm italic text-neutral-600 dark:text-neutral-300">"{content}"</blockquote>
      <div className="mt-auto flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
    </figure>
  );
};

export function Testimonials() {
  const firstRow = testimonials.slice(0, testimonials.length / 2);
  const secondRow = testimonials.slice(testimonials.length / 2);

  return (
    <section className="relative flex min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-background py-24">
      <div className="container flex flex-col items-center mb-12">
         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-neutral-900 dark:text-neutral-50 mb-4">
            Hear From Our <span className="text-primary text-blue-600 dark:text-blue-500">Community</span>
         </h2>
         <p className="text-lg text-neutral-600 dark:text-neutral-400 text-center max-w-2xl px-4">
            Discover why parents and alumni trust us with their educational journey.
         </p>
      </div>

      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      
      {/* Gradients to fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
    </section>
  );
}
