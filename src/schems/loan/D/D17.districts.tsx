import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
    id: z.string(),
    value: z.string(),
    province_id: z.string(),
status: z.string(),

  });
