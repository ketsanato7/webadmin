import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    mfi_id: z.string(),
    report_date: z.string(),
    account_closing_date: z.string(),
    phone: z.string(),
    email: z.string(),
    whatsapp: z.string(),
    status: z.string(),


  });
