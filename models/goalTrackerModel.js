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
            notes: 'Do 20 Lengths of each of the following'
             +'\nBreast Stroke \nFront Crawl \nButterfly'
             +'\nAt the time Capsual',
            created: '2021-03-08',
            name: 'Sam'
        })

        console.log('db swimming goal inserted');
    
        this.db.insert({
            goal: "Go Climbing",
            notes: 'Complete 2 new V6 problems'
            +'\nDo 10 pull ups'
            +'\nUse the finger board to work up finger strength',
            created: '2021-03-12',
            name: 'Sam'
        })

        console.log('db entry Anne inserted');
    
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