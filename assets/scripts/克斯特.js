const HJlib = require("base/HJlib");
const KST = new Planet("克斯特", Planets.sun, 1.2, 4);
KST.meshLoader = prov(() => new HexMesh(KST, 6.6));//里面的最好别超过9

function color(c) {
	return Color.valueOf(c);
}
/*const sS = require("sectorSize");
sS.planetGrid(KST, 3);*/
KST.generator = new ErekirPlanetGenerator();
KST.generator = extend(ErekirPlanetGenerator, {
	arr: [color("554D85FF"), color("554D85FF"),color("554D85FF"), color("554D85FF"),color("554D85FF"),color("569F60FF"),color("569F60FF"),color("FFFFFFFF"),color("FFFFFFFF"),color("FFFFFFFF"),color("FFFFFFFF"),color("FFFFFFFF"),color("569F60FF"),color("569F60FF"),color("554D85FF"),color("554D85FF")],
	getColor(position) {
		const noise = (amount, a, b, c) => {
			var n = Simplex.noise3d(this.seed + amount, a, b, c, position.x, position.y, position.z);
			return n
		};
		this.vec = new Vec3(noise(0.1, 4, 0.3, 3 / 2), noise(45, 7.3, 0.17, 19 / 2), noise(33, 0.3, 4.3, 23 / 2));//对应数据噪点（种子？,色块分散度,？,？,？原谅我在源码里找不到这玩意）
		var amo = Mathf.round(Mathf.clamp(this.vec.x * this.arr.length, 0, this.arr.length - 1));
		return Tmp.c1.set(this.arr[amo]);
	},
	getDefaultLoadout() {
		return Schematics.readBase64("bXNjaAF4nGNgYmBiZmDJS8xNZWB7tmDH0/3NDNwpqcXJRZkFJZn5eQwMDGw5iUmpOcUMTNGxjAwyz2bMfz6151nfoudbFulCqBcNrU/n73q+eiZQMSMDBAAAdBEhZg==")
	},
	allowLanding(sector){
        return false
    }
});
KST.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(KST, 2, 1.2, 0.11, 5, Color.valueOf("6B6B9EFF"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(KST, 2.5, 1.2, 0.15, 5, Color.valueOf("665C9FFF"), 2, 0.42, 1, 0.4),
	new HexSkyMesh(KST, 3, 1.2, 0.18, 5, Color.valueOf("ADA7D0FF"), 2, 0.42, 1, 0.4),
));
KST.bloom = false;
//不清楚
KST.accessible = true;
//是否在行星菜单内显示
KST.rotateTime = 2400;
//一昼夜的时间(s)
KST.localizedName= "克斯特";
//左上角的名字
KST.visible = true;
//可见
KST.atmosphereRadIn = 0.7; //进入大气层距离
KST.atmosphereRadOut = 0.1; //离开大气层距离
KST.alwaysUnlocked = true;
//KST.showRtsAIRule = true;
KST.prebuildBase= false;
KST.orbitRadius = 130;
//星球公转半径
KST.atmosphereColor = KST.lightColor = Color.valueOf("4E4676FF");
//大气层/发光颜色
KST.atmosphereRadIn = 0.001;
//大气素
KST.atmosphereRadOut = 0.03;
//大气输出
KST.defaultEnv = Env.spores | Env.terrestrial;
//环境
KST.startSector = 1;
//默认解锁的区块编号
KST.iconColor = Color.valueOf("6B6B9EFF");
//星球图标颜色
KST.clearSectorOnLose = true;
//失败是否重置区域存档
KST.hiddenItems.addAll(Items.erekirItems)
    .removeAll(Items.SerpuloItems);
exports.KST = KST;

const map1jc = new SectorPreset("交错山区", KST, 1);
map1jc.description = "此地资源匮乏，因此本地驻军稀少且防御薄弱，作为始发地区再合适不过";
map1jc.difficulty = 1;
map1jc.alwaysUnlocked = false;
map1jc.addStartingItems = true;
map1jc.captureWave = 40;
map1jc.localizedName = "交错山区";
exports.map1jc = map1jc;
HJlib.addToResearch(map1jc, {
    parent: "planetaryTerminal",
    objectives: Seq.with(
    new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
});

const map2bf = new SectorPreset("冰封湖畔", KST, 281);
map2bf.description = "目前没有";
map2bf.difficulty = 1;
map2bf.alwaysUnlocked = false;
map2bf.addStartingItems = true;
map2bf.captureWave = 40;
map2bf.localizedName = "冰封湖畔";
exports.map2bf = map2bf;
HJlib.addToResearch(map2bf, {
    parent: "交错山区",
    objectives: Seq.with(
    new Objectives.SectorComplete(map1jc))
});