const config = require("../config/db");
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.DIALECT,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        },
        logging: false,
    }
);
//db variable
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// * Models *
db.Users = require("./users.model")(sequelize, Sequelize);

//Exportación
module.exports = db;