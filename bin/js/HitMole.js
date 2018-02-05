// 打地鼠
//import Browser = Laya.Browser;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitMole = /** @class */ (function () {
    function HitMole() {
        this.started = false; // 游戏是否开始
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS },
            { url: "HitMole/map_1.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitMole.prototype.onload = function () {
        this.hitMoleMain = new HitMoleMain();
        this.hitMoleMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        this.hitMoleMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(this.hitMoleMain);
        this.initMoles();
        this.gameOver();
        this.hitMoleMain.replayBtn.visible = false;
    };
    // 游戏开始
    HitMole.prototype.gameStart = function () {
        this.hitMoleMain.replayBtn.visible = false;
        this.hitMoleMain.startBtn.visible = false;
        this.started = true;
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
    };
    // 初始化老鼠
    HitMole.prototype.initMoles = function () {
        if (!this.moles || this.moles.length == 0) {
            this.moles = new Array();
            for (var i = 0; i < HitMoleConfig.moleNumber; i++) {
                var item = this.hitMoleMain.getChildByName("item" + i);
                var mole = new Mole(item.getChildByName("ani"), item.getChildByName("wordBg"), item.getChildByName("word"));
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
        for (var i = 0; i < HitMoleConfig.moleNumber; i++) {
            pos.push(i);
        }
        for (var _i = 0, _a = HitMoleConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            var position = word.position - 1;
            if (HitMoleConfig.position == "random") {
                var positionIndex = Math.floor(Math.random() * pos.length);
                position = pos[positionIndex];
                pos.splice(positionIndex, 1);
            }
            this.moles[position].setText(word.text);
            this.moles[position].setAudio(word.audio);
            this.molesTemp.push(this.moles[position]);
        }
    };
    // 显示老鼠
    HitMole.prototype.showMole = function () {
        if (!this.started) {
            return;
        }
        if (this.currentMole) {
            this.currentMole.hit();
            this.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else {
            if (this.molesTemp.length > 0) {
                var showMoleIndex = Math.floor(Math.random() * this.molesTemp.length);
                this.molesTemp[showMoleIndex].show();
                this.currentMole = this.molesTemp[showMoleIndex];
                this.molesTemp.splice(showMoleIndex, 1);
            }
            else {
                this.initMoles();
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                this.hitMoleMain.showWellDone(this, this.gameOver);
            }
        }
    };
    // 游戏结束
    HitMole.prototype.gameOver = function () {
        this.hitMoleMain.wellDone.visible = false;
        this.started = false;
        this.initWords();
        this.hitMoleMain.replayBtn.visible = true;
        this.hitMoleMain.hidHammer();
    };
    return HitMole;
}());
new HitMole();
//# sourceMappingURL=HitMole.js.map