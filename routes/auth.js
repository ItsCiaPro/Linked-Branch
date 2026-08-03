const express = require('express');

const router = express.Router();

router.get('/login', (req, res, next) => {
   res.render('main');
});

router.get('/register', (req, res, next) => {
   res.render('main');
});

module.exports = router;