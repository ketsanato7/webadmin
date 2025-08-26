import { z } from "zod";

 export const schema = z.object({
    id: z.string() .min(1, { message: "Required married_couple_id" }),
    card_no: z.string() .min(1, { message: "Required married_couple_id" }),
    card_name: z.string() .min(1, { message: "Required married_couple_id" }),
date_of_issue: z.string() .min(1, { message: "Required married_couple_id" }),
exp_date: z.string() .min(1, { message: "Required married_couple_id" }),
owner_id: z.string() .min(1, { message: "Required " }),
status: z.string()
  });


export type schema = z.infer<typeof schema>;

