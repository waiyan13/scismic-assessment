import { setupServer } from "msw/node";

import { handler as candidateHandler } from "./candidate-handler";

export const server = setupServer(...candidateHandler);
