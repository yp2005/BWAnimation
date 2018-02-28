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
var Balloon = /** @class */ (function (_super) {
    __extends(Balloon, _super);
    function Balloon(word, picNumber) {
        var _this = _super.call(this) || this;
        _this.linedNumber = 0; // 单词已连线图片数量
        _this.word.text = word;
        _this.picNumber = picNumber;
        _this.word.visible = false;
        _this.picture.on(Laya.Event.CLICK, _this, _this.hit);
        Laya.timer.once(Math.floor(Math.random() * 1000), _this, _this.doShake);
        return _this;
    }
    // 气球受到拍打
    Balloon.prototype.hit = function () {
        // 如果有气球已经炸开还没完成图片连线，不炸开气球
        if (HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0) {
            return;
        }
        this.picture.off(Laya.Event.CLICK, this, this.hit);
        HitBalloon.currentBalloon = this;
        // 停止气球晃动，炸开气球显示单词
        this.shake.stop();
        this.blast.play(0, false);
        Laya.timer.once(1200, this, this.showWord);
    };
    // 显示单词
    Balloon.prototype.showWord = function () {
        this.picture.visible = false;
        this.word.visible = true;
        this.state = 0;
    };
    // 晃动气球
    Balloon.prototype.doShake = function () {
        this.shake.play(0, true);
    };
    // 获取单词对应的图片数量
    Balloon.prototype.getPicNumber = function () {
        return this.picNumber;
    };
    return Balloon;
}(ui.BalloonUI));
//# sourceMappingURL=Balloon.js.map