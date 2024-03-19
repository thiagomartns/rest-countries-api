"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardList } from "@/components/card-list";
import { useCountries } from "@/hooks/use-countries";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useContext } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CountryContext } from "@/contexts/CountryContext";

export default function Home() {
  const { loading } = useCountries();

  const {
    form,
    filteredCountries,
    values,
    currentItems,
    currentPage,
    pageNumbers,
    paginate,
  } = useContext(CountryContext);

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
        <CardList countriesList={currentItems} loading={loading} />
      )}
      <section className="py-10">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className="hover:cursor-pointer"
                onClick={() => paginate(currentPage - 1)}
              />
            </PaginationItem>
            {pageNumbers.map((number: number) => (
              <PaginationItem key={number}>
                <PaginationLink
                  isActive={number === currentPage ?? false}
                  className="hover:cursor-pointer"
                  onClick={() => paginate(number)}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem className="hover:cursor-pointer">
              <PaginationNext onClick={() => paginate(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
