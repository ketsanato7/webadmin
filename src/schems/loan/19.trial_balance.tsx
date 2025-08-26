import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    account_no: z.string(),
    account_title: z.string(),
    trial_balance_debit: z.string(),
    trial_balance_credit: z.string(),
    adjustment_debit: z.string(),
    adjustment_credit: z.string(),
    adjusted_trial_balance_debit: z.string(),
    adjusted_trial_balance_credit: z.string(),
    status: z.string(),

  });
