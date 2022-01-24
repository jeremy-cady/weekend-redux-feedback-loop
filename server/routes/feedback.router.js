const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// POST route
router.post('/', (req, res) => {
    console.log(req.body);
    
    const queryText = `
        INSERT INTO "feedback"
            ("feelings", "understanding", "support", "comments")
        VALUES
            ($1, $2, $3, $4)
    `;

    const queryParams = [
        req.body.feelings,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ];

    pool.query(queryText, queryParams)
        .then((result) => {
            console.log('Added feedback to the DB', req.body);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST error', error);
            res.sendStatus(500);
        })
})

module.exports = router;