import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    employee_id: z.string(),
    position_id: z.string(),

        status: z.string(),
  });
