function newItem(name) {
    exports[name] = (() => {
        let myItem = extend(Item, name, {});
        return myItem;
    })();
}
newItem("初级协议许可证")
newItem("中级协议许可证")
newItem("高级协议许可证")
newItem("终级协议许可证")
newItem("密钥")
newItem("钢铁")
newItem("硬化钢铁")
newItem("钢合金")
newItem("复合材料")
newItem("电路")
newItem("高级电路")
newItem("纳米")
newItem("钴矿")
newItem("钴")
newItem("钴钢")
newItem("碳纤维")
newItem("亚金")
newItem("亚金精华")