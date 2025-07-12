
const 振奋 = new StatusEffect("振奋")

const 强化墙 = new Wall("强化墙")
Object.assign(强化墙, {
    category: Category.defense,
    buildVisibility: BuildVisibility.shown,
});

强化墙.buildType = prov(() => extend(Building, {
    draw() {
        this.super$draw(); // 调用父类的绘制逻辑

        // 检测建筑周围64格范围内的单位
        Units.nearby(null, this.x, this.y, 64, other => {
            if (other.team = this.team) { 
                other.apply(振奋, 240); // 另外应用“振奋”状态
            }
        });

        // 绘制视觉效果
        Draw.color(Color.valueOf('88A4FF40'));
        Draw.alpha(0.2);
        Draw.z(Layer.shields);
        Fill.poly(this.x, this.y, 12, 64);
    },
}));