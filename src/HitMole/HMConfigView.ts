// 配置界面
class HMConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private wordLabel: Laya.Label; // 单词标签
    private picLabel: Laya.Label; // 图片标签
    private wordRadio: Laya.Label; // 单词选择项
    private picRadio: Laya.Label; // 图片选择项
    private wordRadioImg: Laya.Image; // 单词选择项的显示选择状态的图片
    private picRadioImg: Laya.Image; // 图片选择项的显示选择状态的图片
    private textInput: Laya.TextInput; // 输入框
    private submitBtn: Laya.Image; // 提交按钮
    private game: string; // 游戏名称
    private closeBtn: Laya.Text; // 关闭按钮

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.wordLabel = configBox.getChildByName("wordLabel") as Laya.Label;
        this.picLabel = configBox.getChildByName("picLabel") as Laya.Label;
        this.wordRadio = configBox.getChildByName("wordRadio") as Laya.Label;
        this.picRadio = configBox.getChildByName("picRadio") as Laya.Label;
        this.wordRadioImg = configBox.getChildByName("wordRadioImg") as Laya.Image;
        this.picRadioImg = configBox.getChildByName("picRadioImg") as Laya.Image;
        this.textInput = configBox.getChildByName("textInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.wordRadio.on(Laya.Event.CLICK, this, this.switchWord);
        this.wordRadioImg.on(Laya.Event.CLICK, this, this.switchWord);
        this.picRadio.on(Laya.Event.CLICK, this, this.switchPic);
        this.picRadioImg.on(Laya.Event.CLICK, this, this.switchPic);
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
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

    // 初始化
    private init() {
        this.game = HitMole.gameConfig.game;
        if(this.game == "word") {
            this.wordRadioImg.skin = "common/img_radio_checked.png";
            this.picRadioImg.skin = "common/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
            this.textInput.text = HitMole.gameConfig.words;
        }
        else if (this.game == "picture"){
            this.wordRadioImg.skin = "common/img_radio_notCheck.png";
            this.picRadioImg.skin = "common/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
            this.textInput.text = HitMole.gameConfig.pictures;
        }
    }

    // 点击单词单选
    private switchWord() {
        if(this.game == "picture") {
            this.game = "word";         
            this.wordRadioImg.skin = "common/img_radio_checked.png";
            this.picRadioImg.skin = "common/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
            this.textInput.text = "";
        }
    }

    // 点击图片单选
    private switchPic() {
        if(this.game == "word") {
            this.game = "picture";
            this.wordRadioImg.skin = "common/img_radio_notCheck.png";
            this.picRadioImg.skin = "common/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
            this.textInput.text = "";
        }
    }

    // 提交配置
    private submit() {
        let texts = this.textInput.text.split(",");
        if(texts.length < 2) {
            HitMole.hitMoleMain.showTip((this.game == "word" ? "单词" : "图片") + "个数须大于2！");
            return;
        }
        if(this.game == "word") {
            HitMole.gameConfig.game = "word";
            HitMole.gameConfig.words = texts;
            HitMole.gameConfig.pictures = [];
        }
        else if (this.game == "picture"){
            HitMole.gameConfig.game = "picture";
            HitMole.gameConfig.words = [];
            HitMole.gameConfig.pictures = texts;

        }
        HitMole.hitMoleMain.showTip("提交成功！");
        this.hide();
    }
}