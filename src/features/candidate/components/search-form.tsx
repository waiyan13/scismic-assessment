import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem } from "@/components/form";
import { Input } from "@/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select";

interface SelectItem {
  label: string;
  value: string | null;
}

interface SearchFormProps {
  data: SelectItem[];
}

function SearchForm({ data }: SearchFormProps) {
  const form = useForm();

  const handleSubmit = () => {};

  return (
    <Form {...form}>
      <form id="search-form" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="search-input"
            render={() => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-[300px]"
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
                  <Select items={data}>
                    <SelectTrigger className="w-[150px] border-none bg-gray-50">
                      <SelectValue className="text-muted-foreground" />
                    </SelectTrigger>
                    <SelectContent className="border-none">
                      {data.length != 0 && data.map((city) => (
                        <SelectItem key={city.value} value={city.value}>{city.label}</SelectItem>
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
