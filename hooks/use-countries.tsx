import { useState, useEffect } from "react";
import api from "@/api/countries";

export interface CountryProps {
  name: string;
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital: string;
}

export const useCountries = () => {
  const [countriesList, setCountriesList] = useState<CountryProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const promises = Array.from({ length: 249 }, (_, index) =>
          api.get(`/${index}`)
        );
        const responses = await Promise.all(promises);
        const countriesData = responses.map((response) => response.data);
        setCountriesList(countriesData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching countries:", err);

        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countriesList, loading };
};
