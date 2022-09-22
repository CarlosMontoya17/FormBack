module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        matricula: {
            type: Sequelize.TEXT
        },
        nombre: {
            type: Sequelize.TEXT
        },
        ine_path: {
            type: Sequelize.TEXT
        },
        domicilio_path: {
            type: Sequelize.TEXT
        },
        foto_path: {
            type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
        },
        latitud: {
            type: Sequelize.TEXT
        },
        longitud: {
            type: Sequelize.TEXT
        },
        number_phone: {
            type: Sequelize.TEXT
        }
    }, {freezeTableName: true});
    return Users;    
};