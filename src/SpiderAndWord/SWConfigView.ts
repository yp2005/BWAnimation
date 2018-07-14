// 配置界面
class HSConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private wordNum: Laya.TextInput; // 单词个数输入框
    private rightNum: Laya.TextInput; // 单词个数输入框
    private rightWord: Laya.TextInput; // 正确单词输入框
    private wrongWord: Laya.TextInput; // 正确单词输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.rightWord = configBox.getChildByName("rightWord") as Laya.TextInput;
        this.wrongWord = configBox.getChildByName("wrongWord") as Laya.TextInput;
        this.wordNum = configBox.getChildByName("wordNum") as Laya.TextInput;
        this.rightNum = configBox.getChildByName("rightNum") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        let rightWord = SpiderAndWord.gameConfig.rightWord;
        let wrongWord = SpiderAndWord.gameConfig.wrongWord;
        let rightnum = SpiderAndWord.gameConfig.rightNum;
        let wordNum = SpiderAndWord.gameConfig.wordNum;
        this.rightWord.text = rightWord;
        this.wrongWord.text = wrongWord;
        this.rightNum.text = rightnum;
        this.wordNum.text = wordNum;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        let rightWord = this.rightWord.text;
        let wrongWord = this.wrongWord.text;
        let wordNum = this.wordNum.text;
        let rightNum = this.rightNum.text;
        let wordArr = ["ugly", "beautiful", "happy", "sad", "old", "young"];
        let tipWords = [];

        if (!/^[2-8]$/.test(wordNum)) {
            SpiderAndWord.spiderAndWordMain.showTip("图片总数只能是2-8");
            return;
        }
        if (!/^[1-8]$/.test(rightNum)) {
            SpiderAndWord.spiderAndWordMain.showTip("正确图数必须不小于1，并且不大于图片总数");
            return;
        }
        let wordNum1 = parseInt(wordNum);
        let rightNum1 = parseInt(rightNum);
        // 正确图数必须不小于1，并且不大于图片总数
        if (rightNum1 > wordNum1) {
            SpiderAndWord.spiderAndWordMain.showTip("正确图数必须不小于1，并且不大于图片总数");
            return;
        }

        if (!rightWord) {
            SpiderAndWord.spiderAndWordMain.showTip("请输入正确单词");
            return;
        }

        let rightpics = SpiderAndWord.wordNums[rightWord];
        if (rightpics) {
            if (rightNum1 > rightpics) {
                SpiderAndWord.spiderAndWordMain.showTip(rightWord + " 对应的图片不足");
                return;
            }
        } else {
            SpiderAndWord.spiderAndWordMain.showTip("不存在单词 " + rightWord + " 所对应的图片");
            return;
        }

        if (wrongWord) {
            let wrongpics = SpiderAndWord.wordNums[wrongWord];
            let wrongNum1 = wordNum1 - rightNum1;
            if (wrongpics) {
                if (wrongNum1 > wrongpics) {
                    SpiderAndWord.spiderAndWordMain.showTip(wrongWord + " 对应的图片不足");
                    return;
                }
            } else {
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
    }
}