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
// 气球类
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(word, pic) {
        var _this = _super.call(this) || this;
        _this.state = 0; // 状态 0 未被连线，1 已被连线
        _this.word = word;
        _this.picture.skin = "HitBalloon/" + pic;
        // 设置图片居中显示
        _this.picture.centerX = 0;
        _this.picture.centerY = 0;
        _this.on(Laya.Event.CLICK, _this, _this.drawLine);
        return _this;
    }
    // 单词和图片连线
    Picture.prototype.drawLine = function () {
        // 如果有气球炸开并且单词未连线完成并且图片未被配对才进行配对
        if (HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0 && this.state == 0) {
            if (this.word == HitBalloon.currentBalloon.word.text) {
                this.state = 1;
                // 画线
                var line = new Sprite();
                Laya.stage.addChild(line);
                var fromX = HitBalloon.currentBalloon.x + HitBalloon.currentBalloon.width / 2;
                var fromY = void 0;
                var toX = this.x + this.width / 2;
                var toY = void 0;
                if (this.position == "top") {
                    fromY = HitBalloon.currentBalloon.y + 50;
                    toY = this.y + this.picture.y + this.picture.height + 10;
                }
                else {
                    fromY = HitBalloon.currentBalloon.y + 100;
                    toY = this.y + this.picture.y - 10;
                }
                HitBalloon.hitBalloonMain.addChild(line);
                line.graphics.drawLine(fromX, fromY, toX, toY, "#07259e", 3);
                this.line = line;
                HitBalloon.currentBalloon.linedNumber++;
                // 单词应配对的图片都已连线，单词完成配对
                if (HitBalloon.currentBalloon.linedNumber == HitBalloon.currentBalloon.getPicNumber()) {
                    HitBalloon.currentBalloon.state = 1;
                    HitBalloon.finishedWordsNumber++;
                    // 所有单词都完成配对，结束游戏
                    if (HitBalloon.finishedWordsNumber == HitBalloon.hitBalloonMain.getBalloonsNumber()) {
                        HitBalloon.hitBalloonMain.replayBtn.skin = "common/replay-abled.png";
                        HitBalloon.hitBalloonMain.replayBtn.removeSelf();
                        HitBalloon.hitBalloonMain.addChild(HitBalloon.hitBalloonMain.replayBtn);
                        HitBalloon.hitBalloonMain.replayText.removeSelf();
                        HitBalloon.hitBalloonMain.addChild(HitBalloon.hitBalloonMain.replayText);
                    }
                }
            }
            else {
                this.shake();
            }
        }
    };
    // 图片晃动
    Picture.prototype.shake = function () {
        Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
            Laya.Tween.to(this.picture, { skewX: 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                    Laya.Tween.to(this.picture, { skewX: 15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                        Laya.Tween.to(this.picture, { skewX: -15 }, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function () {
                            Laya.Tween.to(this.picture, { skewX: 0 }, 50, Laya.Ease.elasticInOut);
                        }));
                    }));
                }));
            }));
        }));
    };
    return Picture;
}(ui.PictureUI));
//# sourceMappingURL=Picture.js.map