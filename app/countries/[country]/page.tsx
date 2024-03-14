"use client";

import { CountryProps } from "@/hooks/use-countries";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState<CountryProps>();

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

  return <h1>helloasdasd country: {country?.name}</h1>;
}
