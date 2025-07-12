var lib = require('base/lib');

lib.setBuildingSimple(extend(Wall, "无敌墙", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
