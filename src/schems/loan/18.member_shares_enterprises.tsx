import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    member_shares_id: z.string(),
    enterprise_id: z.string(),
    status: z.string(),

  });
