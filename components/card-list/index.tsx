import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoadingSpinner } from "../loading-spinner";
import { formatPopulation } from "@/helpers/number-format";
import { CountryProps } from "@/hooks/use-countries";
import Image from "next/image";
import Link from "next/link";

interface CardListProps {
  loading: boolean;
  countriesList: CountryProps[];
}

export const CardList = ({ loading, countriesList }: CardListProps) => {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
      <section className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {countriesList.map((country) => (
          <Link
            href={`/countries/${country.id}/name/${country.name}`}
            key={country.name}
          >
            <Card className="rounded-xl shadow-xl">
              <CardHeader className="p-0 rounded-xl flex items-center">
                <Image
                  className="rounded-t-xl object-cover xl:w-[600px] xl:h-[200px]"
                  alt={`${country.name} Flag`}
                  src={country.flags.svg}
                  width={700}
                  height={600}
                  priority
                />
              </CardHeader>
              <CardContent className="flex flex-col">
                <h1 className="text-2xl font-extrabold py-5">{country.name}</h1>
                <ul className="flex flex-col gap-2">
                  <li className="text-lg">
                    <b>Population:</b> {formatPopulation(country.population)}
                  </li>
                  <li className="text-lg">
                    <b>Region:</b> {country.region}
                  </li>
                  <li className="text-lg">
                    <b>Capital: </b>
                    {country.capital}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </>
  );
};
