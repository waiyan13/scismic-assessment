import { useSuspenseQuery } from "@tanstack/react-query";
import { getCandidates } from "../api/getCandidates";

function useGetCandidates() {
  return useSuspenseQuery({
    queryKey: ["candidates", "list"],
    queryFn: getCandidates,
  });
}

export { useGetCandidates };
