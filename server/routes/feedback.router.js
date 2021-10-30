const express = require ('express');
const router = express.Router();
const pool = require ('../modules/pool.js');

router.get('/', (req,res) => {
    console.log('Feedback Route GET');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500); 
    })
})

router.post('/', (req,res) => {
    console.log('Feedback Route POST');
    let newFeedback = req.body
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                        VALUES ($1, $2, $3, $4);`



    pool.query( queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments] )
    .then((result) => {
    res.sendStatus(201);
    }).catch((error) => {
        console.log('Error POST /feedback', error);
        res.sendStatus(500)        
    })
})


module.exports = router;