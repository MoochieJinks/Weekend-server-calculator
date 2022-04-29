const express = require ('express');
const router = express.Router();

let calculationsIveDone = [
    {
        firstNum: 1,
        operator: '+',
        secondNum: 1,
        result: 2,
    }
]

router.get( '/', (req, res) =>{
    console.log('/numbers GET');
    res.send( calculationsIveDone );
})
router.post( '/', (req, res)=>{
    let result = 0;
    if (req.body.operator == '+'){
        result = req.body.firstNum + req.body.secondNum;
    } else if (req.body.operator == '-'){
        result = req.body.firstNum - req.body.secondNum;
    } else if (req.body.operator == '*'){
        result = req.body.firstNum * req.body.secondNum;
    } else if (req.body.operator == '/'){
        result = req.body.firstNum / req.body.secondNum;
    }

    let myNewCalculation = {
        firstNum: req.body.firstNum,
        operator: req.body.operator,
        secondNum: req.body.secondNum,
        result: result,
    };
    calculationsIveDone.push(myNewCalculation);
    res.sendStatus(200);
})

module.exports = router;