const {  DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const employee = sequelize.define("employees", {
    EmployeeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    LastName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    FirstName: {    
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    TitleOfCourtesy: {
        type: DataTypes.STRING(25),
        allowNull: true
    },
    BirthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    HireDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    City: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Region: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    PostalCode: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    Country: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    HomePhone: {
        type: DataTypes.STRING(24),
        allowNull: false
    },
    Extension: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    Photo: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    Notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ReportsTo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    PhotoPath: {
        type: DataTypes.STRING(255),
        allowNull: true
    }
},
{
    tableName: "Employees",
    timestamps: false,
});


module.exports = employee;