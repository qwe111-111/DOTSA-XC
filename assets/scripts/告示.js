//以下注释为VSHES荔枝独立完成为了让其他开发者同样可以更新开屏显示窗口插件
//̨̨̹̪̗͚̬͍̬͔͍̬̱̥͓̘͙ͅ复制,妮蔻拉更改,注释不变
Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new BaseDialog("[green]DOTSA"); //新建一个显示窗口

    dialog.buttons.button("@close", run(() => {
        dialog.hide() //退出此界面
    })).size(128, 64); //按钮用原版@close贴图
    dialog.cont.button("加入我们\nQQlink\n虽然你进不去", run(() => {
        Core.app.openURI("http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=GfNoK7ftpA-GXjS6fPDGxhUeQNc4yZDb&authKey=aQatEHbKHSP%2F8McIuKRiikATo2KPymkggYaCGK0PNPyH1FDjaDhzLJoeV0%2BlRMX4&noverify=0&group_code=795335901");
    })).size(110, 70).pad(3); //添加qq群功能为荔枝VSHES添加      
    dialog.cont.pane((() => {
        var table = new Table();
        table.image(Core.atlas.find("logo")).left().size(600, 200).pad(3).row();
        table.add("[pink]感谢游玩本模组\n[red]目前无限延期，直到我贴图水平提高到似人的水平\n许多东西删除，你可以去废稿里去查看").left().growX().wrap().width(550).maxWidth(550).pad(6).labelAlign(Align.left);
        table.row();
        return table;
    })()).grow().center().maxWidth(600);
    dialog.cont.button("关注作者\n[orange]悠闲的小凡", run(() => {
        Core.app.openURI("https://b23.tv/HBLRdrF");
    })).size(110, 70).pad(9);
    dialog.buttons.button("[orange]Kesit Plot", run(() => {
        var dialog2 = new BaseDialog("[red]Kesit");
        dialog2.cont.button("关注作者2\n[blue]laglin\n(虽然没东西)", run(() => {
            Core.app.openURI("https://b23.tv/4onliXI");
        })).size(110, 80).pad(9);
        dialog2.cont.pane((() => {
            var table = new Table();
            table.add("赛普罗——旅程的起点，在解决最后的敌人后，人们终于迎来了久违的和平，战后重建，赛普罗人民团结一心，纷纷贡献自己微薄的力量。\n孢子的危害并未减弱，这个属于赛普罗人民共同的恶果将永远影响他们。孢子会将它们所能见到的水通通吸收，这会导致土地荒漠化加重，原有的生态环境遭到破坏，最终导致物种灭绝，生物圈崩溃。新生的赛普罗文明理所应当地遭到了严重的限制，而且无法找到相对应的改造星球的方案。人们无法生活在充满孢子的空气里，于是只能生活在赤道附近[red]暂未[white]受到侵袭的地区。\n改革刻不容缓。既然无法改变赛普罗的命运，那就改变自己的命运，最高政府大力发展航天业，。街道上，电视上，广播中，人与人之间，航天业似乎变得与每个人都息息相关，“[yellow]航天业关乎所有赛普罗人民的共同命运[white]”按照最高政府的话来说\n航天发展一帆风顺，经由探测，人们发现了新的星球——克斯特，但克斯特离太阳过远，气候寒冷，但相较于满是孢子的赛普罗来说，已经够慈悲了。燃料准备，倒计时开始，宏伟的太空歌剧即将展开\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n你的旅程，也即将展开\n(小凡：拉胯文案)").left().growX().wrap().width(300).maxWidth(300).pad(4).labelAlign(Align.left);
            table.row();
            return table;
        })()).grow().center().maxWidth(340);
        dialog2.buttons.defaults().size(200, 200);
        dialog2.cont.image(Core.atlas.find("改进工业-图片1")).left().size(500, 500).pad(5).row();
        dialog2.addCloseButton();
        dialog2.show();
        dialog2.buttons.button("[blue]观测图", run(() => {
            var dialog2 = new BaseDialog('[yellow]Solar System');
            dialog2.cont.pane((() => {
                var table = new Table();
                table.image(Core.atlas.find("改进工业-观测图")).left().size(600, 600).pad(3).row();
                table.row();
                return table;
            })()).grow().center().maxWidth(1000);
            dialog2.buttons.defaults().size(210, 64);
            dialog2.addCloseButton();
            dialog2.show();
        })).size(210, 64);
        dialog.show();
    })).size(210, 64);
    dialog.buttons.button("[green]致谢名单", run(() => {
        var dialog3 = new BaseDialog('[green]致谢');
        dialog3.cont.pane((() => {
            var table = new Table();
            table.image(Core.atlas.find("改进工业-表情包XD")).left().size(90, 90).pad(3).row();
            table.add("[green]致谢名单\n[white]火星人076\nqwe\nzsd\n试听大人\n1145\n褪色\nR\n水桶\n狐狐\n合金\n玖筱筱雨撧一丨\n梦梦(离开)\n420\n桜\n一只乌龟\n钛合金\n喵喵怪\n喵子\n似人\n有名的诗人\n小菜\n哎嘿王(离开)\n反射合金\n小惜\n花开富贵\n[green]致谢\n[white]感谢你们游玩本模组").left().growX().wrap().width(340).maxWidth(340).pad(4).labelAlign(Align.left);
            table.row();
            return table;
        })()).grow().center().maxWidth(340);
        dialog3.buttons.defaults().size(210, 64);
        dialog3.addCloseButton();
        dialog3.show();
    })).size(210, 64);
    dialog.show();

}))