"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
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
    },
  });

  const values = form.watch("countryInput");

  useEffect(() => {
    const filtered = countriesList.filter((country) =>
      country.name.toLowerCase().includes(values.toLowerCase())
    );
    setFilteredCountries(filtered);
    console.log(filteredCountries);
  }, [values || countriesList]);

  return (
    <main className="flex flex-col gap-5 w-full">
      <section>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="countryInput"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Insert your country here..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </section>
      <section>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="america">America</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <CardList countriesList={filteredCountries} loading={loading} />
    </main>
  );
}
