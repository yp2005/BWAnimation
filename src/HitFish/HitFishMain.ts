// 游戏主界面
class HitFishMain extends ui.HitFishUI {
    // private configView: ConfigView;
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    
    constructor() {
        super();
        this.initConfig();
        // this.theCounter.visible = false;
        // this.hammer = new Hammer();
        // this.hammer.visible = false;
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
        // this.configView = new ConfigView(this.configBox);
        // this.tip.visible = false;
        // this.addChild(this.hammer);
        // this.setting.on(Laya.Event.CLICK, this, this.showConfigView)


        // this.theCounter.loop = false;
        // this.theCounter.on(Laya.Event.COMPLETE,this,this.countEnd);
        // this.on(Laya.Event.CLICK,this,this.doCount);
    }

    // 初始化配置
    public initConfig() {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = true;
        this.fishConfigBtn.on(Laya.Event.CLICK,this,this.showConfig);
        this.fishSubmitBtn.on(Laya.Event.CLICK,this,this.submitConfig);
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideConfig);
    }

// 提交配置
    private submitConfig() {
        let lefts = this.leftInput.text.split(",");
        let rights = this.rightInput.text.split(",");

        if(lefts.length < 1 || lefts.length > 6 || rights.length < 1 || rights.length > 6) {
            this.showTip("左右两边单词个数分别在1-6之间");
            return;
        }

        HitFish.gameConfig = {
                leftWords: lefts,
                rightWords: rights,
            }

        this.showTip("提交成功！");
        this.hideConfig();
    }

    public startCount(){
        this.theCounter.visible = true;
        this.theCounter.play();
    }

    public stopCount(){
        this.theCounter.stop();
        this.theCounter.visible =  false;
    }

    // 显示提示
    public showTip(text: string) {
        this.fishTip.text = text;
        this.fishTip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    }

    private hideTip() {
        this.fishTip.visible = false;
    }

    // 显示游戏配置页面 
    public showConfig() {
        this.fishConfig.visible = true;
        this.fishConfigBtn.visible = false;
    }

    // 隐藏游戏配置页面 
    public hideConfig() {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = true;
    }

    // 显示游戏配置页按钮
    public showSetting(state:boolean) {
        this.fishConfigBtn.visible = state;
    }
    
    // 显示well done文字效果
    public showWellDone(that, callBack: Function) {
        this.wellDone.y = this.wellDoneY;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100}, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    }
}