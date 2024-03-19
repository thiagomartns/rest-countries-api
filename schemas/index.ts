import * as z from "zod";

export const CountrySchema = z.object({
  countryInput: z.string(),
  region: z.string(),
});
