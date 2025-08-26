import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    contact_info: z.string(),
    education_level_id: z.string(),
    date_of_employment: z.string(),
    field_of_study: z.string(),
    status: z.string(),
  });
