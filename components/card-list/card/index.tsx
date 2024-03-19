import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatPopulation } from "@/helpers/number-format";
import Image from "next/image";
import Link from "next/link";
import { ICountry } from "@/models/country";

interface CardProps {
  country: ICountry;
}

export const CardCountry = ({ country }: CardProps) => {
  return (
    <Link href={`/${country.id}/name/${country.name}`} key={country.name}>
      <Card className="rounded-xl shadow-xl">
        <CardHeader className="p-0 rounded-xl flex items-center">
          <Image
            className="rounded-t-xl object-cover xl:w-[600px] xl:h-[190px] lg:w-[500px] md:h-[220px]"
            alt={`${country.name} Flag`}
            src={country.flags.svg}
            width={700}
            height={600}
            priority
            quality={10}
          />
        </CardHeader>
        <CardContent className="flex flex-col ">
          <div className="xl:h-[100px]  md:h-[90px] h-[90px]">
            <h1
              className={`${
                country.name.length > 40
                  ? "text-lg"
                  : country.name.length > 30
                  ? "text-xl"
                  : "text-2xl"
              } font-extrabold pt-5`}
            >
              {country.name}
            </h1>
          </div>
          <ul className="flex flex-col gap-2 lg:pt-0">
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
  );
};
