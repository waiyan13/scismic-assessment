import { useMemo } from "react";

import { filterCandidates } from "@/lib/util";

import { useGetCandidates } from "../hooks/useGetCandidates";

import { CandidateCardsList } from "./candidate-cards-list";

function CandidatesListContainer() {
  const { data } = useGetCandidates();

  // index and memoize data
  const candidatesByCity = useMemo(() => {
    return data ? filterCandidates(data, "address.city") : {};
  }, [data]);

  const candidatesByName = useMemo(() => {
    return data ? filterCandidates(data, "name") : {};
  }, [data]);

  const candidatesByCompany = useMemo(() => {
    return data ? filterCandidates(data, "company.name") : {};
  }, [data]);

  const candidatesByEmail = useMemo(() => {
    return data ? filterCandidates(data, "email") : {};
  }, [data]);

  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>
      </div>
      <CandidateCardsList data={data} />
    </div>
  );
}

export { CandidatesListContainer };
