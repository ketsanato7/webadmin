"use strict";
exports.__esModule = true;
var zod_1 = require("zod");
var schema = zod_1.z.object({
    _id: zod_1.z.string(),
    id: zod_1.z.string(),
    book_no: zod_1.z.string(),
    book_name: zod_1.z.string(),
    date_of_issue: zod_1.z.string(),
    owner_id: zod_1.z.string(),
    status: zod_1.z.string()
});
exports["default"] = schema;
