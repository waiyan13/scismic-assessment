import { httpClient } from "@/lib/http";

import type { Candidate } from "@/types/candidate";
import type { HTTPError } from "ky";

const sleep = async () => new Promise((resolve) => setTimeout(resolve, 2000));

async function getCandidates(): Promise<Candidate[]> {
  try {
    const response = await httpClient.get<Candidate[]>("users").json();
    await sleep();
    return response;
  } catch (error) {
    throw new Error((error as HTTPError).message, { cause: error });
  }
}

export { getCandidates };
