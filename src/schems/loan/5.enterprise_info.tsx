import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    name_LA: z.string(),
    name_EN: z.string(),
    register_no: z.string(),
date_of_issue: z.string(),
registrant: z.string(),
enterprise_size_id: z.string(),
village_id: z.string(),
status: z.string(),


  });
