// requires
const express = require ('express');
const app = express();
const numbers = require( './modules/numbers');
// uses
app.use( express.static ('./server/public') );
app.use( '/numbers', numbers);
// global
const port = 3000;
// spinning up the server
app.listen (port, () => {
    console.log ('server up on port: ', port);
})