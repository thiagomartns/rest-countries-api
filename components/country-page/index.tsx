import { Badge } from "@/components/ui/badge";
import { formatPopulation } from "@/helpers/number-format";
import { useCountryInfo } from "@/hooks/use-country-info";
import Image from "next/image";

export const CountryPage = () => {
  const { country } = useCountryInfo();

  return (
    <div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:gap-20">
      <div>
        <Image
          className="rounded-lg align-middle"
          alt={`${country?.name} Flag`}
          src={country?.flags.svg || "/default-flag.svg"}
          width={500}
          height={350}
          priority
        />
      </div>
      <div className="py-5 md:flex md:flex-col md:w-full">
        <h1 className="text-2xl font-extrabold py-5 lg:text-4xl">
          {country?.name}
        </h1>
        <ul className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:mt-5">
          <div className="lg:flex lg:flex-col lg:gap-2">
            <li className="text-lg">
              <b>Native Name: </b>
              {country?.nativeName}
            </li>
            <li className="text-lg">
              <b>Population:</b>{" "}
              {country?.population ? formatPopulation(country.population) : ""}
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
          <div className="lg:flex lg:flex-col lg:gap-2">
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
            {!country?.borders ? (
              <p>This country has no borders with neighboring countries.</p>
            ) : (
              country?.borders?.map((neighbor) => (
                <Badge key={neighbor}>{neighbor}</Badge>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
