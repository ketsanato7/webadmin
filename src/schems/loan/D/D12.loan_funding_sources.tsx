import { z } from "zod";


   export const schema = z.object({
           id: z.string().min(1, { message: 'Required id' }),
           value_LA: z.string().min(1, { message: 'Required id' }),
           value_EN: z.string().min(1, { message: 'Required id' }),
           code_LA: z.string().min(1, { message: 'Required id' }),
           code_EN: z.string().min(1, { message: 'Required id' }),
  });

  export const schemaDelete = z.object({
           _id: z.string().min(1, { message: 'Required id' }),

  });


  
export type schema = z.infer<typeof schema>;

