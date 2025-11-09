import { Input } from "@base-ui-components/react/input";

import { CandidateCardSkelteon } from "./candidate-card-skeleton";

interface CandidateSkeletonListProps {
  count: number;
}

function CandidateSkeletonList({ count }: CandidateSkeletonListProps) {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>
        <Input className="w-1/5" placeholder="Search by name, email, company" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, index) => (
          <CandidateCardSkelteon key={index} />
        ))}
      </div>
    </div>
  );
}

export { CandidateSkeletonList };
