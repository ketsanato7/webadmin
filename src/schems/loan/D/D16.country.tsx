import { z } from "zod";

  const schema = z.object({
    _id: z.string(),
    id: z.string(),
    en_short: z.string(),
    en_formal: z.string(),
    country_id: z.string(),
    
status: z.string(),

  });

  export default schema;