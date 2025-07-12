package DOTSAXC;

import static mindustry.type.ItemStack.with;

import mindustry.mod.Mod;

public class DOTSAXCMod extends Mod {
    public DOTSAXCMod() {
    }

    MuiltiLiquidRouter mlr;

    @Override
    public void loadContent() {
        mlr = new MuiltiLiquidRouter("液体传输器") {
            {
                requirements(Category.liquid, with());
                liquidCapacity = 700f;
                size = 2;
                solid = true;
            }
        };
    }
}
