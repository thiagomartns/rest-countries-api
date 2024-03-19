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
                  <SelectItem value="all">All Continents</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
