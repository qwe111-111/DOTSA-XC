function newLiquid(name) {
	exports[name] = (() => {
		let myLiquid = extend(Liquid, name, {});
		return myLiquid;
	})();
}
newLiquid("冷却液");
newLiquid("液态氮");
newLiquid("废水");
newLiquid("锈蚀水");