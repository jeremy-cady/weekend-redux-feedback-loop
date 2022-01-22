const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET route
router.get('/', (req, res) => {
    console.log('GET /feedback');

    const queryText = `
        SELECT * FROM "feedback";
    `;

    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        })
        .catch((error) => {
            console.log('GET /feedback error', error);
            res.sendStatus(500);
        });
})


// POST route
router.post('/', (req, res) => {

    const queryText = `
        INSERT INTO "feedback"
            (feelings, understanding, support, comments)
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