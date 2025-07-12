package DOTSAXC;

import static mindustry.Vars.content;

import arc.graphics.g2d.*;
import arc.scene.ui.layout.Table;
import mindustry.gen.*;
import mindustry.type.*;
import mindustry.world.blocks.ItemSelection;
import mindustry.world.blocks.liquid.LiquidBlock;

public class MuiltiLiquidRouter extends LiquidBlock {
    public float liquidPadding = 0f;

    public MuiltiLiquidRouter(String name) {
        super(name);
        solid = true;
        noUpdateDisabled = true;
        canOverdrive = false;
        floating = true;
        configurable = true;
        saveConfig = true;
        clearOnDoubleTap = true;

        config(Liquid.class, (MuiltiLiquidRouterBuild tile, Liquid item) -> tile.sortLiquid = item);
        configClear((MuiltiLiquidRouterBuild tile) -> tile.sortLiquid = null);
    }

    @Override
    public TextureRegion[] icons() {
        return new TextureRegion[] { bottomRegion, region };
    }

    @Override
    public void setBars() {
        super.setBars();
        removeBar("liquid");
        for (Liquid liquid : content.liquids()) {
            addLiquidBar(liquid);
        }
    }

    public class MuiltiLiquidRouterBuild extends LiquidBuild {
        public Liquid sortLiquid = null;

        @Override
        public void updateTile() {
            if (sortLiquid != null) {
                dumpLiquid(sortLiquid);
            }
        }

        @Override
        public void draw() {
            Draw.rect(bottomRegion, x, y);
            Draw.rect(region, x, y);
        }

        @Override
        public boolean acceptLiquid(Building source, Liquid liquid) {
            return true;
        }

        @Override
        public void buildConfiguration(Table table) {
            ItemSelection.buildTable(MuiltiLiquidRouter.this, table, content.liquids(), () -> sortLiquid,
                    this::configure, selectionRows, selectionColumns);
        }
    }
}
