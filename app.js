const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/router");

const app = express ();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use('/', routes);
app.use(express.static('public'));

app.listen(PORT || 3000, () =>{
    console.log('Server connected successfully to port ${PORT}...')
})