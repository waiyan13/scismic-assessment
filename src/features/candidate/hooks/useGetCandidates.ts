import { useSuspenseQuery } from "@tanstack/react-query";
import { getCandidates } from "../api/getCandidates";

function useGetCandidates() {
  return useSuspenseQuery({
    queryKey: ["getCandidates"],
    queryFn: getCandidates,
  });
}

export { useGetCandidates };
