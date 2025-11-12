import { Suspense } from "react";

import { CandidateCardsList } from "@/features/candidate/components/candidate-cards-list";
import { CandidateSkeletonList } from "@/features/candidate/components/candidate-skeleton-list";
import { SearchForm } from "@/features/candidate/components/search-form";

function CandidatesPage() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>
        <SearchForm />
      </div>
      <Suspense fallback={<CandidateSkeletonList count={4} />}>
        <CandidateCardsList />
      </Suspense>
    </div>
  );
}

export default CandidatesPage;
