"use client";
import { CountryPage } from "@/components/country-page";
import { SkeletonCountryPage } from "@/components/country-page-skeleton";
import { Button } from "@/components/ui/button";
import { ICountry } from "@/models/country";
import { ArrowBigLeftDash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function CountryName() {
  const [country, setCountry] = useState<ICountry>();
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
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
      {!country ? <SkeletonCountryPage /> : <CountryPage country={country} />}
    </section>
  );
}
