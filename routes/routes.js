const express = require('express');
const router = express.Router();
const controller = require('../controllers/goalTrackerControllers');

module.exports = router;

router.get("/", controller.landing_page);

router.get("/goaltracker", controller.goals_list);

router.get('/new', controller.new_goal);

router.post('/new', controller.post_new_goal);

router.get('/about', controller.about);

router.get('/seed', controller.seed);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('500 Internal Server Error. Sorry.');
    console.log(err);
})

module.exports = router;