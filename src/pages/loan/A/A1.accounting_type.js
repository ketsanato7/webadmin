const Contorllers = require('../../../contorllers/models-non-bank-financial-institution-chart-of-accounts-Laos/A/A1.accounting_type');
const router = require('express').Router();
const url = "/accounting_type"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  