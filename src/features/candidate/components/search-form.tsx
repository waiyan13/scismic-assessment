import { useEffect, useMemo } from "react";

import { useQuery } from "@tanstack/react-query";
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

import { getCandidates } from "../api/getCandidates";

interface SelectItem {
  label: string;
  value: string | null;
}

interface SearchForm {
  search: string;
  city: string | null;
}

export interface SearchFilters {
  search: string;
  city: string | null;
}

interface SearchFormProps {
  onFilterChange: (filters: SearchFilters) => void;
}

function SearchForm({ onFilterChange }: SearchFormProps) {
  const { data, isPending } = useQuery({
    queryKey: ["candidates", "list"],
    queryFn: getCandidates,
    enabled: false,
    staleTime: Infinity,
  });

  // filter city list only when the data has changed
  const cities = useMemo(() => {
    if (!data) {
      return [];
    }

    const citySet = new Set(data.map((candidate) => candidate.address.city));

    return [
      { label: "Select a city", value: null },
      ...Array.from(citySet)
        .sort()
        .map((city) => ({ label: city, value: city })),
    ];
  }, [data]);

  const form = useForm<SearchForm>({
    defaultValues: {
      search: "",
      city: null,
    },
  });

  const { watch } = form;
  const searchValue = watch("search");
  const cityValue = watch("city");

  useEffect(() => {
    onFilterChange({
      search: searchValue,
      city: cityValue,
    });
  }, [cityValue, searchValue]);

  return (
    <Form {...form}>
      <form id="search-form" aria-busy={isPending}>
        <div className="flex flex-col space-x-4 md:flex-row">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full md:w-[300px]"
                    placeholder="Search by name, email or company"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="city"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    {...field}
                    items={cities}
                    value={field.value}
                    onValueChange={(val) => field.onChange(val)}
                  >
                    <SelectTrigger className="w-full border-none bg-gray-50 md:w-[150px]">
                      <SelectValue className="text-muted-foreground" />
                    </SelectTrigger>
                    <SelectContent className="border-none">
                      {cities.map((city) => (
                        <SelectItem
                          key={city.value ?? "default"}
                          value={city.value}
                        >
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

export { SearchForm };
