import ky from "ky";

import type { Candidate } from "@/types/candidate";
import type { HTTPError } from "ky";

async function getCandidates(): Promise<Candidate[]> {
  try {
    const response = await ky
      .get<Candidate[]>("https://jsonplaceholder.typicode.com/users")
      .json();
    return response;
  } catch (error) {
    throw new Error((error as HTTPError).message, { cause: error });
  }
}

export { getCandidates };
