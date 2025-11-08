import type { Address } from "./address";
import type { Company } from "./company";

export interface Candidate {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
