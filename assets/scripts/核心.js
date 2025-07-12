const 可摆放核心 = extend(CoreBlock, "可摆放核心", {

    canBreak() {
        return Vars.state.teams.cores(Vars.player.team()).size > 0;
    },
    canReplace(other) {
        return other.alwaysReplace;
    },
    canPlaceOn(tile, team) {
        return true;
    },
});
exports.可摆放核心 = 可摆放核心;

const 测试核心 = extend(CoreBlock, "测试核心", {

    canBreak() {
        return Vars.state.teams.cores(Vars.player.team()).size > 0;
    },
    canReplace(other) {
        return other.alwaysReplace;
    },
    canPlaceOn(tile, team) {
        return true;
    },
});
exports.测试核心 = 测试核心;