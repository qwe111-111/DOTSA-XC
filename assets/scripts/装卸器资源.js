
const range = 160;//范围

function newUnloader(name) {
	const u = extend(Unloader, name, {
		drawPlace(x, y, rotation, valid) {
			this.super$drawPlace(x, y, rotation, valid);
			Drawf.dashCircle(x * Vars.tilesize + this.offset, y * Vars.tilesize + this.offset, range, Pal.accent);
		},
		outputsItems() {
			return false;
		},
		setStats() {
			this.super$setStats();
			this.stats.add(Stat.range, range / 8, StatUnit.blocks);
		}
	});
	Object.assign(u, {
		size: 2,
		itemCapacity: 1,
		acceptsItems: true,
		selectionColumns: 6
	});
	u.setupRequirements(
		Category.effect,
		BuildVisibility.shown,
		ItemStack.with(
	   Items.graphite, 50,
		Items.silicon, 110,
		)
	);
	exports[name] = u;
	return u
}


let 资源装载器 = newUnloader("资源装载器");
资源装载器.buildType = prov(() => {
	let items = null, sortItem = null, core = null, fire = 0;
	return new JavaAdapter(Unloader.UnloaderBuild, {
		updateTile() {
			items = this.items;
			sortItem = this.sortItem;
			core = this.team.core();
			fire = Vars.state.rules.coreIncinerates ? 20 : 1;
			if (sortItem != null && items.get(sortItem) > 0 && core.items.get(sortItem) < core.getMaximumAccepted(sortItem) / fire) {
				core.items.add(sortItem, 1);
				items.remove(sortItem, 1);
			}
			Vars.indexer.eachBlock(this, range, boolf(other => other.block instanceof GenericCrafter || other.block instanceof Drill || other.block instanceof BeamDrill || other.block instanceof WallCrafter), cons(other => {
				if (sortItem != null && other.items.get(sortItem) > 0 && this.acceptItem(other, sortItem)) {
					this.handleItem(other, sortItem);
					Fx.itemTransfer.at(other.x, other.y, 0, sortItem.color, this);
					other.items.remove(sortItem, 1);
				}
			}));
		},
		acceptItem(source, item) {
			return item == this.sortItem && this.items.get(item) < this.getMaximumAccepted(item)
		},
		drawConfigure() {
			sortItem = this.sortItem;
			this.super$drawConfigure();
			Vars.indexer.eachBlock(this, range, boolf(other => other.block instanceof GenericCrafter || other.block instanceof Drill || other.block instanceof BeamDrill || other.block instanceof WallCrafter), cons(other => {
				if (sortItem != null && this.items.get(sortItem) != null) {
					Draw.color(sortItem.color);
					Lines.square(other.x, other.y, other.block.size * Vars.tilesize / 2 + 1, 45);
				}
			}));
			Drawf.dashCircle(this.x, this.y, range, Pal.accent);
		},
		draw() {
			this.super$draw();
			Draw.z(Layer.effect);
			this.sortItem == null ? Draw.color(Color.white) : Draw.color(this.sortItem.color);
			Draw.alpha(-Mathf.sin(0.05 * Time.time));
			Lines.square(this.x, this.y, 8 * Mathf.sin(0.025 * Time.time), 45);
		}
	}, 资源装载器);
});