var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var towermanager = require('tower.main');
var deathmanager = require('death.main');
var replenishmanager = require('replenishcreeps.main');

module.exports.loop = function () {
    
    
    //console.log("SPAWN1 - Energy: " + Game.spawns.Spawn1.energy + " of " + Game.spawns.Spawn1.energyCapacity + ".");
    
    towermanager.run();
    deathmanager.run();
    replenishmanager.run();

    //creep orchestration
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}