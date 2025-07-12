//作者VSHES/荔枝 qq2595168568 未经允许禁止私自使用别删此行如果在其他mod见到此文件切未经过授权后果自负
const 护卫 = new UnitType("护卫");
Object.assign(护卫, {
    coreUnitDock: true,
    aiController: UnitTypes.evoke.aiController,
    controller: u => new BuilderAI(true, 384),
    isEnemy: false,
    fogRadius: 0,
    lowAltitude: true,
    flying: true,
    mineSpeed: 6,
    mineHardnessScaling: false,
    mineTier: 2,
    buildSpeed: 1.5,
    drag: 0.05,
    speed: 4,
    rotateSpeed: 15,
    accel: 0.1,
    itemCapacity: 60,
    payloadCapacity: 256,
    health: 300,
    engineOffset: 7,
    hitSize: 10,
    alwaysUnlocked: true,
    targetable: false,
    hittable: false,
    constructor: () => new UnitEntity.create(),
});
护卫.weapons.add(
    Object.assign(new Weapon(), {
        shootSound: Sounds.missile,
        top: true,
        mirror: false,
        rotate: false,
        x: 0,
        y: 3,
        reload: 20,
        bullet: Object.assign(new LaserBoltBulletType(), {
            speed: 5,
            lifetime: 32,
            width: 2,
            height: 8,
            ammoMultiplier: 1,
            healPercent: 3,
            backColor: (Color.valueOf('98FFA9FF')),
            collidesGround: true,
            collidesTeam: true,
            damage: 20,
            buildingDamageMultiplier: 0.01,
            pierceCap: 3,
        })
    }));

const 护卫炮台 = extend(ItemTurret, 护卫炮台, {});
Object.assign(护卫炮台, {
    size: 2,
    range: 8 * 20,
    reload: 60,
    shootCone: 5,
    inaccuracy: 0,
    rotateSpeed: 8,
    targetAir: true,
    shootSound: Sounds.shootAlt,
    category: Category.turret,
    sprite: 护卫炮台,
})
护卫炮台.ammo(
    Items.copper, Object.assign(new BasicBulletType(3, 20), {
        lifetime: 40,
        speed: 6,
        damage: 31,
        width: 11,
        height: 11,
        collidesTiles: false,
        trailWidth: 2.1,
        trailLength: 10,
    }), )

let range = 520; //俩圆半径，炮塔射程

const core = extend(CoreBlock, "护卫核心", {
    drawPlace(x, y, rotation, valid) {
        this.super$drawPlace(x, y, rotation, valid);
        Drawf.dashCircle(x * 8 + this.offset, y * 8 + this.offset, range, Pal.accent);
    }
});
core.buildVisibility = BuildVisibility.shown;
core.update = true;
core.hasItems = true;
core.health = 100;
core.size = 4;
core.itemCapacity = 8000;
core.unitType = 护卫;
core.unitCapModifier = 20;
core.category = Category.effect;

core.requirements = ItemStack.with(
    Items.graphite, 2500,
    Items.silicon, 2000, );

let HealCore = new Effect(100, e => {
    Draw.color(Color.valueOf("8BE8AA"));
    Fill.square(e.x, e.y, e.fslope() * 1.5 + 0.14, 45);
});

core.buildType = prov(() => {
    const p = new BuildPayload(护卫炮台, Team.derelict); //这里写炮塔
    return extend(CoreBlock.CoreBuild, core, {
        updateTile() {
            this.super$updateTile();

            // 记录治疗前的血量状态
            const wasNotFullBefore = this.healthf() < 1;

            // 治疗逻辑
            if (wasNotFullBefore) {
                this.heal(800 / 1500);
                if (this.timer.get(20)) {
                    HealCore.at(
                        this.x + Mathf.range(3 * Vars.tilesize / 2 - 1),
                        this.y + Mathf.range(3 * Vars.tilesize / 2 - 1)
                    );
                }
            }

            // 检查是否从非满血状态变为满血状态
            if (wasNotFullBefore && this.healthf() >= 1) {
                // 增加最大生命值
                this.maxHealth += 100;
                // 保持满血状态
                this.health = this.maxHealth;
                // 触发视觉/声音效果（可选）
                Fx.healBlockFull.at(this.x, this.y, 1, this);
            }

            // 以下原始逻辑保持不变
            if (p.build.team != this.team) {
                p.build.team = this.team;
            }
            p.update(null, this);

            if (p.build.acceptItem(this, Items.graphite) && this.team.core().items.get(Items.graphite) >= 1) {
                p.build.handleItem(this, Items.graphite);
                this.team.core().items.remove(Items.graphite, 1);
            }

            p.set(this.x, this.y, p.build.payloadRotation);
        },
        draw() {
            this.super$draw();
            p.draw();
        },
        drawSelect() {
            this.super$drawSelect();
            Drawf.dashCircle(this.x, this.y, range, Pal.accent); //点击时显示的虚线圆
        },
        handleDamage(amount) {
            amount *= 0.9; // 减伤10%
            amount = Math.min(amount * 10, amount + this.block.armor);
            return Damage.applyArmor(amount * 0.9, this.block.armor); //受伤倍率
        }

    })
});
exports.护卫核心 = core;
exports.护卫炮台 = 护卫炮台;

print(护卫炮台);