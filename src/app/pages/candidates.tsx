import { Suspense } from "react";

import { CandidatesListContainer } from "@/features/candidate/components/candidates-list-container";
import { CandidateSkeletonList } from "@/features/candidate/components/candidate-skeleton-list";

function CandidatesPage() {
  return (
    <Suspense fallback={<CandidateSkeletonList count={4} />}>
      <CandidatesListContainer />
    </Suspense>
  );
}

export default CandidatesPage;
