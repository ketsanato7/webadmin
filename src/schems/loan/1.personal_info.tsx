import { z } from "zod";


export const schema = z.object({
  id: z.string().min(1, { message: "Required id" }),
  firstname_LA: z.string().min(1, { message: "Required firstname_LA" }),
  lastname_LA: z.string().min(1, { message: "Required lastname_LA" }),
  firstname_EN: z.string().min(1, { message: "Required firstname_EN" }),
  lastname_EN: z.string().min(1, { message: "Required lastname_EN" }),
  dateofbirth: z.string().min(1, { message: "Required dateofbirth" }),
  age: z.string().min(1, { message: "Required age" }),
  gender_id: z.string().min(1, { message: "Required gender_id" }),
  nationality_id: z.string().min(1, { message: "Required nationality_id" }),
  marital_status_id: z
    .string()
    .min(1, { message: "Required marital_status_id" }),
  career_id: z.string().min(1, { message: "Required career_id" }),
  province_id: z.string().min(1, { message: "Required province_id" }),
  district_id: z.string().min(1, { message: "Required district_id" }),
  village_id: z.string().min(1, { message: "Required village_id" }),
  home_address: z.string().min(1, { message: "Required home_address" }),
  contact_info: z.string().min(1, { message: "Required contact_info" }),
  document_type_id: z.string().min(1, { message: "Required document_type_id" }),
  document_id: z.string().min(1, { message: "Required document_id" }),
  document_no: z.string().min(1, { message: "Required document_no" }),
  document_name: z.string().min(1, { message: "Required document_name" }),
  exp_date: z.string().min(1, { message: "Required exp_date" }),
  issued_by: z.string().min(1, { message: "Required issued_by" }),
  work_place: z.string().min(1, { message: "Required id" }),
  work_place_tel: z.string().min(1, { message: "Required id" }),
  status: z.string().min(1, { message: "Required id" }),
  married_couple_id: z
    .string()
    .min(1, { message: "Required married_couple_id" }),
  married_couple_firstname_LA: z
    .string()
    .min(1, { message: "Required married_couple_firstname_LA" }),
  married_couple_lastname_LA: z
    .string()
    .min(1, { message: "Required married_couple_lastname_LA" }),
  married_couple_dateofbirth: z
    .string()
    .min(1, { message: "Required married_couple_dateofbirth" }),
  married_couple_career_id: z
    .string()
    .min(1, { message: "Required married_couple_career_id" }),
  married_couple_work_place: z
    .string()
    .min(1, { message: "Required married_couple_work_place_tel" }),
  married_couple_work_place_tel: z
    .string()
    .min(1, { message: "Required married_couple_work_place" }),
});



export const schema1 = z.object({
  id: z.string().min(1, { message: "Required id" }),
  firstname_LA: z.string().min(1, { message: "Required firstname_LA" }),
  lastname_LA: z.string().min(1, { message: "Required lastname_LA" }),
  firstname_EN: z.string().min(1, { message: "Required firstname_EN" }),
  lastname_EN: z.string().min(1, { message: "Required lastname_EN" }),
  dateofbirth: z.string().min(1, { message: "Required dateofbirth" }),
  age: z.string().min(1, { message: "Required age" }),
  gender_id: z.string().min(1, { message: "Required gender_id" }),
  nationality_id: z.string().min(1, { message: "Required nationality_id" }),
  marital_status_id: z
    .string()
    .min(1, { message: "Required marital_status_id" }),
  career_id: z.string().min(1, { message: "Required career_id" }),
  province_id: z.string().min(1, { message: "Required province_id" }),
  district_id: z.string().min(1, { message: "Required district_id" }),
  village_id: z.string().min(1, { message: "Required village_id" }),
  home_address: z.string().min(1, { message: "Required home_address" }),
  contact_info: z.string().min(1, { message: "Required contact_info" }),
  document_type_id: z.string().min(1, { message: "Required document_type_id" }),
  document_id: z.string().min(1, { message: "Required document_id" }),
  document_no: z.string().min(1, { message: "Required document_no" }),
  document_name: z.string().min(1, { message: "Required document_name" }),
  date_of_issue: z.string().min(1, { message: "Required date_of_issue" }),
  exp_date: z.string().min(1, { message: "Required exp_date" }),
  issued_by: z.string().min(1, { message: "Required issued_by" }),
  work_place: z.string().min(1, { message: "Required id" }),
  work_place_tel: z.string().min(1, { message: "Required id" }),
  status: z.string().min(1, { message: "Required id" }),
  married_couple_id: z
    .string()
    .min(1, { message: "Required married_couple_id" }),
  married_couple_firstname_LA: z
    .string()
    .min(1, { message: "Required married_couple_firstname_LA" }),
  married_couple_lastname_LA: z
    .string()
    .min(1, { message: "Required married_couple_lastname_LA" }),
  married_couple_dateofbirth: z
    .string()
    .min(1, { message: "Required married_couple_dateofbirth" }),
  married_couple_career_id: z
    .string()
    .min(1, { message: "Required married_couple_career_id" }),
  married_couple_work_place: z
    .string()
    .min(1, { message: "Required married_couple_work_place_tel" }),
  married_couple_work_place_tel: z
    .string()
    .min(1, { message: "Required married_couple_work_place" }),
});
export const schemaDelete = z.object({
  id: z.string().min(1, { message: "Required id" }),
});

export type schema = z.infer<typeof schema>;
