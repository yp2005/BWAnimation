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
var HitSpiderMain = /** @class */ (function (_super) {
    __extends(HitSpiderMain, _super);
    function HitSpiderMain() {
        var _this = _super.call(this) || this;
        _this.wellDone.visible = false;
        _this.wellDoneY = _this.wellDone.y;
        _this.wellDoneX = _this.wellDone.x;
        return _this;
        // this.configView = new HBConfigView(this.configBox);
        // this.tip.visible = false;
        // this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        // if(HitBalloon.gameConfig.gameModel) {
        //     this.setting.visible = false;    
        // }
    }
    // 显示提示
    HitSpiderMain.prototype.showTip = function (text) {
        // this.tip.text = text;
        // this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    HitSpiderMain.prototype.hideTip = function () {
        // this.tip.visible = false;
    };
    // 显示游戏配置页面 
    HitSpiderMain.prototype.showConfigView = function () {
        this.configView.show();
    };
    // 设置设置按钮是否显示
    HitSpiderMain.prototype.showSetting = function (state) {
        // if(!HitBalloon.gameConfig.gameModel) {
        //     this.setting.visible = state;
        // }
    };
    // 游戏结束
    HitSpiderMain.prototype.gameOver = function () {
        // 显示well done文字效果
        this.wellDone.y = this.wellDoneY;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100 }, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
    };
    // 重置游戏为初始状态
    HitSpiderMain.prototype.reset = function () {
        this.wellDone.visible = false;
        // for(let balloon of this.balloons) {
        //     balloon.removeSelf();
        //     balloon.destroy();
        // }
        // for(let picture of this.pictures) {
        //     picture.line.removeSelf();
        //     picture.line.destroy();
        //     picture.removeSelf();
        //     picture.destroy();
        // }
        HitSpider.hitSpiderMain.replayBtn.visible = true;
        // this.showSetting(true);
    };
    return HitSpiderMain;
}(ui.HitSpiderUI));
//# sourceMappingURL=HitSpiderMain.js.map