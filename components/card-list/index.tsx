import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const CardList = () => {
  return (
    <section className="flex flex-col gap-10 mt-5">
      <Card className="rounded-xl shadow-xl">
        <CardHeader className="p-0 rounded-xl">
          <img
            className="rounded-t-xl"
            alt="US Flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
          />
        </CardHeader>
        <CardContent className="flex flex-col">
          <h1 className="text-2xl font-extrabold py-5">
            United States of America
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="text-lg">
              <b>Population:</b> 323,947,000
            </li>
            <li className="text-lg">
              <b>Region:</b> Americas
            </li>
            <li className="text-lg">
              <b>Capital: </b>Washington DC
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};
