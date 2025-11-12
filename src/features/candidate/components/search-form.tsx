import { useMemo } from "react";
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

function SearchForm() {
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

  const form = useForm();

  return (
    <Form {...form}>
      <form id="search-form" aria-busy={isPending}>
        <div className="flex flex-col space-x-4 md:flex-row">
          <FormField
            control={form.control}
            name="search-input"
            render={() => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-full md:w-[300px]"
                    placeholder="Search by name, email or company"
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
                  <Select items={cities}>
                    <SelectTrigger className="w-full border-none bg-gray-50 md:w-[150px]">
                      <SelectValue className="text-muted-foreground" />
                    </SelectTrigger>
                    <SelectContent className="border-none">
                      {cities.length > 0 &&
                        cities.map((city) => (
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
        </div>
      </form>
    </Form>
  );
}

export { SearchForm };
