const express = require("express");
const cors = require("cors");
const morgan = require("morgan");   
const https = require("http");

const port = 3031;
const app = express();

const server = https.createServer(app).listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

require("./routers/users.routes")(app);