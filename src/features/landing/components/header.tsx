import { useNavigate } from "react-router";

import { Button } from "@/components/button";

import { Navigation } from "./navigation";

function LandingHeader() {
  const navigate = useNavigate();
  return (
    <div className="border-border border-b">
      <header className="sticky top-0 z-1 flex w-2/3 w-full p-4 lg:mx-auto lg:w-2/3">
        <img className="h-8" src="/logo.svg" />
        <Navigation />
        <Button className="text-primary-950" onClick={() => navigate("/candidates")}>Go to dashboard</Button>
      </header>
    </div>
  );
}

export { LandingHeader };
