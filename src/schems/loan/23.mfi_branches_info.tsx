import { z } from "zod";

 export const schema = z.object({
    _id: z.string(),
        id: z.string(),

    approved_date: z.string(),
    name_LA: z.string(),

        name_EN: z.string(),
                village_id: z.string(),
        address: z.string(),
        house_unit: z.string(),
        enterprise_id: z.string(),
        house_no: z.string(),
        license_no: z.string(),
        branches: z.string(),
        service_units: z.string(),
        employees: z.string(),
        employees_female: z.string(),
        tel: z.string(),
        fax: z.string(),
        email: z.string(),
        whatsapp: z.string(),
        website: z.string(),
        other_infos: z.string(),
        latitude: z.string(),
        longitude: z.string(),
        status: z.string(),

  });
