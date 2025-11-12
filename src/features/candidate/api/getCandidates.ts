import { CANDIDATE_API_URL } from "@/config";
import { httpClient } from "@/lib/http";

import type { Candidate } from "@/types/candidate";
import type { HTTPError } from "ky";

async function getCandidates(): Promise<Candidate[]> {
  console.log(CANDIDATE_API_URL);
  try {
    const response = await httpClient
      .get<Candidate[]>("users")
      .json();
    return response;
  } catch (error) {
    throw new Error((error as HTTPError).message, { cause: error });
  }
}

export { getCandidates };
