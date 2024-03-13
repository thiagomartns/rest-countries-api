"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Africa</SelectItem>
              <SelectItem value="banana">America</SelectItem>
              <SelectItem value="blueberry">Asia</SelectItem>
              <SelectItem value="grapes">Europe</SelectItem>
              <SelectItem value="pineapple">Oceania</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </section>
      <CardList />
    </main>
  );
}
