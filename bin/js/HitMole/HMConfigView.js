// 配置界面
var HMConfigView = /** @class */ (function () {
    function HMConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.wordLabel = configBox.getChildByName("wordLabel");
        this.picLabel = configBox.getChildByName("picLabel");
        this.wordRadio = configBox.getChildByName("wordRadio");
        this.picRadio = configBox.getChildByName("picRadio");
        this.wordRadioImg = configBox.getChildByName("wordRadioImg");
        this.picRadioImg = configBox.getChildByName("picRadioImg");
        this.textInput = configBox.getChildByName("textInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.wordRadio.on(Laya.Event.CLICK, this, this.switchWord);
        this.wordRadioImg.on(Laya.Event.CLICK, this, this.switchWord);
        this.picRadio.on(Laya.Event.CLICK, this, this.switchPic);
        this.picRadioImg.on(Laya.Event.CLICK, this, this.switchPic);
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 显示配置
    HMConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    HMConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 初始化
    HMConfigView.prototype.init = function () {
        this.game = HitMole.gameConfig.game;
        if (this.game == "word") {
            this.wordRadioImg.skin = "common/img_radio_checked.png";
            this.picRadioImg.skin = "common/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
            this.textInput.text = HitMole.gameConfig.words;
        }
        else if (this.game == "picture") {
            this.wordRadioImg.skin = "common/img_radio_notCheck.png";
            this.picRadioImg.skin = "common/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
            this.textInput.text = HitMole.gameConfig.pictures;
        }
    };
    // 点击单词单选
    HMConfigView.prototype.switchWord = function () {
        if (this.game == "picture") {
            this.game = "word";
            this.wordRadioImg.skin = "common/img_radio_checked.png";
            this.picRadioImg.skin = "common/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
            this.textInput.text = "";
        }
    };
    // 点击图片单选
    HMConfigView.prototype.switchPic = function () {
        if (this.game == "word") {
            this.game = "picture";
            this.wordRadioImg.skin = "common/img_radio_notCheck.png";
            this.picRadioImg.skin = "common/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
            this.textInput.text = "";
        }
    };
    // 提交配置
    HMConfigView.prototype.submit = function () {
        var texts = this.textInput.text.split(",");
        if (texts.length < 2 || texts.length > 12) {
            HitMole.hitMoleMain.showTip((this.game == "word" ? "单词" : "图片") + "个数在2-12之间！");
            return;
        }
        if (this.game == "word") {
            HitMole.gameConfig.game = "word";
            HitMole.gameConfig.words = texts;
            HitMole.gameConfig.pictures = [];
        }
        else if (this.game == "picture") {
            HitMole.gameConfig.game = "picture";
            HitMole.gameConfig.words = [];
            HitMole.gameConfig.pictures = texts;
        }
        HitMole.hitMoleMain.showTip("提交成功！");
        this.hide();
    };
    return HMConfigView;
}());
//# sourceMappingURL=HMConfigView.js.map