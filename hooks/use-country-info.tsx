import { ICountry } from "@/models/country";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export const useCountryInfo = () => {
  const [country, setCountry] = useState<ICountry>();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/${params.country}/?name=${params.name}`
        );
        if (!response.ok) {
          throw new Error("Erro ao obter os dados do país");
        }
        const data = await response.json();
        setCountry(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        console.error("Erro ao obter os dados do país:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { country, loading };
};
