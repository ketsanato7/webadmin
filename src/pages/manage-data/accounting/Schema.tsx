import { z } from "zod";

 export const schema = z.object({
    _id: z.string().min(1, { message: 'Required' }),
    VillageCode: z.string().min(3, { message: 'Required' }),
    VillageName: z.string().min(1, { message: 'Village Name must be between 10 and 100 characters' }),
    DistrictID: z.string().min(1, { message: 'Required' }),
  });

