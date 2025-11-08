import { Navigation } from "./navigation";

function LandingHeader() {
  return (
    <div className="border-border border-b">
      <header className="sticky top-0 z-1 flex w-2/3 w-full p-4 lg:mx-auto lg:w-2/3">
        <img className="h-8" src="/logo.svg" />
        <Navigation />
      </header>
    </div>
  );
}

export { LandingHeader };
