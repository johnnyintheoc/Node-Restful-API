const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/', (req, res) => {
    try {
        const channel = Schemas.Fitness;
        channel.find().then(data => {
            res.render('fitness', {style:'default', pg:'fitness', data:data});
        });
    } catch(err) {
        res.status(404).render(err);
    }
});

module.exports = router;