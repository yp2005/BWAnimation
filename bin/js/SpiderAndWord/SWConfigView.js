// 配置界面
var HSConfigView = /** @class */ (function () {
    function HSConfigView(configBox) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.rightWord = configBox.getChildByName("rightWord");
        this.wrongWord = configBox.getChildByName("wrongWord");
        this.wordNum = configBox.getChildByName("wordNum");
        this.rightNum = configBox.getChildByName("rightNum");
        this.submitBtn = configBox.getChildByName("submitBtn");
        this.closeBtn = configBox.getChildByName("closeBtn");
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }
    // 初始化
    HSConfigView.prototype.init = function () {
        var rightWord = SpiderAndWord.gameConfig.rightWord;
        var wrongWord = SpiderAndWord.gameConfig.wrongWord;
        var rightnum = SpiderAndWord.gameConfig.rightNum;
        var wordNum = SpiderAndWord.gameConfig.wordNum;
        this.rightWord.text = rightWord;
        this.wrongWord.text = wrongWord;
        this.rightNum.text = rightnum;
        this.wordNum.text = wordNum;
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
        var rightWord = this.rightWord.text;
        var wrongWord = this.wrongWord.text;
        var wordNum = this.wordNum.text;
        var rightNum = this.rightNum.text;
        var wordArr = ["ugly", "beautiful", "happy", "sad", "old", "young"];
        var tipWords = [];
        if (!/^[2-8]$/.test(wordNum)) {
            SpiderAndWord.spiderAndWordMain.showTip("图片总数只能是2-8");
            return;
        }
        if (!/^[1-8]$/.test(rightNum)) {
            SpiderAndWord.spiderAndWordMain.showTip("正确图数必须不小于1，并且不大于图片总数");
            return;
        }
        var wordNum1 = parseInt(wordNum);
        var rightNum1 = parseInt(rightNum);
        // 正确图数必须不小于1，并且不大于图片总数
        if (rightNum1 > wordNum1) {
            SpiderAndWord.spiderAndWordMain.showTip("正确图数必须不小于1，并且不大于图片总数");
            return;
        }
        if (!rightWord) {
            SpiderAndWord.spiderAndWordMain.showTip("请输入正确单词");
            return;
        }
        var rightpics = SpiderAndWord.wordNums[rightWord];
        if (rightpics) {
            if (rightNum1 > rightpics) {
                SpiderAndWord.spiderAndWordMain.showTip(rightWord + " 对应的图片不足");
                return;
            }
        }
        else {
            SpiderAndWord.spiderAndWordMain.showTip("不存在单词 " + rightWord + " 所对应的图片");
            return;
        }
        if (wrongWord) {
            var wrongpics = SpiderAndWord.wordNums[wrongWord];
            var wrongNum1 = wordNum1 - rightNum1;
            if (wrongpics) {
                if (wrongNum1 > wrongpics) {
                    SpiderAndWord.spiderAndWordMain.showTip(wrongWord + " 对应的图片不足");
                    return;
                }
            }
            else {
                SpiderAndWord.spiderAndWordMain.showTip("不存在单词 " + wrongWord + " 所对应的图片");
                return;
            }
        }
        SpiderAndWord.gameConfig.wordNum = wordNum1;
        SpiderAndWord.gameConfig.rightNum = rightNum1;
        SpiderAndWord.gameConfig.rightWord = rightWord;
        SpiderAndWord.gameConfig.wrongWord = wrongWord;
        SpiderAndWord.spiderAndWordMain.showTip("提交成功！");
        SpiderAndWord.spiderAndWordMain.showSetting(true);
        this.hide();
        SpiderAndWord.restart();
    };
    return HSConfigView;
}());
//# sourceMappingURL=SWConfigView.js.map