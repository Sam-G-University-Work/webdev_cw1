const express = require('express');
const router = express.Router();
const controller = require('../controllers/goalTrackerControllers');

module.exports = router;

router.get("/", controller.landing_page);

router.get("/guestbook", controller.entries_list);

router.get('/new', controller.new_entry);

router.post('/new', controller.post_new_entry);

router.get('/about', controller.about);

router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

router.use(function(req, res) {
    res.status(500);
    res.type('text/plain');
    res.send('500 Internal Server Error. Sorry.');
})

module.exports = router;