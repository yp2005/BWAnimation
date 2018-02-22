// 配置界面
var ConfigView = /** @class */ (function () {
    function ConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        this.wordLabel = configBox.getChildByName("wordLabel");
        this.picLabel = configBox.getChildByName("picLabel");
        this.wordRadio = configBox.getChildByName("wordRadio");
        this.picRadio = configBox.getChildByName("picRadio");
        this.wordRadioImg = configBox.getChildByName("wordRadioImg");
        this.picRadioImg = configBox.getChildByName("picRadioImg");
        this.textInput = configBox.getChildByName("textInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        this.game = HitMole.gameConfig.game;
        this.resetSwich();
        this.wordRadio.on(Laya.Event.CLICK, this, this.switchWord);
        this.wordRadioImg.on(Laya.Event.CLICK, this, this.switchWord);
        this.picRadio.on(Laya.Event.CLICK, this, this.switchPic);
        this.picRadioImg.on(Laya.Event.CLICK, this, this.switchPic);
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 显示配置
    ConfigView.prototype.show = function () {
        this.configBox.visible = true;
    };
    // 隐藏配置
    ConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 复位配置面板
    ConfigView.prototype.resetSwich = function () {
        if (this.game == "word") {
            this.wordRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
        }
        else if (this.game == "picture") {
            this.wordRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
        }
    };
    // 点击单词单选
    ConfigView.prototype.switchWord = function () {
        if (this.game == "picture") {
            this.game = "word";
            HitMole.gameConfig.game = "word";
            this.wordRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
        }
    };
    // 点击图片单选
    ConfigView.prototype.switchPic = function () {
        if (this.game == "word") {
            this.game = "picture";
            HitMole.gameConfig.game = "picture";
            this.wordRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
        }
    };
    // 提交配置
    ConfigView.prototype.submit = function () {
        var texts = this.textInput.text.split(",");
        if (texts.length < 2 || texts.length > 12) {
            HitMole.hitMoleMain.showTip((this.game == "word" ? "单词" : "图片") + "个数在2-12之间！");
            return;
        }
        if (this.game == "word") {
            HitMole.gameConfig.words = texts;
            HitMole.gameConfig.pictures = [];
        }
        else if (this.game == "picture") {
            HitMole.gameConfig.words = [];
            HitMole.gameConfig.pictures = texts;
        }
        HitMole.hitMoleMain.showTip("提交成功！");
        this.hide();
    };
    return ConfigView;
}());
//# sourceMappingURL=ConfigView.js.map