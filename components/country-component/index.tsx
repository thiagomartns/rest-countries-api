import { CountryProps } from "@/hooks/use-countries";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
import { formatPopulation } from "@/helpers/number-format";
import { Badge } from "../ui/badge";
import { LoadingSpinner } from "../loading-spinner";

export const CountryComponent = () => {
  const [country, setCountry] = useState<CountryProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/${params.country}`);
        if (!response.ok) {
          throw new Error("Erro ao obter os dados do país");
        }
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error("Erro ao obter os dados do país:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-10 w-full">
      <div>
        <Button onClick={() => router.push("/")}>
          <ArrowBigLeftDash />
          Back
        </Button>
      </div>
      {loading && <LoadingSpinner />}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:items-center lg:justify-between lg:mt-16">
        <div>
          <Image
            className="rounded-lg"
            alt={`${country?.name} Flag`}
            src={country?.flags.svg || "/default-flag.svg"}
            width={650}
            height={500}
            priority
          />
        </div>
        <div className="py-5 lg:flex lg:flex-col lg:w-full">
          <h1 className="text-2xl font-extrabold py-5">{country?.name}</h1>
          <ul className="flex flex-col gap-5 lg:flex-row lg:gap-10 lg:items-center">
            <div>
              <li className="text-lg">
                <b>Native Name: </b>
                {country?.nativeName}
              </li>
              <li className="text-lg">
                <b>Population:</b>{" "}
                {country?.population
                  ? formatPopulation(country.population)
                  : ""}
              </li>
              <li className="text-lg">
                <b>Region:</b> {country?.region}
              </li>
              <li className="text-lg">
                <b>Sub Region:</b> {country?.subregion}
              </li>
              <li className="text-lg">
                <b>Capital: </b>
                {country?.capital}
              </li>
            </div>
            <div>
              <li className="text-lg">
                <b>Top Level Domain: </b>
                {country?.topLevelDomain.map((level) => level)}
              </li>
              <li className="text-lg">
                <b>Currencies: </b>
                {country?.currencies
                  .map((currency) => `${currency.name}`)
                  .join(", ")}
              </li>
              <li className="text-lg">
                <b>Languages: </b>
                {country?.languages.map((language) => language.name).join(", ")}
              </li>
            </div>
          </ul>
          <div className="lg:gap-5 lg:mt-5">
            <h1 className="text-xl font-bold py-5">Border Countries:</h1>
            <div className="flex gap-2 flex-wrap ">
              {country?.borders?.map((neighbor) => (
                <Badge key={neighbor}>{neighbor}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
