"use client";

import { CardList } from "@/components/card-list";

import { useContext } from "react";

import { CountryContext } from "@/contexts/CountryContext";
import { FormSection } from "@/components/form-section";
import { PaginationSection } from "@/components/pagination-section";

export default function Home() {
  const { filteredCountries, values, currentItems } =
    useContext(CountryContext);

  return (
    <main className="flex flex-col gap-5 w-full">
      <FormSection />

      {filteredCountries.length === 0 && values ? (
        "No results"
      ) : (
        <CardList countriesList={currentItems} />
      )}
      <PaginationSection />
    </main>
  );
}
