const { response } = require('express');
const goalTrackerDAO = require('../models/goalTrackerModel');
// const db = new goalTrackerDAO();
const db = new goalTrackerDAO('goalTracker.db');

exports.landing_page = function(req, res) {

    db.getAllGoals().then((list) => {
        res.render('goals', {
            'title': 'Goal Tracker',
            'goals': list
        });
        console.log('Promise Resolved');
    }).catch((err)=>{
        console.log('Promise Rejected ', err);
    })
}

exports.goals_list = function(req, res) {
    res
    res.render('goals',
     {'title': 'Goal Tracker'
    });
}

exports.seed = function(req, res){
    db.init();
    console.log('Database seeded')
    res.redirect('/');
}

exports.new_goal = function(req, res) {
    res.render('newGoal', { 
        'title': 'Goal Tracker'
    })
}

exports.post_new_goal = function(req, res) {
    if (!req.body.name && !req.body.goal) {
        response.status(400).send("Must put your name and a goal.");
        return;
    }
        db.addGoal(req.body.name, req.body.goal, req.body.notes);
        res.redirect('/');
    
}

exports.about = function(req, res) {
    res.render('about', {
        'title': 'About Us',
        'company': 'Let\'s Get Ripped'
    });
}
