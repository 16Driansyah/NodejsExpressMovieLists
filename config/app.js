const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("./config/databas");
const multer = require('multer');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// buat server nya
// use express static folder
app.use(express.static("./public"));
//! use of multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "./public/image/");
    },
});
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

