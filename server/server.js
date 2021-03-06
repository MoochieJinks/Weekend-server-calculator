// requires
const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const numbers = require( './modules/numbers');
// uses
app.use( express.static ('./server/public') );
app.use( bodyParser.urlencoded({extended: true} ) );
app.use( '/numbers', numbers);
// global
const port = process.env.PORT || 3000;
// spinning up the server
app.listen (port, () => {
    console.log ('server up on port: ', port);
})