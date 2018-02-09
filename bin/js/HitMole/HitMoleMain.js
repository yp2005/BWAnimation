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
var HitMoleMain = /** @class */ (function (_super) {
    __extends(HitMoleMain, _super);
    function HitMoleMain() {
        var _this = _super.call(this) || this;
        _this.hammer = new Hammer();
        _this.hammer.visible = false;
        _this.wellDone.visible = false;
        _this.wellDoneY = _this.wellDone.y;
        _this.wellDoneX = _this.wellDone.x;
        _this.configView = new ConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.addChild(_this.hammer);
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        return _this;
    }
    // 显示提示
    HitMoleMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    HitMoleMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    HitMoleMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    HitMoleMain.prototype.showSetting = function (state) {
        this.setting.visible = state;
    };
    // 显示锤子，出现捶打效果
    HitMoleMain.prototype.showHammer = function (mole) {
        this.hammer.visible = true;
        this.hammer.play(mole.x + 70, mole.y - 20);
        Laya.timer.once(1000, this, this.hidHammer);
    };
    // 隐藏锤子
    HitMoleMain.prototype.hidHammer = function () {
        this.hammer.visible = false;
    };
    // 显示well done文字效果
    HitMoleMain.prototype.showWellDone = function (that, callBack) {
        this.wellDone.y = this.wellDoneY;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100 }, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    };
    return HitMoleMain;
}(ui.HitMoleUI));
//# sourceMappingURL=HitMoleMain.js.map