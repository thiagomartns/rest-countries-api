"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCountries } from "@/hooks/use-countries";
import { useForm } from "react-hook-form";
import { CountrySchema } from "@/schemas";
import { ReactNode, createContext, useEffect, useState } from "react";
import { ICountry } from "@/models/country";

export interface FormValues {
  countryInput: string;
  region: string;
}

interface CountryContextType {
  form: ReturnType<typeof useForm<FormValues>>;
  filteredCountries: ICountry[];
  values: string;
  currentItems: ICountry[];
  paginate: (number: number) => void;
  currentPage: number;
  pageNumbers: number[];
}

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext({} as CountryContextType);

export function CountryProvider({ children }: CountryProviderProps) {
  const { countriesList } = useCountries();

  const [filteredCountries, setFilteredCountries] = useState(countriesList);

  const form = useForm<z.infer<typeof CountrySchema>>({
    resolver: zodResolver(CountrySchema),
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
      setCurrentPage(1);
    };

    filterCountries();
  }, [values || region || countriesList]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 28;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCountries.length / itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <CountryContext.Provider
      value={{
        form,
        filteredCountries,
        values,
        currentItems,
        paginate,
        currentPage,
        pageNumbers,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
