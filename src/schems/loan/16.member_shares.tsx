import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    member_type_id: z.string(),
    from_date: z.string(),
    to_date: z.string(),
    initial_contribution: z.string(),
    contribution: z.string(),
    withdrawal: z.string(),
    remaining_balance: z.string(),
    status: z.string(),

  });
