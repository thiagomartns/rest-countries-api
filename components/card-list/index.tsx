import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoadingSpinner } from "../loading-spinner";
import { formatPopulation } from "@/helpers/number-format";
import { useCountries } from "@/hooks/use-countries";
import Image from "next/image";
import Link from "next/link";

export const CardList = () => {
  const { countriesList, loading } = useCountries();

  return (
    <section className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-3">
      {loading && (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      )}
      {countriesList.map((country, index) => (
        <Link href={`/countries/${index}`} key={country.name}>
          <Card className="rounded-xl shadow-xl">
            <CardHeader className="p-0 rounded-xl">
              <Image
                className="rounded-t-xl w-full"
                alt={`${country.name} Flag`}
                src={country.flags.svg}
                width={600}
                height={2}
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
  );
};
