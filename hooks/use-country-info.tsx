import { ICountry } from "@/models/country";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export const useCountryInfo = () => {
  const [country, setCountry] = useState<ICountry>();

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/${params.country}/?name=${params.name}`
        );
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

  return { country };
};
