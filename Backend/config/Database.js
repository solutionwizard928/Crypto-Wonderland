// config/Database.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize instance (for example, using MySQL)
const db = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',  // or another dialect such as 'postgres', 'sqlite', etc.
});

// Test the database connection
async function testConnection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = db;  // Export the Sequelize instance
