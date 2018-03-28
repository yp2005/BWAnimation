// 配置界面
class HBConfigView {
    private configBox: Laya.Box; // 配置页面容器
    private textInput: Laya.TextInput; // 单词输入框
    private backgroundImg: Laya.TextInput; // 背景图输入框
    private threeLineRadio: Laya.Label; // 布局选项三行
    private twoLineRadio: Laya.Label; // 布局选项两行
    private threeLineRadioImg: Laya.Image; // 布局选项三行单选按钮图片
    private twoLineRadioImg: Laya.Image; // 布局选项两行单选按钮图片
    private submitBtn: Laya.Image; // 提交按钮
    private closeBtn: Laya.Text; // 关闭按钮
    private layout: number; // 当前布局

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        // 初始化配置页面元素
        this.textInput = configBox.getChildByName("textInput") as Laya.TextInput;
        this.backgroundImg = configBox.getChildByName("backgroundImg") as Laya.TextInput;
        this.threeLineRadio = configBox.getChildByName("threeLineRadio") as Laya.Label;
        this.twoLineRadio = configBox.getChildByName("twoLineRadio") as Laya.Label;
        this.threeLineRadioImg = configBox.getChildByName("threeLineRadioImg") as Laya.Image;
        this.twoLineRadioImg = configBox.getChildByName("twoLineRadioImg") as Laya.Image;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
        // 添加事件监听
        this.submitBtn.on(Laya.Event.CLICK, this, this.submit);
        this.closeBtn.on(Laya.Event.CLICK, this, this.hide);
        this.threeLineRadio.on(Laya.Event.CLICK, this, this.threeLine);
        this.threeLineRadioImg.on(Laya.Event.CLICK, this, this.threeLine);
        this.twoLineRadio.on(Laya.Event.CLICK, this, this.twoLine);
        this.twoLineRadioImg.on(Laya.Event.CLICK, this, this.twoLine);
    }

    // 切换三行布局
    private threeLine() {
        if(this.layout == 2) {
            this.layout = 3;         
            this.threeLineRadioImg.skin = "common/img_radio_checked.png";
            this.twoLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
    }

    // 切换二行布局
    private twoLine() {
        if(this.layout == 3) {
            this.layout = 2;         
            this.twoLineRadioImg.skin = "common/img_radio_checked.png";
            this.threeLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
    }

    // 初始化
    private init() {
        this.layout = HitBalloon.gameConfig.layout;
        if(this.layout == 2) {      
            this.twoLineRadioImg.skin = "common/img_radio_checked.png";
            this.threeLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
        else if(this.layout == 3) {
            this.threeLineRadioImg.skin = "common/img_radio_checked.png";
            this.twoLineRadioImg.skin = "common/img_radio_notCheck.png";
        }
        this.backgroundImg.text = HitBalloon.gameConfig.backgroundImg;
        let text = "";
        for(let word of HitBalloon.gameConfig.words) {
            if(text == "") {
                text = word.word + ":";
            }
            else {
                text += ";" + word.word + ":";
            }
            let pictures = "";
            for(let picture of word.pictures) {
                if(pictures == "") {
                    pictures = picture;
                }
                else {
                    pictures += "," + picture;
                }
            }
            text += pictures;
        }
        this.textInput.text = text;
    }

    // 显示配置
    public show() {
        this.init();
        this.configBox.visible = true;
        this.configBox.removeSelf()
        HitBalloon.hitBalloonMain.addChild(this.configBox);
    }

    // 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

    // 提交配置
    private submit() {
        if(!this.backgroundImg.text) {
            HitBalloon.hitBalloonMain.showTip("请输入背景图！");
            return;
        }
        let texts = this.textInput.text.split(";");
        if(this.layout == 2 && (texts.length < 1 || texts.length > 6)) {
            HitBalloon.hitBalloonMain.showTip("单词个数在1-6之间！");
            return;
        }
        else if(this.layout == 3 && (texts.length < 1 || texts.length > 8)) {
            HitBalloon.hitBalloonMain.showTip("单词个数在1-8之间！");
            return;
        }
        let words = [];
        let picNum = 0;
        for(let text of texts) {
            let textSp = text.split(":");
            if(textSp.length != 2 || textSp[0] == "" || textSp[1] == "") {
                 HitBalloon.hitBalloonMain.showTip("配置格式错误，请参考示例！");
                return;
            }
            let pictures = textSp[1].split(",");
            words.push({
                word: textSp[0],
                pictures: pictures
            });
            picNum += pictures.length;
        }
        if(this.layout == 2 && (picNum < 1 || picNum > 6)) {
            HitBalloon.hitBalloonMain.showTip("图片个数在1-6之间！");
            return;
        }
        else if(this.layout == 3 && (picNum < 1 || picNum > 10)) {
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
    }
}