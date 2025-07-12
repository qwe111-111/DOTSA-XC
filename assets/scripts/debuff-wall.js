//这个脆弱可以直接改成你的模组里的buff
//强化钢铁墙可以直接改成你墙的名字
const item = require("物品")//这里的物品必须和你的定义物品文件保持一致
const 脆弱 = new StatusEffect("脆弱")

const 强化钢铁墙 = new Wall("强化钢铁墙")
Object.assign(强化钢铁墙, {
    category: Category.defense,
	buildVisibility: BuildVisibility.shown,
});

强化钢铁墙.buildType = prov(() => extend(Building,{
              draw(){
              this.super$draw();
        Units.nearby(null,this.x,this.y,64/*视觉效果范围是64个大小，看着改就行*/,other => {
               if(other.team != this.team)
               {
                  other.apply(脆弱,10);
               }
         })
        Draw.color(Color.valueOf('2e2a30'));
        Draw.alpha(0.8);
        Draw.z(Layer.shields);
        Fill.poly(this.x, this.y, 12, 64);
  },
}));
exports.强化钢铁墙 = 强化钢铁墙;