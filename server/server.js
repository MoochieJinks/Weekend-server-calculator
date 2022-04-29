// requires
const express = require ('express');
const app = express();
// uses
app.use( express.static ('./server/public') );
// global
const port = 3000;
// spinning up the server
app.listen (port, () => {
    console.log ('server up on port: ', port);
})