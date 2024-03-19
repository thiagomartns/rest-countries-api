import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoadingSpinner } from "../loading-spinner";
import { formatPopulation } from "@/helpers/number-format";
import Image from "next/image";
import Link from "next/link";
import { ICountry } from "@/models/country";
import { CardCountry } from "./card";

interface CardListProps {
  loading: boolean;
  countriesList: ICountry[];
}

export const CardList = ({ loading, countriesList }: CardListProps) => {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center">
          <LoadingSpinner />
        </div>
      )}
      <section className="grid grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {countriesList.map((country) => (
          <CardCountry key={country.id} country={country} />
        ))}
      </section>
    </>
  );
};
