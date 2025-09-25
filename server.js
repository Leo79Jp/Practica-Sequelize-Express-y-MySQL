const express = require('express');
const app = express();
process.loadEnvFile();
const port = process.env.PORT || 3000;

const sequelize = require('./sequelize/src/connection/connection');
const employee = require('./sequelize/src/models/employees');

app.get ('/', (req, res) => {
    res.send('Hello Northwind');
});

app.get('/empleados', async (req, res) => {
    try {
        await sequelize.authenticate();
        const employees = await employee.findAll();
        const employeesData = employees.map(employee => employee.dataValues);
        res.json(employeesData);
    }
    catch (error) {
        res.status(500).json({ error: 'Server is not running', description: error.message });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});