const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/', (req, res) => {
    try {
        const channel = Schemas.Giveaways;
        channel.find().then(data => {
            res.render('giveaways', {style:'default', pg:'giveaways', data:data});
        });
    } catch(err) {
        res.status(404).render(err);
    }
});

module.exports = router;