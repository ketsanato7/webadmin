import { z } from "zod";

export const Schema = z.object({
  DistrictCode: z.string().min(1, { message: 'Required' }),
  DistrictName: z.string(),
  ProviceID: z.string(),
}); 
export type SchemaForm = z.infer<typeof Schema>;

export const SchemaFormdefaultValues: SchemaForm = {
  _id: "",
  ProviceCode: "",
  ProviceName: "",
  ProviceID: ""
};


