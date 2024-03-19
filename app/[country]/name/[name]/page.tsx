"use client";
import { CountryPage } from "@/components/country-page";
import { SkeletonCountryPage } from "@/components/country-page/country-page-skeleton";
import { Button } from "@/components/ui/button";
import { useCountryInfo } from "@/hooks/use-country-info";
import { ArrowBigLeftDash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function CountryName() {
  const { country } = useCountryInfo();

  const router = useRouter();

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
