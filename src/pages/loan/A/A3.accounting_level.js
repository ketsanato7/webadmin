const Contorllers = require('../../../contorllers/models-non-bank-financial-institution-chart-of-accounts-Laos/A/A3.accounting_level');
const router = require('express').Router();
const url = "/accounting_level"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  