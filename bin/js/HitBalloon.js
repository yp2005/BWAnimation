// 拍气球
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitBalloon = /** @class */ (function () {
    function HitBalloon(config) {
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                backgroundImg: "mainBG.png",
                layout: 3,
                words: [
                    { word: "car", pictures: ["car.png", "car.png", "car.png", "car.png", "car.png"] },
                    { word: "train", pictures: ["train.png"] },
                    { word: "doll", pictures: ["doll.png"] },
                    { word: "computer", pictures: ["computer.png"] },
                    { word: "bike", pictures: ["bike.png"] },
                    { word: "ball", pictures: ["ball.png"] }
                ]
            };
        }
        HitBalloon.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitBalloon.atlas", type: Laya.Loader.ATLAS },
            { url: "HitBalloon/mainBG.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitBalloon.prototype.onload = function () {
        HitBalloon.hitBalloonMain = new HitBalloonMain();
        HitBalloon.hitBalloonMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
        Laya.stage.addChild(HitBalloon.hitBalloonMain);
        this.init();
    };
    // 重新开始
    HitBalloon.prototype.restart = function () {
        if (HitBalloon.hitBalloonMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        HitBalloon.hitBalloonMain.replayBtn.skin = "common/replay-disabled.png";
        HitBalloon.hitBalloonMain.reset();
        this.init();
    };
    // 初始化
    HitBalloon.prototype.init = function () {
        var balloons = new Array();
        var pictures = new Array();
        for (var _i = 0, _a = HitBalloon.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            var balloon = new Balloon(word.word, word.pictures.length);
            balloons.push(balloon);
            for (var _b = 0, _c = word.pictures; _b < _c.length; _b++) {
                var pic = _c[_b];
                var picture = new Picture(word.word, pic);
                pictures.push(picture);
            }
        }
        if (HitBalloon.gameConfig.layout == 2) {
            HitBalloon.hitBalloonMain.addElement2Line(balloons, pictures);
        }
        else if (HitBalloon.gameConfig.layout == 3) {
            HitBalloon.hitBalloonMain.addElement3Line(balloons, pictures);
        }
    };
    HitBalloon.finishedWordsNumber = 0;
    return HitBalloon;
}());
//# sourceMappingURL=HitBalloon.js.map