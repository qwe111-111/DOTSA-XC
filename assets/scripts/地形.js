Vars.content.blocks().each(block => {
    if (block instanceof Floor) {
        block.buildVisibility = BuildVisibility.shown;
        block.alwaysUnlocked = true;
    }
    if (block instanceof Wall) {
        block.buildVisibility = BuildVisibility.shown;
        block.alwaysUnlocked = true;
    }
});
//伪沙盒,只有地板可用