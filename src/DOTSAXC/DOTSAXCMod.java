package DOTSAXC;

import static mindustry.type.ItemStack.with;

import mindustry.type.Category;
import mindustry.mod.Mod;
import mindustry.content.Items;
import mindustry.world.meta.BuildVisibility;

public class DOTSAXCMod extends Mod {
    public DOTSAXCMod() {
    }

    MuiltiLiquidRouter mlr;

    @Override
    public void loadContent() {
        mlr = new MuiltiLiquidRouter("液体传输器") {
            {
                requirements(Category.liquid, BuildVisibility.shown,
                        with(Items.metaglass, 250, Items.silicon, 150, Items.graphite, 165, Items.surgeAlloy, 45));
                liquidCapacity = 1000f;
                health = 200;
                size = 2;
                solid = true;
            }
        };
    }
}
