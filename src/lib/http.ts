import ky from "ky";

import { CANDIDATE_API_URL } from "@/config";

export const httpClient = ky.create({
  prefixUrl: CANDIDATE_API_URL,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});
