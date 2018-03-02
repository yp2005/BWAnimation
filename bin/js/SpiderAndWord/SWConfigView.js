// 配置界面
var HSConfigView = /** @class */ (function () {
    function HSConfigView(configBox) {
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
    HSConfigView.prototype.init = function () {
        var text = SpiderAndWord.gameConfig.word;
        this.textInput.text = text;
    };
    // 显示配置
    HSConfigView.prototype.show = function () {
        this.init();
        this.configBox.visible = true;
    };
    // 隐藏配置
    HSConfigView.prototype.hide = function () {
        this.configBox.visible = false;
    };
    // 提交配置
    HSConfigView.prototype.submit = function () {
        var text = this.textInput.text;
        var wordArr = ["ugly", "beautiful", "happy", "sad", "old", "young"];
        if (wordArr.indexOf(text) == -1) {
            SpiderAndWord.spiderAndWordMain.showTip("正确单词只能是ugly，beautiful，happy，sad，old，young中的一个");
            return;
        }
        SpiderAndWord.gameConfig.word = text;
        SpiderAndWord.spiderAndWordMain.showTip("提交成功！");
        SpiderAndWord.spiderAndWordMain.showSetting(true);
        this.hide();
    };
    return HSConfigView;
}());
//# sourceMappingURL=SWConfigView.js.map