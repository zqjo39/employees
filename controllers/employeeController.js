const {Employee} = require('../models');
const jobtitles = ['CEO', 'VP'];
const states = ['CA', 'TX', 'NM'];

module.exports.displayEmployees = async function(req, res) {
    const employees = await Employee.findAll();
    res.render('index', {employees})
}

module.exports.renderAddEmployeeForm = function(req, res) {
    res.render('createUserForm',
        {
            jobtitles,
            stateslist: states
        });
}

module.exports.addEmployee = async function(req, res) {
    await Employee.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.req.body.last_name,
            job_title: req.body.job_title,
            address_one: req.body.address_one,
            address_two: req.body.address_two,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone_number: req.body.phone_number,
            year_hired: req.body.year_hired
        }
    );
    res.redirect('/');
}

module.exports.renderUpdateForm = async function(req, res) {
    const employee = await Employee.findByPk(req.params.id);
    res.render('edit', {
        employee,
        jobtitles,
        stateslist: states
    });
}

module.exports.updateEmployee = async function(req, res) {
    await Employee.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.req.body.last_name,
            job_title: req.body.job_title,
            address_one: req.body.address_one,
            address_two: req.body.address_two,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            phone_number: req.body.phone_number,
            year_hired: req.body.year_hired
        },
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
}