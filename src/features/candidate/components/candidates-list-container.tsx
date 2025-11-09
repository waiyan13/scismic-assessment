import { useMemo } from "react";

import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/form";
import { Input } from "@/components/input";
import { filterCandidates } from "@/lib/util";

import { useGetCandidates } from "../hooks/useGetCandidates";

import { CandidateCardsList } from "./candidate-cards-list";

interface SearchForm {
  search: string;
}

function CandidatesListContainer() {
  const { data } = useGetCandidates();

  const form = useForm<SearchForm>({
    defaultValues: {
      search: "",
    },
  });

  const { watch } = form;
  const searchTerm = watch("search");

  // index and memoize data
  const candidatesByCity = useMemo(() => {
    return data ? filterCandidates(data, "address.city") : {};
  }, [data]);

  const candidatesByName = useMemo(() => {
    return data ? filterCandidates(data, "name") : {};
  }, [data]);

  const candidatesByCompany = useMemo(() => {
    return data ? filterCandidates(data, "company.name") : {};
  }, [data]);

  const candidatesByEmail = useMemo(() => {
    return data ? filterCandidates(data, "email") : {};
  }, [data]);

  return (
    <div className="flex flex-col space-y-4 p-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>

        <Form {...form}>
          <form className="w-full md:w-1/5" id="search-candidate">
            <FormField
              name="search"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full"
                      placeholder="Search by name, email, company"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <CandidateCardsList data={data} />
    </div>
  );
}

export { CandidatesListContainer };
