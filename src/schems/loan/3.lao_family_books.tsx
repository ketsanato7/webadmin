import { z } from "zod";

  const schema = z.object({
    _id: z.string(),
        id: z.string(),

    book_no: z.string(),
    book_name: z.string(),
    date_of_issue: z.string(),
owner_id: z.string(),
status: z.string(),
  });

  export default schema;