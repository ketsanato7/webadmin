import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    owner_id: z.string(),
    collateral_id: z.string(),
    status: z.string(),


  });
