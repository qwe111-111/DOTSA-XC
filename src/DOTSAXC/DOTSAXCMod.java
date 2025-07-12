package DOTSAXC;

import mindustry.mod.Mod;

public class DOTSAXCMod extends Mod {
    public DOTSAXCMod() {
    }

    MuiltiLiquidRouter mlr;

    @Override
    public void loadContent() {
        mlr = new MuiltiLiquidRouter("液体传输器") {
            {
            }
        };
    }
}
