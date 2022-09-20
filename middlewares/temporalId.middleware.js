const db = require("../models");
const users = db.Users;
const Op = db.Sequelize.Op;

module.exports = async (req, res, next) => {
        const last = await users.findAll({ order: [['id', 'DESC']], limit:1 , raw: true,  plain: false});
        req.temporalId = 0;
        if(!!last){
            req.temporalId = last[0].id+=1;
        }
        console.log(req.temporalId);
        next();
}
