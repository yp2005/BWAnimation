// 配置界面
var HBConfigView = /** @class */ (function () {
    function HBConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    HBConfigView.prototype.init = function () {
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
        var texts = this.textInput.text.split(";");
        if (texts.length < 1 || texts.length > 8) {
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
        if (picNum < 1 || picNum > 10) {
            HitBalloon.hitBalloonMain.showTip("图片个数在1-10之间！");
            return;
        }
        HitBalloon.gameConfig.words = words;
        HitBalloon.hitBalloonMain.showTip("提交成功！");
        this.hide();
    };
    return HBConfigView;
}());
//# sourceMappingURL=HSConfigView.js.map