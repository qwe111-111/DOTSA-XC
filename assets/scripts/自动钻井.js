const library = require("base/library");
const myliquids = require("液体");
const myitems = require("物品");
const 自动钻井 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "自动钻井", [
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["copper/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["lead/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["sand/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["coal/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["titanium/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/1"],
		power:4,
		},
		output: {
			items: ["thorium/1"],
		},
		craftTime: 20,
	},
	{
		input: {
		liquids: ["water/10"],
		power:24,
		},
		output: {
			items: ["改进工业-钴矿/1"],
		},
		craftTime: 20,
	},
]);