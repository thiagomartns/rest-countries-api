"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CardList } from "@/components/card-list";
import { useCountries } from "@/hooks/use-countries";
import { useForm } from "react-hook-form";
import { CountryForm } from "@/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useEffect, useState } from "react";

export default function Home() {
  const { countriesList, loading } = useCountries();

  const [filteredCountries, setFilteredCountries] = useState(countriesList);

  const form = useForm<z.infer<typeof CountryForm>>({
    resolver: zodResolver(CountryForm),
    defaultValues: {
      countryInput: "",
      region: "",
    },
  });

  const values = form.watch("countryInput");
  const region = form.watch("region");

  useEffect(() => {
    const filterCountries = () => {
      const filtered = countriesList.filter((country) => {
        const matchesName = country.name
          .toLowerCase()
          .includes(values.toLowerCase());
        const matchesRegion =
          !region ||
          region === "all" ||
          country.region.toLowerCase() === region.toLowerCase();
        return matchesName && matchesRegion;
      });
      setFilteredCountries(filtered);
    };

    filterCountries();
  }, [values || region || countriesList]);

  return (
    <main className="flex flex-col gap-5 w-full">
      <section>
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
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
      </section>

      {filteredCountries.length === 0 && values ? (
        "No results"
      ) : (
        <CardList countriesList={filteredCountries} loading={loading} />
      )}
    </main>
  );
}
