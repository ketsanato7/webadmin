import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    from_date: z.string(),
    to_date: z.string(),
    use_of_loan: z.string(),
    approved_balance: z.string(),
    classification_id: z.string(),
    classification_date: z.string(),
    category_id: z.string(),
    restructured_date: z.string(),
    write_off_date: z.string(),
    borrower_type_id: z.string(),
    economic_sector_id: z.string(),
    economic_branch_id: z.string(),
    borrower_connection_id: z.string(),
    funding_source_id: z.string(),
    funding_org: z.string(),
    status: z.string(),


  });
