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
        // this.wellDone.visible = false;
        // this.wellDoneY = this.wellDone.y;
        // this.wellDoneX = this.wellDone.x;
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
        //this.setting.visible = false;
        if (SpiderAndWord.started) {
            SpiderAndWord.currentSpider.visible = false;
            for (var _i = 0, _a = SpiderAndWord.currentPics; _i < _a.length; _i++) {
                var picture = _a[_i];
                picture.removeSelf();
                picture.destroy();
            }
            SpiderAndWord.spiderAndWordMain.replayBtn.skin = "common/replay-abled.png";
        }
        this.configView.show();
    };
    // 设置设置按钮是否显示
    SpiderAndWordMain.prototype.showSetting = function (state) {
        if (!SpiderAndWord.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    };
    return SpiderAndWordMain;
}(ui.SpiderAndWordUI));
//# sourceMappingURL=SpiderAndWordMain.js.map