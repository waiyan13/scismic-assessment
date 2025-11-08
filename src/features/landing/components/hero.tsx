import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/button";
import { HERO_SECTION_WORDS } from "@/config";

import { AnimatedText } from "./animated-text";

function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % HERO_SECTION_WORDS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative border-border border-b bg-[url(/hero.jpg)] bg-center bg-cover bg-primary bg-no-repeat py-16 md:py-32">
      <div className="w-full p-4 lg:mx-auto lg:w-2/3">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-balance font-bold text-5xl text-secondary tracking-tight md:text-6xl lg:text-8xl">
            Hire the right
          </h1>

          <AnimatedText word={HERO_SECTION_WORDS[currentWord]} />

          <p className="mb-6 text-balance font-bold text-5xl text-secondary tracking-tight md:text-6xl lg:text-8xl">
            for your mission
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 w-full bg-primary text-primary-foreground text-xl sm:w-auto"
            >
              Start Hiring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
