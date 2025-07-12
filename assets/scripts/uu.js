// 此代码来自无限宇宙
const speedyetii = 5;
const yetii = extend(LiquidSource, "uu", {
    drawRequestConfig(req, list) {
        this.drawRequestConfigCenter(req, req.config, Core.atlas.find("改进工业-uu-centre"), true);
    },
});
yetii.buildType = prov(() => {
    var dumpingTo = null;
    var offset = 0;
    var liquidBegin = null;
    return new JavaAdapter(LiquidSource.LiquidSourceBuild, {
        updateTile() {
            if (liquidBegin != this.source) {
                this.liquids.clear();
                liquidBegin = this.source;
            }
            for (var i = 0; i < this.proximity.size; i++) {
                var pos = (offset + i) % this.proximity.size;
                var other = this.proximity.get(pos);

                if (other.interactable(this.team) && other.block.hasLiquids && this.source != null && other.liquids.get(this.source) > 0) {
                    dumpingTo = other;
                    if (this.liquids.currentAmount() < this.block.liquidCapacity) {
                        var amount = Math.min(speedyetii, other.liquids.get(this.source));
                        this.liquids.add(this.source, amount);
                        other.liquids.remove(this.source, amount);
                    }
                }
            }
            if (this.proximity.size > 0) {
                offset++;
                offset %= this.proximity.size;
            }
            this.dumpLiquid(this.liquids.current());
        },
        canDumpLiquid(to, liquid) {
            return to != dumpingTo;
        },
        draw() {
            Draw.rect(Core.atlas.find("改进工业-uu"), this.x, this.y);
            if (this.source == null) {
                Draw.rect("cross", this.x, this.y);
            } else {
                Draw.color(this.source.color);
                Draw.rect(Core.atlas.find("改进工业-uu-centre"), this.x, this.y);
                Draw.color();
            }
        },
    }, yetii);
});
yetii.health = 100;
yetii.liquidCapacity = 100;
yetii.buildVisibility = BuildVisibility.shown;
yetii.category = Category.effect;
exports.yetiUnloader = yetii;