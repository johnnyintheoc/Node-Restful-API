const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schemas.js');

router.get('/', (req, res) => {
    try {
        const channel = Schemas.Puppies;
        channel.find().then(data => {
            res.render('puppies', {style:'default', pg:'Puppies', brandIcon:'fa fa-paw', data:data});
        });
    } catch(err) {
        res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
    }
});

router.get('/puppies', (req, res) => {
    try {
        const channel = Schemas.Puppies;
        channel.find().then(data => {
            res.render('puppies', {style:'default', pg:'Puppies', brandIcon:'fa fa-paw', data:data});
        });
    } catch(err) {
        res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
    }
});

router.get('/bouldering', (req, res) => {
    try {
        const channel = Schemas.Bouldering;
        channel.find().then(data => {
            res.render('bouldering', {style:'default', pg:'Bouldering', brand:'fa fa-hand-rock', data:data});
        });
    } catch(err) {
        res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
    }
});

router.get('/movie-trailers', (req, res) => {
    try {
        const channel = Schemas.MovieTrailers;
        channel.find().then(data => {
            res.render('movieTrailers', {style:'default', pg:'Movie Trailers', brand:'fa fa-film', data:data});
        });
    } catch(err) {
        res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
    }
});

router.get('/about', (req, res) => {
    try {
        const channel = Schemas.MovieTrailers;
        channel.find().then(data => {
            res.render('about', {style:'default', pg:'About', brand:'fa fa-address-card', data:data});
        });
    } catch(err) {
        res.status(404).render('404error', {style:'default', pg:'404 Page Error', brandIcon:'fa fa-exclamation-circle'});
    }
});

module.exports = router;