const db = require("../models");
const upload = require("../middlewares/multi_upload");
const multer = require("multer");
const Op = db.Sequelize.Op;
const users = db.Users;

var Assigments = {
    GenerateMatricula: (id, length) => {
        const letter = "A";
        id = String(id);
        id = id.split("").reverse().join(""); 
        var matricula = "";
        for (let i = 0; i < length; i++) {
            if(id[i] !== undefined && id[i] !== null){
                matricula = matricula.concat('',`${id[i]}`);
            }
            else{
                matricula = matricula.concat('',`0`);
            }
        }
        matricula = `${letter}${matricula.split("").reverse().join("")}`;
        return matricula;
    }
}

exports.SignUp = async (req, res, next) => {
    const { name, latitud, longitud } = req.body;
    if(name !== undefined && name !== null){
        req.nameEnterprise = name;
        const id = req.temporalId;
        const matricula = Assigments.GenerateMatricula(id, 8);
        await users.create({
            id: id,
            matricula,
            nombre: name,
            ine_path: req.inepath,
            domicilio_path: req.dompath,
            foto_path: req.fotopath,
            latitud,
            longitud
        }, {fields: ['id',  'matricula', 'nombre', 'ine_path', 'domicilio_path', 'foto_path', 'latitud', 'longitud']}).then(data => {
            if(data){
                res.status(200).end(matricula);
            }
            else {
                res.status(413).end(id);
            }
        }).catch(err => {
            res.status(500);
        });
    }
    else{
        return res.status(401).json({message: "Sin nombre"});
    }
}