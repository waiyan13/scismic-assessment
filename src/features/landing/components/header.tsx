import { useNavigate } from "react-router";

import { Button } from "@/components/button";

import { Navigation } from "./navigation";

function LandingHeader() {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/candidates");

  return (
    <div className="border-border border-b">
      <header className="sticky top-0 z-1 flex w-full justify-between p-4 xl:mx-auto xl:w-2/3">
        <img className="h-8" src="/logo.svg" />
        <Navigation />
        <Button className="text-primary-950" onClick={handleNavigate}>
          Go to dashboard
        </Button>
      </header>
    </div>
  );
}

export { LandingHeader };
