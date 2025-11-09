import { useMemo } from "react";

import { filterCandidates } from "@/lib/util";

import { CandidateCardsList } from "./candidate-cards-list";
import { useGetCandidates } from "../hooks/useGetCandidates";

function CandidatesListContainer() {
  const { data } = useGetCandidates();

  const candidatesByCity = useMemo(() => {
    return data ? filterCandidates(data, "address.city") : {};
  }, [data]);

  const candidatesByCompany = useMemo(() => {
    return data ? filterCandidates(data, "company.name") : {};
  }, [data]);

  return (
      <div className="flex flex-col space-y-4 p-8">
      <h1 className="font-bold text-2xl">Candidates</h1>
        <CandidateCardsList data={data} />
      </div>
  );
}

export { CandidatesListContainer };
