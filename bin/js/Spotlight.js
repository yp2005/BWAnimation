// 聚光灯
var Browser = Laya.Browser;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var Spotlight = /** @class */ (function () {
    function Spotlight() {
        this.browserWidth = Browser.clientWidth;
        this.browserHeight = Browser.clientHeight;
        this.config = {
            time: 10,
            words: [
                "time",
                "word",
                "world",
                "apple",
                "animal",
                "class",
                "click",
                "duck",
                "dunk",
                "event"
            ]
        };
        // 初始化舞台设置
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        this.initWordsAndLight();
    }
    Spotlight.prototype.initWordsAndLight = function () {
        var spotlight = new Sprite();
        spotlight.loadImage("img/spotlight/spotlight.png", this.browserWidth / 2 - 50, this.browserHeight / 2 - 50, 100, 100);
        Laya.stage.addChild(spotlight);
        for (var _i = 0, _a = this.config.words; _i < _a.length; _i++) {
            var word = _a[_i];
            var text = new Laya.Text();
            text.text = word;
            text.fontSize = 30;
            text.color = "#232628";
            text.x = Math.floor(Math.random() * this.browserWidth);
            text.y = Math.floor(Math.random() * this.browserHeight);
            Laya.stage.addChild(text);
        }
    };
    return Spotlight;
}());
new Spotlight();
//# sourceMappingURL=Spotlight.js.map