import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    service_unit_id: z.string(),
    status: z.string(),


  });
