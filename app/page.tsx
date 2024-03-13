"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CardList } from "@/components/card-list";

export default function Home() {
  return (
    <main className="flex flex-col gap-5">
      <section>
        <Input placeholder="Search for a country..." />
      </section>
      <section>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="africa">Africa</SelectItem>
              <SelectItem value="america">America</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="oceania">Oceania</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <CardList />
    </main>
  );
}
