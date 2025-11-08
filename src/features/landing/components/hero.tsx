import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/button";

import { AnimatedText } from "./animated-text";

const words = ["Engineers", "Scientists", "Skills", "Team"];

function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative border-border border-b bg-[url(/hero.jpg)] bg-center bg-cover bg-primary bg-no-repeat py-16 md:py-32">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl">
          <h1 className="mb-6 text-balance font-bold text-7xl text-secondary tracking-tight md:text-4xl lg:text-8xl">
            Hire the right
          </h1>

          <AnimatedText word={words[currentWord]} />

          <p className="mb-6 text-balance font-bold text-7xl text-secondary tracking-tight md:text-4xl lg:text-8xl">
            for your team
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground sm:w-auto"
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
