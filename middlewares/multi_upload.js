const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if(file.fieldname === "INE"){
            cb(null, path.join(__dirname, '../assets/ine'));
        }
        else if(file.fieldname === "Domicilio"){
            cb(null, path.join(__dirname, '../assets/domicilio'));
        }
        else if(file.fieldname === "Foto"){
            cb(null, path.join(__dirname, '../assets/photo'));
        }

    },
    filename: (req, file, cb) => {
        const name = `${file.fieldname}-${req.temporalId}${file.originalname.match(/\..*$/)[0]}`;
        switch (file.fieldname) {
            case "INE":
                req.inepath = name;
                break;
            case "Domicilio": 
                req.dompath = name;
                break;
            case "Foto":
                req.fotopath = name;    
                break;
            default:
                break;
        }
        cb(null, name)
    }
});

module.exports = multer({
    storage,
    limits: { fieldSize: 5*1024*1024 },
    fileFilter: (req, file, cb) => {
        if(file.fieldname === "INE" ||  file.fieldname === "Domicilio" || file.fieldname === "Foto"){
            if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
                cb(null, true);
            }
            else{
                cb(null, false);
                const err = new Error("Sólo imagenes");
                err.name = 'ExtensionError';
                return cb(err);
            }
        }
        else{
            cb(null, false);
        }
    }
});

