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
// 鱼类
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(picNo, word) {
        var _this = _super.call(this) || this;
        _this.fishImg.skin = "HitFish/fish-" + picNo + ".png";
        var isred = (word.indexOf('.png') !== -1);
        if (isred) {
            _this.wordBg.skin = "HitFish/" + word;
            _this.fishWord.text = "";
        }
        else {
            _this.fishWord.text = word;
        }
        _this.reset();
        _this.fishImg.on(Laya.Event.CLICK, _this, _this.showWord);
        _this.wordBg.on(Laya.Event.CLICK, _this, _this.hideWord);
        //默认单词未被答中
        _this.isRight = false;
        return _this;
    }
    // 显示单词
    Fish.prototype.showWord = function () {
        this.fishImg.visible = false;
        this.wordBg.visible = true;
        this.fishWord.visible = true;
        HitFish.hitFishMain.startCount();
        this.isRight = true;
    };
    // 隐藏单词
    Fish.prototype.hideWord = function () {
        this.fishImg.visible = true;
        this.wordBg.visible = false;
        this.fishWord.visible = false;
        HitFish.hitFishMain.stopCount();
        this.isRight = false;
    };
    // 重置状态
    Fish.prototype.reset = function () {
        this.fishImg.visible = true;
        this.wordBg.visible = false;
        this.fishWord.visible = false;
    };
    // 设置显示的单词
    Fish.prototype.setText = function (text) {
        this.fishWord.text = text;
    };
    return Fish;
}(ui.FishUI));
//# sourceMappingURL=Fish.js.map