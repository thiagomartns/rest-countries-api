import { useState, useEffect } from "react";

export interface CountryProps {
  name: string;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  borders: string[];
  languages: {
    name: string;
  }[];
}

export const useCountries = () => {
  const [countriesList, setCountriesList] = useState<CountryProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const promises = Array.from({ length: 249 }, (_, index) =>
          fetch(`http://localhost:3000/${index}`, {
            next: {
              revalidate: 3600,
            },
          }).then((response) => response.json())
        );
        const responses = await Promise.all(promises);
        setCountriesList(responses);
      } catch (err) {
        console.error("Error fetching countries:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countriesList, loading };
};
