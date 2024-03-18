import { ICountry } from "@/models/country";
import { useState, useEffect } from "react";

export const useCountries = () => {
  const [countriesList, setCountriesList] = useState<ICountry[]>([]);
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

        const countriesWithId = responses.map((country, index) => ({
          ...country,
          id: index,
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
