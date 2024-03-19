import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useContext } from "react";
import { CountryContext } from "@/contexts/CountryContext";

export const FormSection = () => {
  const { form } = useContext(CountryContext);

  const options = [
    { value: "all", label: "All Continents" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "europe", label: "Europe" },
    { value: "asia", label: "Asia" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <FormField
          control={form.control}
          name="countryInput"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search for a country..."
                  className="lg:w-[280px]"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="md:w-[180px]">
                    <SelectValue placeholder="Filter by region" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map(({ value, label }) => (
                    <SelectItem value={value} key={label}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
