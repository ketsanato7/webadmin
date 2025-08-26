import { z } from "zod";
const patterns = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

const workExperienceSchema = z.discriminatedUnion("hasWorkExperience", [
  z.object({
    hasWorkExperience: z.literal(true),
    companyName: z.string().min(1),
  }),
  z.object({ hasWorkExperience: z.literal(false) }),
]);

const schema = z.object({
  _id: z.string().min(1, { message: "Required" }),
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
  employees_HQ: z.string(),
  employees_female_HQ: z.string(),
  tel: z.string(),
  fax: z.string(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => {
      return patterns.email.text(text);
    }),
  whatsapp: z.string(),
  website: z.string(),
  other_infos: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  status: z.string(),
});

type FormSchema = z.infer<typeof schema>;
const formDefaultValues: FormSchema = {
  _id: "",
  id: "",
  approved_date: "",
  name_LA: "",
  name_EN: "",
  village_id: "",
  address: "",
  house_unit: "",
  enterprise_id: "",
  house_no: "",
  license_no: "",
  branches: "",
  service_units: "",
  employees: "",
  employees_female: "",
  employees_HQ: "",
  employees_female_HQ: "",
  tel: "",
  fax: "",
  email: "",
  whatsapp: "",
  website: "",
  other_infos: "",
  latitude: "",
  longitude: "",
  status: "",
  hasWorkExperience: true,
};

export { schema, type FormSchema, formDefaultValues };
