const nedb = require('nedb');

class GoalTracker{

    constructor(dbFilePath) {
        if(dbFilePath)
        {
        this.db = new nedb({ filename: dbFilePath, autoload: true});
        console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
            console.log('db connected in memory');
        }
    }

    init() {
        this.db.insert({
            goal: 'Go Swimming',
            notes: 'Do 20 Lengths of each of the following: '
             +'Breast Stroke, Front Crawl, Butterfly '
             +'At the time Capsual',
            created: '2021-03-08',
            name: 'Sam'
        })

        console.log('db swimming goal inserted');
    
        this.db.insert({
            goal: "Go Climbing",
            notes: 'Complete 2 new V6 problems, '
            +'Do 10 pull ups, '
            +'Use the finger board to work up finger strength',
            created: '2021-03-12',
            name: 'Sam'
        })

        console.log('db climbing goal inserted');

        this.db.insert({
            goal: "Do Karate",
            notes: 'Do a started class',
            created: '2021-02-23',
            name: 'Sam'
        })

        console.log('db karate goal inserted');
    
        this.db.insert({
            goal: "Go Running",
            notes: 'try couch to 5K, Don\'t forget to stretch',
            created: '2021-02-26',
            name: 'Sam'
        })

        console.log('db running goal inserted');
    }

    getAllGoals(){
        return new Promise((resolve, reject) => {
            this.db.find({}, function(err, goals){
                if (err){
                reject(err);
                } else {
                    resolve(goals);
                    console.log('function all() returns ', goals);
                }      
            })
        })
    }

    addGoal(name, goal, notes) {

        var newGoal = {
            name: name,
            goal: goal,
            notes: notes,
            created: new Date().toISOString().split('T')[0]
        }
        console.log('goal added!', newGoal);
        
        this.db.insert(newGoal, function(err, doc) {
            if (err) {
                console.log('Error inserting goal', goal);
            } else {
                console.log('goal inserted into the database', doc);
            }
        })
    }
    
    
}

//make the module visible outside
module.exports = GoalTracker;