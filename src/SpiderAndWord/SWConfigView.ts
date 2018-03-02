// 配置界面
class HSConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private textInput: Laya.TextInput; // 正确单词输入框
    private wordNum: Laya.TextInput; // 单词个数输入框
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput") as Laya.TextInput;
        this.wordNum = configBox.getChildByName("wordNum") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
    }

    // 初始化
    private init() {
        let text = SpiderAndWord.gameConfig.word;
        this.textInput.text = text;
        this.wordNum.text = SpiderAndWord.gameConfig.wordNum;
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
        let text = this.textInput.text;
        let num = this.wordNum.text;
        let wordArr = ["ugly","beautiful","happy","sad","old","young"];
        if(wordArr.indexOf(text) == -1) {
            SpiderAndWord.spiderAndWordMain.showTip("正确单词只能是ugly，beautiful，happy，sad，old，young中的一个");
            return;
        }
        if(!/^[2-8]*$/.test(num)) {
            SpiderAndWord.spiderAndWordMain.showTip("单词个数只能是2-8");
            return;
        }

        SpiderAndWord.gameConfig.wordNum = parseInt(num);
        SpiderAndWord.gameConfig.word = text;
        SpiderAndWord.spiderAndWordMain.showTip("提交成功！");
        SpiderAndWord.spiderAndWordMain.showSetting(true);
        this.hide();
    }
}