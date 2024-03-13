"use client";

import { useParams } from "next/navigation";

export default function Country() {
  const params = useParams();

  return <h1>helloasdasd country: {params.country}</h1>;
}
