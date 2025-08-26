import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    account_no: z.string(),
    depositor_type_id: z.string(),
    from_date: z.string(),
    to_date: z.string(),
    interest_rate_date: z.string(),
    opening_balance: z.string(),
    remaining_balance: z.string(),
    deposit: z.string(),
    withdrawal: z.string(),
    interest_rate: z.string(),
    economic_sector_id: z.string(),
    economic_branch_id: z.string(),
    status: z.string(),


  });
