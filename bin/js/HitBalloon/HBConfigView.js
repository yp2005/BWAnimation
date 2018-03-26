// 配置界面
var HBConfigView = /** @class */ (function () {
    function HBConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput");
        this.backgroundImg = configBox.getChildByName("backgroundImg");
        this.threeLineRadio = configBox.getChildByName("threeLineRadio");
        this.twoLineRadio = configBox.getChildByName("twoLineRadio");
        this.threeLineRadioImg = configBox.getChildByName("threeLineRadioImg");
        this.twoLineRadioImg = configBox.getChildByName("twoLineRadioImg");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
        this.threeLineRadio.on(Laya.Event.CLICK, this, this.threeLine);
        this.threeLineRadioImg.on(Laya.Event.CLICK, this, this.threeLine);
        this.twoLineRadio.on(Laya.Event.CLICK, this, this.twoLine);
        this.twoLineRadioImg.on(Laya.Event.CLICK, this, this.twoLine);
    }
    // 切换三行布局
    HBConfigView.prototype.threeLine = function () {
        if (this.layout == 2) {
            this.layout = 3;
            this.threeLineRadioImg.skin = "common/img_radio_checked.png";
            this.twoLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
    };
    // 切换二行布局
    HBConfigView.prototype.twoLine = function () {
        if (this.layout == 3) {
            this.layout = 2;
            this.twoLineRadioImg.skin = "common/img_radio_checked.png";
            this.threeLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
    };
    // 初始化
    HBConfigView.prototype.init = function () {
        this.layout = HitBalloon.gameConfig.layout;
        if (this.layout == 2) {
            this.twoLineRadioImg.skin = "common/img_radio_checked.png";
            this.threeLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
        else if (this.layout == 3) {
            this.threeLineRadioImg.skin = "common/img_radio_checked.png";
            this.twoLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
        this.backgroundImg.text = HitBalloon.gameConfig.backgroundImg;
        var text = "";
        for (var _i = 0, _a = HitBalloon.gameConfig.words; _i < _a.length; _i++) {
            var word = _a[_i];
            if (text == "") {
                text = word.word + ":";
            }
            else {
                text += ";" + word.word + ":";
            }
            var pictures = "";
            for (var _b = 0, _c = word.pictures; _b < _c.length; _b++) {
                var picture = _c[_b];
                if (pictures == "") {
                    pictures = picture;
                }
                else {
                    pictures += "," + picture;
                }
            }
            text += pictures;
        }
        this.textInput.text = text;
    };
    // 显示配置
    HBConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    HBConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    HBConfigView.prototype.submit = function () {
        if (!this.backgroundImg.text) {
            HitBalloon.hitBalloonMain.showTip("请输入背景图！");
            return;
        }
        var texts = this.textInput.text.split(";");
        if (this.layout == 2 && (texts.length < 1 || texts.length > 6)) {
            HitBalloon.hitBalloonMain.showTip("单词个数在1-6之间！");
            return;
        }
        else if (this.layout == 3 && (texts.length < 1 || texts.length > 8)) {
            HitBalloon.hitBalloonMain.showTip("单词个数在1-8之间！");
            return;
        }
        var words = [];
        var picNum = 0;
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var text = texts_1[_i];
            var textSp = text.split(":");
            if (textSp.length != 2 || textSp[0] == "" || textSp[1] == "") {
                HitBalloon.hitBalloonMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            var pictures = textSp[1].split(",");
            words.push({
                word: textSp[0],
                pictures: pictures
            });
            picNum += pictures.length;
        }
        if (this.layout == 2 && (picNum < 1 || picNum > 6)) {
            HitBalloon.hitBalloonMain.showTip("图片个数在1-6之间！");
            return;
        }
        else if (this.layout == 3 && (picNum < 1 || picNum > 10)) {
            HitBalloon.hitBalloonMain.showTip("图片个数在1-10之间！");
            return;
        }
        HitBalloon.gameConfig = {
            gameModel: false,
            backgroundImg: this.backgroundImg.text,
            layout: this.layout,
            words: words
        };
        HitBalloon.hitBalloonMain.showTip("提交成功！");
        HitBalloon.hitBalloonMain.bg.skin = "HitBalloon/" + this.backgroundImg.text;
        this.hide();
    };
    return HBConfigView;
}());
//# sourceMappingURL=HBConfigView.js.map