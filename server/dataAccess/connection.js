const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://sql12263194:aYZ57i5R4J@sql12.freesqldatabase.com/sql12263194')
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports= sequelize

