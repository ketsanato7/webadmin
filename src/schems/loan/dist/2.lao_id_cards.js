"use strict";
exports.__esModule = true;
exports.schema = void 0;
var zod_1 = require("zod");
exports.schema = zod_1.z.object({
    id: zod_1.z.string().min(1, { message: "Required married_couple_id" }),
    card_no: zod_1.z.string().min(1, { message: "Required married_couple_id" }),
    card_name: zod_1.z.string().min(1, { message: "Required married_couple_id" }),
    date_of_issue: zod_1.z.string().min(1, { message: "Required married_couple_id" }),
    exp_date: zod_1.z.string().min(1, { message: "Required married_couple_id" }),
    owner_id: zod_1.z.string().min(1, { message: "Required " }),
    status: zod_1.z.string()
});
