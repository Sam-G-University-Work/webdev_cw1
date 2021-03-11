const { response } = require('express');
const goalTrackerDAO = require('../models/goalTrackerModel');
const db = new goalTrackerDAO();

exports.landing_page = function(req, res) {
    db.init();
    db.getAllEntries().then((list) => {
        res.render('entries', {
            'title': 'Goal Tracker',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}

exports.entries_list = function(req, res) {
    res
    res.render('entries',
     {'title': 'Goal Tracker'
    });
}

exports.new_entry = function(req, res) {
    res.render('newEntry', { 
        'title': 'Goal Tracker'
    })
}

exports.post_new_entry = function(req, res) {
    if (!req.body.author) {
        response.status(400).send("Entries must have an author.");
        return;
    }
        db.addEntry(req.body.author, req.body.subject, req.body.contents);
        res.redirect('/');
    
}

exports.about = function(req, res) {
    res.redirect('/about.html');
}
