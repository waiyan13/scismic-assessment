import { Suspense } from "react";

import { CandidatesList } from "@/features/candidate/components/candidates-list";
import { CandidateSkeletonList } from "@/features/candidate/components/candidate-skeleton-list";

function CandidatesPage() {
  return (
    <div className="flex flex-col space-y-4 p-8">
      <h1 className="font-bold text-2xl">Candidates</h1>

      <Suspense fallback={<CandidateSkeletonList count={4} />}>
        <CandidatesList />
      </Suspense>
    </div>
  );
}

export default CandidatesPage;
