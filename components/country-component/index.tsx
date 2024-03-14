import { CountryProps } from "@/hooks/use-countries";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowBigLeftDash } from "lucide-react";
import Image from "next/image";
import { formatPopulation } from "@/helpers/number-format";
import { Badge } from "../ui/badge";

export const CountryComponent = () => {
  const [country, setCountry] = useState<CountryProps>();

  const router = useRouter();

  const params = useParams();
  useEffect(() => {
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
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col gap-10">
      <div>
        <Button onClick={() => router.push("/")}>
          <ArrowBigLeftDash />
          Back
        </Button>
      </div>
      <div>
        <div>
          <Image
            className="rounded-lg"
            alt={`${country?.name} Flag`}
            src={country?.flags.svg || "/default-flag.svg"}
            width={500}
            height={500}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="py-5">
          <h1 className="text-2xl font-extrabold py-5">{country?.name}</h1>
          <ul className="flex flex-col gap-5">
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
                {country?.currencies.map(
                  (currency) =>
                    `${currency.name} - ${currency.symbol} - ${currency.code}`
                )}
              </li>
              <li className="text-lg">
                <b>Languages: </b>
                {country?.languages.map((language) => language.name).join(", ")}
              </li>
            </div>
          </ul>
          <div>
            <h1 className="text-xl font-bold py-5">Border Countries:</h1>
            <div className="flex gap-2 flex-wrap">
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
