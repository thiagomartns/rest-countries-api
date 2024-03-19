import React from "react";

import { LoadingSpinner } from "../loading-spinner";

import { ICountry } from "@/models/country";
import { CardCountry } from "./card";
import { useCountries } from "@/hooks/use-countries";

interface CardListProps {
  countriesList: ICountry[];
}

export const CardList = ({ countriesList }: CardListProps) => {
  const { loading } = useCountries();

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {countriesList.map((country) => (
            <CardCountry key={country.id} country={country} />
          ))}
        </section>
      )}
    </>
  );
};
