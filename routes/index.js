var express = require('express');
var router = express.Router();
const employeeController = require('../controllers/employeeController')

/* GET home page. */
router.get('/', employeeController.displayEmployees);

router.get('/add', employeeController.renderAddEmployeeForm);

router.post('/add', employeeController.addEmployee);

router.get('/update/:id', employeeController.renderUpdateForm);

router.post('/update/:id', employeeController.updateEmployee)

module.exports = router;