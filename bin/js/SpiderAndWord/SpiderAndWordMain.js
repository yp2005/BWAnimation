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
var SpiderAndWordMain = /** @class */ (function (_super) {
    __extends(SpiderAndWordMain, _super);
    function SpiderAndWordMain() {
        var _this = _super.call(this) || this;
        _this.wellDone.visible = false;
        _this.wellDoneY = _this.wellDone.y;
        _this.wellDoneX = _this.wellDone.x;
        _this.configView = new HSConfigView(_this.configBox);
        _this.tip.visible = false;
        _this.setting.on(Laya.Event.CLICK, _this, _this.showConfigView);
        if (SpiderAndWord.gameConfig.gameModel) {
            _this.setting.visible = false;
        }
        return _this;
    }
    // 显示提示
    SpiderAndWordMain.prototype.showTip = function (text) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    SpiderAndWordMain.prototype.hideTip = function () {
        this.tip.visible = false;
    };
    // 显示游戏配置页面 
    SpiderAndWordMain.prototype.showConfigView = function () {
        this.setting.visible = false;
        if (SpiderAndWord.started) {
            SpiderAndWord.currentSpider.visible = false;
            for (var _i = 0, _a = SpiderAndWord.currentPics; _i < _a.length; _i++) {
                var picture = _a[_i];
                picture.removeSelf();
                picture.destroy();
            }
            SpiderAndWord.spiderAndWordMain.replayBtn.visible = true;
        }
        this.configView.show();
    };
    // 设置设置按钮是否显示
    SpiderAndWordMain.prototype.showSetting = function (state) {
        if (!SpiderAndWord.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    // 游戏结束
    SpiderAndWordMain.prototype.gameOver = function () {
        // 显示well done文字效果
        this.wellDone.y = this.wellDoneY;
        console.log("2222");
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100 }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
    };
    // 显示well done文字效果
    SpiderAndWordMain.prototype.showWellDone = function (that, callBack) {
        this.wellDone.y = this.wellDoneY + this.wellDone.height;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30 }, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    };
    // 重置游戏为初始状态
    SpiderAndWordMain.prototype.reset = function () {
        this.wellDone.visible = false;
        this.showSetting(true);
    };
    return SpiderAndWordMain;
}(ui.SpiderAndWordUI));
//# sourceMappingURL=SpiderAndWordMain.js.map