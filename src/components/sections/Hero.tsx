import { Particles } from "@/components/magicui/particles";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Particles effect for the background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        ease={80}
        color={"#3b82f6"} // primary blue glow hint
        refresh
      />

      <div className="z-10 container flex flex-col items-center gap-8 px-4 text-center sm:px-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/50 px-4 py-1.5 text-sm font-medium text-black backdrop-blur-md transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          Admissions Open for 2026-27
          <ArrowRight className="h-4 w-4" />
        </a>

        <div className="flex max-w-4xl flex-col items-center gap-6">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-7xl">
            Empowering the Next Generation of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              <TextReveal text="Global Leaders" />
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
            Experience world-class education where innovation meets tradition. Join a 
            community dedicated to nurturing excellence, creativity, and future-ready skills.
          </p>

          <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ShinyButton className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black">
              Start Application
            </ShinyButton>
            
            <a
              href="#campus-tour"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-8 py-3 font-medium text-neutral-900 transition-colors hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
            >
              <Play className="h-4 w-4" />
              Watch Campus Tour
            </a>
          </div>
        </div>

        <div className="mt-16 w-full max-w-5xl rounded-2xl border border-black/10 bg-white/50 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/50 sm:p-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
             <Image
                src="/images/hero_campus_1776796274174.png"
                alt="Students studying on campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
