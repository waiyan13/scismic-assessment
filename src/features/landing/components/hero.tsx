import { ArrowRight } from "lucide-react";

import { Button } from "@/components/button";

function HeroSection() {
  return (
    <section className="relative border-border border-b bg-[url(/hero.jpg)] bg-center bg-cover bg-primary bg-no-repeat py-16 md:py-32">
      <div className="container mx-auto px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance font-bold text-6xl text-secondary tracking-tight md:text-4xl lg:text-7xl">
            Hire the right
          </h1>
          <p className="mb-6 text-balance font-bold text-6xl text-secondary tracking-tight md:text-4xl lg:text-7xl">
            for your team
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full bg-primary text-primary-foreground sm:w-auto">
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
