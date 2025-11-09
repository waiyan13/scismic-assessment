import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/form";
import { Input } from "@/components/input";
import { useGetCandidates } from "../hooks/useGetCandidates";
import { CandidateCardsList } from "./candidate-cards-list";

import type { Candidate } from "@/types/candidate";

interface SearchForm {
  search: string;
}

function CandidatesListContainer() {
  const { data } = useGetCandidates();
  const form = useForm<SearchForm>({ defaultValues: { search: "" } });

  const { watch } = form;
  const searchTerm = watch("search");
  const deferredSearchTerm = useDebounce(searchTerm.toLowerCase(), 300);

  const [filterResult, setFilterResult] = useState<Candidate[]>([]);

  // Memoize raw data
  const candidates = useMemo(() => data ?? [], [data]);

  useEffect(() => {
    if (!deferredSearchTerm) {
      setFilterResult(candidates);
      return;
    }

    const result = candidates.filter((c) => {
      const name = c.name?.toLowerCase() ?? "";
      const email = c.email?.toLowerCase() ?? "";
      const company = c.company?.name?.toLowerCase() ?? "";
      const city = c.address?.city?.toLowerCase() ?? "";

      return (
        name.includes(deferredSearchTerm) ||
        email.includes(deferredSearchTerm) ||
        company.includes(deferredSearchTerm) ||
        city.includes(deferredSearchTerm)
      );
    });

    setFilterResult(result);
  }, [deferredSearchTerm, candidates]);

  return (
    <div className="flex h-screen flex-col space-y-4 bg-linear-to-b from-bg-background to-primary-100 p-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>

        <Form {...form}>
          <form className="w-full md:w-[300px]" id="search-candidate">
            <FormField
              name="search"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full border border-primary"
                      placeholder="Search by name, email, company, or city"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <CandidateCardsList data={filterResult} />
    </div>
  );
}

export { CandidatesListContainer };
