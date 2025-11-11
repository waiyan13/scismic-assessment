import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/form";
import { Input } from "@/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { useGetCandidates } from "../hooks/useGetCandidates";
import { CandidateCardsList } from "./candidate-cards-list";

import type { Candidate } from "@/types/candidate";

interface SearchForm {
  search: string;
  city: string;
}

function CandidatesListContainer() {
  const { data } = useGetCandidates();
  return <CandidateCardsList data={data} />;
}

export { CandidatesListContainer };
