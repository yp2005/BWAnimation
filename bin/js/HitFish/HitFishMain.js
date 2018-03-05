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
var HitFishMain = /** @class */ (function (_super) {
    __extends(HitFishMain, _super);
    function HitFishMain() {
        var _this = _super.call(this) || this;
        _this.initConfig();
        _this.wellDone.visible = false;
        _this.wellDoneY = _this.wellDone.y;
        _this.wellDoneX = _this.wellDone.x;
        return _this;
    }
    // 初始化配置
    HitFishMain.prototype.initConfig = function () {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = !HitFish.gameConfig.gameModel;
        this.fishConfigBtn.on(Laya.Event.CLICK, this, this.showConfig);
        this.fishSubmitBtn.on(Laya.Event.CLICK, this, this.submitConfig);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hideConfig);
        var leftTxt = "", rightTxt = "";
        if (HitFish.gameConfig.leftWords) {
            leftTxt = HitFish.gameConfig.leftWords.join(",");
        }
        if (HitFish.gameConfig.rightWords) {
            rightTxt = HitFish.gameConfig.rightWords.join(",");
        }
        this.leftInput.text = leftTxt;
        this.rightInput.text = rightTxt;
    };
    // 提交配置
    HitFishMain.prototype.submitConfig = function () {
        var lefts = this.leftInput.text.split(",");
        var rights = this.rightInput.text.split(",");
        if (lefts.length < 1 || lefts.length > 6 || rights.length < 1 || rights.length > 6) {
            this.showTip("左右两边单词个数分别在1-6之间");
            return;
        }
        HitFish.gameConfig.leftWords = lefts;
        HitFish.gameConfig.rightWords = rights;
        this.showTip("提交成功！");
        this.hideConfig();
    };
    // 开始倒数
    HitFishMain.prototype.startCount = function () {
        this.theCounter.visible = true;
        this.theCounter.play();
        Laya.SoundManager.stopAllSound();
        Laya.SoundManager.playSound("res/audio/fish_count.mp3", 1);
    };
    // 停止倒数
    HitFishMain.prototype.stopCount = function () {
        this.theCounter.stop();
        this.theCounter.visible = false;
        Laya.SoundManager.stopAllSound();
    };
    // 显示提示
    HitFishMain.prototype.showTip = function (text) {
        this.fishTip.text = text;
        this.fishTip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    };
    // 隐藏提示
    HitFishMain.prototype.hideTip = function () {
        this.fishTip.visible = false;
    };
    // 显示游戏配置页面 
    HitFishMain.prototype.showConfig = function () {
        this.fishConfig.visible = true;
        this.fishConfigBtn.visible = false;
    };
    // 隐藏游戏配置页面 
    HitFishMain.prototype.hideConfig = function () {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = true;
    };
    // 显示游戏配置页按钮
    HitFishMain.prototype.showSetting = function (state) {
        if (!HitFish.gameConfig.gameModel) {
            this.fishConfigBtn.visible = state;
        }
    };
    // 显示well done文字效果
    HitFishMain.prototype.showWellDone = function (that, callBack) {
        this.wellDone.y = this.wellDoneY + this.wellDone.height;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, { scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30 }, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    };
    return HitFishMain;
}(ui.HitFishUI));
//# sourceMappingURL=HitFishMain.js.map