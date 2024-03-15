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
  id: number;
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

        // Adicionando o campo id baseado no índice
        const countriesWithId = responses.map((country, index) => ({
          ...country,
          id: index, // Adicionando 1 para evitar id 0
        }));

        setCountriesList(countriesWithId);
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
