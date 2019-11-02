const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.render('home', {style:'default', pg:'home'});
    } catch(err) {
        res.status(404).render(err);
    }
});

module.exports = router;