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
  const form = useForm<SearchForm>({ defaultValues: { search: "", city: "" } });

  const { watch } = form;
  const searchTerm = watch("search");
  const deferredSearchTerm = useDebounce(searchTerm.toLowerCase(), 300);
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [filterResult, setFilterResult] = useState<Candidate[]>([]);

  // Memoize raw data
  const candidates = useMemo(() => data ?? [], [data]);

  const cities = useMemo(() => {
    if (!data) return [];
    const citySet = new Set(data.map((c) => c.address.city).filter(Boolean));
    return Array.from(citySet)
      .sort()
      .map((city) => ({ label: city, value: city }));
  }, [data]);

  useEffect(() => {
    if (!candidates.length) return;

    const search = deferredSearchTerm.trim();
    const city = selectedCity.trim();

    const result = candidates.filter((c) => {
      const matchesCity = city ? c.address?.city === city : true;

      if (!search) return matchesCity;

      const name = c.name?.toLowerCase() ?? "";
      const email = c.email?.toLowerCase() ?? "";
      const company = c.company?.name?.toLowerCase() ?? "";
      const cityName = c.address?.city?.toLowerCase() ?? "";

      const matchesSearch =
        name.includes(search) ||
        email.includes(search) ||
        company.includes(search) ||
        cityName.includes(search);

      return matchesCity && matchesSearch;
    });

    setFilterResult(result);
  }, [deferredSearchTerm, candidates, selectedCity]);

  return (
    <div className="flex h-screen flex-col space-y-4 bg-linear-to-b from-bg-background to-primary-100 p-8">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-2xl">Candidates</h1>

        <Form {...form}>
          <form
            className="flex w-full space-x-4 md:w-[450px]"
            id="search-candidate"
          >
            <FormField
              name="search"
              control={form.control}
              render={({ field }) => (
                <FormItem className="grow">
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

            <FormField
              name="city"
              control={form.control}
              render={() => (
                <FormItem>
                  <FormControl>
                    <Select
                      items={cities}
                      onValueChange={(value) =>
                        setSelectedCity(value as string)
                      }
                    >
                      <SelectTrigger className="w-full border border-primary bg-primary-foreground">
                        <SelectValue>Select a city</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((city) => (
                          <SelectItem key={city.value} value={city.value}>
                            {city.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
