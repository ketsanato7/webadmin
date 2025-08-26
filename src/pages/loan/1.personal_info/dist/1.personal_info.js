"use strict";
exports.__esModule = true;
exports.schemaDelete = exports.schema1 = exports.schema = void 0;
var zod_1 = require("zod");
exports.schema = zod_1.z.object({
    id: zod_1.z.string().min(1, { message: "Required id" }),
    firstname_LA: zod_1.z.string().min(1, { message: "Required firstname_LA" }),
    lastname_LA: zod_1.z.string().min(1, { message: "Required lastname_LA" }),
    firstname_EN: zod_1.z.string().min(1, { message: "Required firstname_EN" }),
    lastname_EN: zod_1.z.string().min(1, { message: "Required lastname_EN" }),
    dateofbirth: zod_1.z.string().min(1, { message: "Required dateofbirth" }),
    age: zod_1.z.string().min(1, { message: "Required age" }),
    gender_id: zod_1.z.string().min(1, { message: "Required gender_id" }),
    nationality_id: zod_1.z.string().min(1, { message: "Required nationality_id" }),
    marital_status_id: zod_1.z
        .string()
        .min(1, { message: "Required marital_status_id" }),
    career_id: zod_1.z.string().min(1, { message: "Required career_id" }),
    province_id: zod_1.z.string().min(1, { message: "Required province_id" }),
    district_id: zod_1.z.string().min(1, { message: "Required district_id" }),
    village_id: zod_1.z.string().min(1, { message: "Required village_id" }),
    home_address: zod_1.z.string().min(1, { message: "Required home_address" }),
    contact_info: zod_1.z.string().min(1, { message: "Required contact_info" }),
    document_type_id: zod_1.z.string().min(1, { message: "Required document_type_id" }),
    document_id: zod_1.z.string().min(1, { message: "Required document_id" }),
    document_no: zod_1.z.string().min(1, { message: "Required document_no" }),
    document_name: zod_1.z.string().min(1, { message: "Required document_name" }),
    date_of_issue: zod_1.z.string().min(1, { message: "Required date_of_issue" }),
    exp_date: zod_1.z.string().min(1, { message: "Required exp_date" }),
    issued_by: zod_1.z.string().min(1, { message: "Required issued_by" }),
    work_place: zod_1.z.string().min(1, { message: "Required id" }),
    work_place_tel: zod_1.z.string().min(1, { message: "Required id" }),
    status: zod_1.z.string().min(1, { message: "Required id" }),
    married_couple_id: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_id" }),
    married_couple_firstname_LA: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_firstname_LA" }),
    married_couple_lastname_LA: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_lastname_LA" }),
    married_couple_dateofbirth: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_dateofbirth" }),
    married_couple_career_id: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_career_id" }),
    married_couple_work_place: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_work_place_tel" }),
    married_couple_work_place_tel: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_work_place" })
});
exports.schema1 = zod_1.z.object({
    id: zod_1.z.string().min(1, { message: "Required id" }),
    firstname_LA: zod_1.z.string().min(1, { message: "Required firstname_LA" }),
    lastname_LA: zod_1.z.string().min(1, { message: "Required lastname_LA" }),
    firstname_EN: zod_1.z.string().min(1, { message: "Required firstname_EN" }),
    lastname_EN: zod_1.z.string().min(1, { message: "Required lastname_EN" }),
    dateofbirth: zod_1.z.string().min(1, { message: "Required dateofbirth" }),
    age: zod_1.z.string().min(1, { message: "Required age" }),
    gender_id: zod_1.z.string().min(1, { message: "Required gender_id" }),
    nationality_id: zod_1.z.string().min(1, { message: "Required nationality_id" }),
    marital_status_id: zod_1.z
        .string()
        .min(1, { message: "Required marital_status_id" }),
    career_id: zod_1.z.string().min(1, { message: "Required career_id" }),
    province_id: zod_1.z.string().min(1, { message: "Required province_id" }),
    district_id: zod_1.z.string().min(1, { message: "Required district_id" }),
    village_id: zod_1.z.string().min(1, { message: "Required village_id" }),
    home_address: zod_1.z.string().min(1, { message: "Required home_address" }),
    contact_info: zod_1.z.string().min(1, { message: "Required contact_info" }),
    document_type_id: zod_1.z.string().min(1, { message: "Required document_type_id" }),
    document_id: zod_1.z.string().min(1, { message: "Required document_id" }),
    document_no: zod_1.z.string().min(1, { message: "Required document_no" }),
    document_name: zod_1.z.string().min(1, { message: "Required document_name" }),
    date_of_issue: zod_1.z.string().min(1, { message: "Required date_of_issue" }),
    exp_date: zod_1.z.string().min(1, { message: "Required exp_date" }),
    issued_by: zod_1.z.string().min(1, { message: "Required issued_by" }),
    work_place: zod_1.z.string().min(1, { message: "Required id" }),
    work_place_tel: zod_1.z.string().min(1, { message: "Required id" }),
    status: zod_1.z.string().min(1, { message: "Required id" }),
    married_couple_id: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_id" }),
    married_couple_firstname_LA: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_firstname_LA" }),
    married_couple_lastname_LA: zod_1.z
        .string()
        .min(1, { message: "Required married_couple_lastname_LA" }),
    married_couple_dateofbirth: zod_1.z
        .string(),
    married_couple_career_id: zod_1.z
        .string(),
    married_couple_work_place: zod_1.z
        .string(),
    married_couple_work_place_tel: zod_1.z
        .string()
});
exports.schemaDelete = zod_1.z.object({
    id: zod_1.z.string().min(1, { message: "Required id" })
});
