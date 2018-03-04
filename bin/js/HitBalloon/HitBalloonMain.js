var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 游戏主界面
var HitBalloonMain = /** @class */ (function (_super) {
    __extends(HitBalloonMain, _super);
    function HitBalloonMain() {
        var _this = _super.call(this) || this;
        _this.wellDone.visible = false;
        _this.wellDoneY = _this.wellDone.y;
        _this.wellDoneX = _this.wellDone.x;
        _this.configView = new HBConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (HitBalloon.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        return _this;
    }
    // 显示提示
    HitBalloonMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    HitBalloonMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    HitBalloonMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    HitBalloonMain.prototype.showSetting = function (state) {
        if (!HitBalloon.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 游戏结束
    HitBalloonMain.prototype.gameOver = function () {
        // 显示well done文字效果
        this.wellDone.y = this.wellDoneY;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        this.wellDone.removeSelf();
        this.addChild(this.wellDone);
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100 }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
    };
    // 重置游戏为初始状态
    HitBalloonMain.prototype.reset = function () {
        this.wellDone.visible = false;
        for (var _i = 0, _a = this.balloons; _i < _a.length; _i++) {
            var balloon = _a[_i];
            balloon.removeSelf();
            balloon.destroy();
        }
        for (var _b = 0, _c = this.pictures; _b < _c.length; _b++) {
            var picture = _c[_b];
            picture.line.removeSelf();
            picture.line.destroy();
            picture.removeSelf();
            picture.destroy();
        }
        HitBalloon.hitBalloonMain.replayBtn.visible = true;
        HitBalloon.finishedWordsNumber = 0;
        this.showSetting(true);
    };
    // 将游戏元素添加到游戏主页面
    HitBalloonMain.prototype.addElement = function (balloons, pictures) {
        this.balloons = balloons;
        this.pictures = pictures;
        var balloonWidth = 1024 / this.balloons.length;
        var topPicNumber = Math.floor(this.pictures.length / 2);
        var picWidthTop = 1024 / topPicNumber;
        var picWidthBottom = 1024 / (this.pictures.length - topPicNumber);
        var indexes = new Array();
        for (var i = 0; i < this.balloons.length; i++) {
            indexes.push(i);
        }
        for (var _i = 0, _a = this.balloons; _i < _a.length; _i++) {
            var balloon = _a[_i];
            var i = Math.floor(Math.random() * indexes.length); // 给单词一个随机的位置
            var index = indexes[i];
            indexes.splice(i, 1);
            if (index >= 6) {
                balloon.picture.skin = "HitBalloon/balloon-" + (index - 5) + ".png";
            }
            else {
                balloon.picture.skin = "HitBalloon/balloon-" + (index + 1) + ".png";
            }
            balloon.x = index * balloonWidth + (balloonWidth - balloon.width) / 2;
            balloon.y = 330;
            // 根据气球个数设置单词字号
            balloon.word.width = balloonWidth;
            balloon.word.x = (128 - balloonWidth) / 2;
            if (this.balloons.length < 8) {
                balloon.word.fontSize = 40;
            }
            else {
                balloon.word.fontSize = 30;
            }
            this.addChild(balloon);
        }
        indexes = new Array();
        for (var i = 0; i < this.pictures.length; i++) {
            indexes.push(i);
        }
        for (var _b = 0, _c = this.pictures; _b < _c.length; _b++) {
            var picture = _c[_b];
            var i = Math.floor(Math.random() * indexes.length); // 给图片一个随机的位置
            var index = indexes[i];
            indexes.splice(i, 1);
            if (index < topPicNumber) {
                picture.x = index * picWidthTop + (picWidthTop - picture.width) / 2;
                picture.y = 110;
                picture.position = "top";
            }
            else {
                picture.x = (index - topPicNumber) * picWidthBottom + (picWidthBottom - picture.width) / 2;
                picture.y = 564;
                picture.position = "bottom";
            }
            this.addChild(picture);
            index++;
        }
    };
    // 获取气球数量
    HitBalloonMain.prototype.getBalloonsNumber = function () {
        return this.balloons.length;
    };
    return HitBalloonMain;
}(ui.HitBalloonUI));
//# sourceMappingURL=HitBalloonMain.js.map