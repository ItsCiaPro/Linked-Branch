const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
   res.render('user');
})

router.get('/:username', (req, res, next) => {
   res.render('user');
});

module.exports = router;