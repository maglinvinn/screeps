var replenishmanager = {

    /** @param {Creep} creep **/
    run: function() {
    
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        
    //replenish harvester    
    if(harvesters.length < 1) {
        if(Game.spawns.Spawn1.energy>=250){
            var newName = 'Harvester' + Game.time;
            console.log('Spawning new harvester: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'harvester'}});
        }
    }
    
    //replenish builders
    else if(builders.length < 1) {
        if(Game.spawns.Spawn1.energy>=250){
            var newName = 'Builder' + Game.time;
            console.log('Spawning new builder: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'builder'}});
        }
    }
    
    //replenish upgraders
    else if(upgraders.length < 3) {
        if(Game.spawns.Spawn1.energy>=250){
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName,
                {memory: {role: 'upgrader'}});
        }
    } else {
        //console.log('Creep Population Good.');
    }
    
    //handling spawning
    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }
    }
};

module.exports = replenishmanager;