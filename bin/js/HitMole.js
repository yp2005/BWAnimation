// 打地鼠
//import Browser = Laya.Browser;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitMole = /** @class */ (function () {
    function HitMole(config) {
        if (!config || !config.game) {
            config = {
                game: "word",
                words: ["red", "pink", "orange", "green", "black", "white"],
                pictures: [],
            };
        }
        HitMole.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS },
            { url: "HitMole/mainBG.jpg", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitMole.prototype.onload = function () {
        HitMole.hitMoleMain = new HitMoleMain();
        HitMole.hitMoleMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitMole.hitMoleMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitMole.hitMoleMain);
        this.initMoles();
        this.gameOver();
        HitMole.hitMoleMain.replayBtn.visible = false;
    };
    // 游戏开始
    HitMole.prototype.gameStart = function () {
        HitMole.hitMoleMain.showSetting(false);
        HitMole.hitMoleMain.replayBtn.visible = false;
        HitMole.hitMoleMain.startBtn.visible = false;
        this.initWords();
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        Laya.timer.once(500, this, this.setStartState);
    };
    // 设置游戏开始状态
    HitMole.prototype.setStartState = function () {
        HitMole.started = true;
    };
    // 初始化老鼠
    HitMole.prototype.initMoles = function () {
        if (!this.moles || this.moles.length == 0) {
            this.moles = new Array();
            for (var i = 0; i < 12; i++) {
                var item = HitMole.hitMoleMain.getChildByName("item" + i);
                var mole = new Mole(item.getChildByName("mouseImg"), item.getChildByName("wordBg"), item.getChildByName("word"));
                mole.x = item.x;
                mole.y = item.y;
                this.moles.push(mole);
            }
        }
        else {
            for (var _i = 0, _a = this.moles; _i < _a.length; _i++) {
                var mole = _a[_i];
                mole.reset();
            }
        }
    };
    // 初始化单词
    HitMole.prototype.initWords = function () {
        this.molesTemp = new Array();
        var pos = new Array();
        for (var i = 0; i < 12; i++) {
            pos.push(i);
        }
        // 如果是单词游戏进行单词初始化
        if (HitMole.gameConfig.game == "word") {
            for (var _i = 0, _a = HitMole.gameConfig.words; _i < _a.length; _i++) {
                var word = _a[_i];
                var positionIndex = Math.floor(Math.random() * pos.length);
                var position = pos[positionIndex];
                pos.splice(positionIndex, 1);
                //设置改为word后需要把图片设置为地鼠
                this.moles[position].setPic("HitMole/mouse.png");
                this.moles[position].setText(word);
                this.molesTemp.push(this.moles[position]);
            }
        }
        else if (HitMole.gameConfig.game == "picture") {
            for (var _b = 0, _c = HitMole.gameConfig.pictures; _b < _c.length; _b++) {
                var pic = _c[_b];
                var positionIndex = Math.floor(Math.random() * pos.length);
                var position = pos[positionIndex];
                pos.splice(positionIndex, 1);
                this.moles[position].setPic("HitMole/" + pic);
                this.molesTemp.push(this.moles[position]);
            }
        }
    };
    // 显示老鼠
    HitMole.prototype.showMole = function () {
        if (!HitMole.started) {
            return;
        }
        if (this.currentMole) {
            this.currentMole.hit(HitMole.gameConfig.game);
            HitMole.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else {
            if (this.molesTemp.length > 0) {
                var showMoleIndex = Math.floor(Math.random() * this.molesTemp.length);
                // TODO 随机一个生效文件
                var audio = "";
                if (HitMole.gameConfig.game == "word") {
                    this.molesTemp[showMoleIndex].showMouse(audio);
                }
                else if (HitMole.gameConfig.game == "picture") {
                    this.molesTemp[showMoleIndex].showPic(audio);
                }
                this.currentMole = this.molesTemp[showMoleIndex];
                this.molesTemp.splice(showMoleIndex, 1);
            }
            else {
                this.initMoles();
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                HitMole.hitMoleMain.showWellDone(this, this.gameOver);
            }
        }
    };
    // 游戏结束
    HitMole.prototype.gameOver = function () {
        HitMole.hitMoleMain.wellDone.visible = false;
        HitMole.started = false;
        HitMole.hitMoleMain.replayBtn.visible = true;
        HitMole.hitMoleMain.hidHammer();
        HitMole.hitMoleMain.showSetting(true);
    };
    HitMole.started = false; // 游戏是否开始
    return HitMole;
}());
var config = {
    game: "picture",
    words: ["red", "pink", "orange", "green", "black", "white"],
    pictures: ["picture1.png", "picture1.png", "picture1.png"],
};
new HitMole(config);
//# sourceMappingURL=HitMole.js.map