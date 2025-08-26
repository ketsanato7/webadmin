import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    passport_no: z.string(),
    passport_name: z.string(),
    exp_date: z.string(),
owner_id: z.string(),
status: z.string(),

  });
