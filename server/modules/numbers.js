const express = require ('express');
const router = express.router();

let values = {
    firstNum: '1',
    operator: '+',
    secondNum: '1',
};

router.get( '/', (req, res) =>{
    console.log('/numbers GET');
    res.send( values );
})

module.exports = router;