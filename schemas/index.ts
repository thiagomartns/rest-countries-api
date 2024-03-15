import * as z from "zod";

export const CountryForm = z.object({
  countryInput: z.string(),
  region: z.string(),
});
