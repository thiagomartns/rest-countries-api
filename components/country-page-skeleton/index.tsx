"use client";

import React from "react";
import { Skeleton } from "../ui/skeleton";

export const SkeletonCountryPage = () => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-20 lg:items-center lg:justify-between lg:mt-6">
      <div>
        <Skeleton className="rounded-lg w-[650px] h-[500px]" />
      </div>
      <div className="py-5 lg:flex lg:flex-col lg:w-full">
        <Skeleton className="h-8 w-full" />

        <ul className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:mt-5">
          <div className="lg:flex lg:flex-col lg:gap-2">
            <li className="text-lg">
              <b>Native Name: </b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Population:</b> <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Region:</b> <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Sub Region:</b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Capital: </b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
          </div>
          <div className="lg:flex lg:flex-col lg:gap-2">
            <li className="text-lg">
              <b>Top Level Domain: </b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Currencies: </b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
            <li className="text-lg">
              <b>Languages: </b>
              <Skeleton className="h-4 w-[100px]" />
            </li>
          </div>
        </ul>
        <div className="lg:gap-5 lg:mt-5">
          <h1 className="text-xl font-bold py-5">Border Countries:</h1>
          <div className="flex gap-2 flex-wrap ">
            <Skeleton className="h-4 w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
