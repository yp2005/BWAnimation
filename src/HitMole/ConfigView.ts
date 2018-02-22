// 配置界面
class ConfigView {
    private configBox: Laya.Box;
    private wordLabel: Laya.Label;
    private picLabel: Laya.Label;
    private wordRadio: Laya.Label;
    private picRadio: Laya.Label;
    private wordRadioImg: Laya.Image;
    private picRadioImg: Laya.Image;
    private textInput: Laya.TextInput;
    private submitBtn: Laya.Image;
    private game: string;
    private closeBtn: Laya.Text;

    constructor(configBox: Laya.Box) {
        this.configBox = configBox;
        this.hide();
        this.wordLabel = configBox.getChildByName("wordLabel") as Laya.Label;
        this.picLabel = configBox.getChildByName("picLabel") as Laya.Label;
        this.wordRadio = configBox.getChildByName("wordRadio") as Laya.Label;
        this.picRadio = configBox.getChildByName("picRadio") as Laya.Label;
        this.wordRadioImg = configBox.getChildByName("wordRadioImg") as Laya.Image;
        this.picRadioImg = configBox.getChildByName("picRadioImg") as Laya.Image;
        this.textInput = configBox.getChildByName("textInput") as Laya.TextInput;
        this.submitBtn = configBox.getChildByName("submitBtn") as Laya.Image;
        this.closeBtn = configBox.getChildByName("closeBtn") as Laya.Text;
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
    public show() {
        this.configBox.visible = true;
    }

// 隐藏配置
    public hide() {
        this.configBox.visible = false;
    }

// 复位配置面板
    private resetSwich(){
        if(this.game == "word") {
            this.wordRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
        }
        else if (this.game == "picture"){
            this.wordRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
        }
    }

// 点击单词单选
    private switchWord() {
        if(this.game == "picture") {
            this.game = "word";
            HitMole.gameConfig.game = "word";
            this.wordRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picLabel.visible = false;
            this.wordLabel.visible = true;
        }
    }

// 点击图片单选
    private switchPic() {
        if(this.game == "word") {
            this.game = "picture";
            HitMole.gameConfig.game = "picture";
            this.wordRadioImg.skin = "HitMole/img_radio_notCheck.png";
            this.picRadioImg.skin = "HitMole/img_radio_checked.png";
            this.picLabel.visible = true;
            this.wordLabel.visible = false;
        }
    }

// 提交配置
    private submit() {
        let texts = this.textInput.text.split(",");
        if(texts.length < 2 || texts.length > 12) {
            HitMole.hitMoleMain.showTip((this.game == "word" ? "单词" : "图片") + "个数在2-12之间！");
            return;
        }
        if(this.game == "word") {
            HitMole.gameConfig.words = texts;
            HitMole.gameConfig.pictures = [];
        }
        else if (this.game == "picture"){
            HitMole.gameConfig.words = [];
            HitMole.gameConfig.pictures = texts;

        }
        HitMole.hitMoleMain.showTip("提交成功！");
        this.hide();
    }
}