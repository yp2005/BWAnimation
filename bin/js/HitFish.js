// 
//import Browser = Laya.Browser;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitFish = /** @class */ (function () {
    function HitFish(config) {
        if (!config || !config.game) {
            config = {
                leftWords: ["red", "pink", "orange"],
                rightWords: ["pink", "orange", "green", "black", "white", "ssss"],
            };
        }
        HitFish.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitFish.atlas", type: Laya.Loader.ATLAS },
            { url: "HitFish/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitFish.prototype.onload = function () {
        // 鱼的类型固定6种;
        HitFish.fishType = 6;
        HitFish.hitFishMain = new HitFishMain();
        HitFish.hitFishMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitFish.hitFishMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitFish.hitFishMain.initConfig();
        this.theCounter = HitFish.hitFishMain.getChildByName("theCounter");
        // this.theCounter.stop();
        this.theCounter.visible = false;
        this.theCounter.on(Laya.Event.COMPLETE, this, this.countEnd);
        Laya.stage.addChild(HitFish.hitFishMain);
        HitFish.gameFish = [];
        this.gameOver();
        HitFish.hitFishMain.replayBtn.visible = false;
        HitFish.hitFishMain.startBtn.visible = true;
    };
    // 游戏开始
    HitFish.prototype.gameStart = function () {
        HitFish.hitFishMain.showSetting(false);
        HitFish.hitFishMain.replayBtn.visible = false;
        HitFish.hitFishMain.startBtn.visible = false;
        this.initWords();
        // Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        Laya.timer.once(500, this, this.setStartState);
    };
    // 设置游戏开始状态
    HitFish.prototype.setStartState = function () {
        HitFish.started = true;
    };
    // 游戏结束
    HitFish.prototype.gameOver = function () {
        HitFish.hitFishMain.wellDone.visible = false;
        HitFish.started = false;
        HitFish.hitFishMain.replayBtn.visible = true;
        HitFish.hitFishMain.showSetting(true);
    };
    // 初始化单词
    HitFish.prototype.initWords = function () {
        //y范围-30到600
        var totalY = 768;
        var fishHeigthL = totalY / HitFish.gameConfig.leftWords.length;
        var fishHeigthR = totalY / HitFish.gameConfig.rightWords.length;
        for (var i = 0; i < HitFish.gameConfig.leftWords.length; i++) {
            // let fishIndex = Math.floor(Math.random() * HitFish.fishType);
            var fish = new Fish(i + 1, HitFish.gameConfig.leftWords[i]);
            fish.x = 155;
            fish.y = fishHeigthL * i + (fishHeigthL - 200) / 2;
            Laya.stage.addChild(fish);
            HitFish.gameFish.push(fish);
        }
        for (var i = 0; i < HitFish.gameConfig.rightWords.length; i++) {
            // let fishIndex = Math.floor(Math.random() * HitFish.fishType);
            var fish = new Fish(i + 1, HitFish.gameConfig.rightWords[i]);
            fish.x = 610;
            fish.y = fishHeigthR * i + (fishHeigthR - 200) / 2;
            // fish.y = fishHeigthR*(i+0.5) -130;
            // fish.y = fishHeigthR*i -30;
            Laya.stage.addChild(fish);
            HitFish.gameFish.push(fish);
        }
    };
    HitFish.prototype.countEnd = function () {
        HitFish.hitFishMain.stopCount();
        // 延迟两秒，让老师可以点击单词变回图片
        Laya.timer.once(2000, this, this.checkWellDone);
    };
    HitFish.prototype.checkWellDone = function () {
        var isAllRight = true;
        for (var i = 0; i < HitFish.gameFish.length; i++) {
            isAllRight = isAllRight && HitFish.gameFish[i].isRight;
        }
        if (isAllRight) {
            for (var i = 0; i < HitFish.gameFish.length; i++) {
                HitFish.gameFish[i].removeSelf();
            }
            HitFish.gameFish = [];
            HitFish.hitFishMain.showWellDone(this, this.gameOver);
        }
    };
    HitFish.started = false; // 游戏是否开始
    return HitFish;
}());
var config = {
    leftWords: ["red", "pink", "orange", "green"],
    rightWords: ["pink", "orange", "green", "black", "white"],
};
new HitFish(config);
//# sourceMappingURL=HitFish.js.map