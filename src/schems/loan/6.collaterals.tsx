import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    name: z.string(),
    collateral_no: z.string(),
    date_of_issue: z.string(),
value: z.string(),
other_details: z.string(),

category_id: z.string(),
status: z.string(),


  });
