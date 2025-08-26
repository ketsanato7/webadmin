const Contorllers = require('../../../contorllers/models-non-bank-financial-institution-chart-of-accounts-Laos/A/A2.accounting_group');
const router = require('express').Router();
const url = "/accounting_group"

router.post(`${url}/create`, Contorllers.create);
router.get(`${url}/read`, Contorllers.read);
router.post(`${url}/update`, Contorllers.update);
router.post(`${url}/delete`, Contorllers.delete);

module.exports=router;  