// 游戏主界面
class HitMoleMain extends ui.HitMoleUI {
    private hammer: Hammer; // 锤子
    private configView: HMConfigView;
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    constructor() {
        super();
        this.hammer = new Hammer();
        this.hammer.visible = false;
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
        this.configView = new HMConfigView(this.configBox);
        this.tip.visible = false;
        this.addChild(this.hammer);
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(HitMole.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

    // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    }

    // 隐藏提示
    private hideTip() {
        this.tip.visible = false;
    }

    // 显示游戏配置页面 
    private showConfigView() {
        this.configView.show();
    }

    // 设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!HitMole.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // 显示锤子，出现捶打效果
    public showHammer(mole: Mole) {
        this.hammer.visible = true;
        this.hammer.play(mole.x + 70, mole.y - 20);
        Laya.timer.once(1000, this, this.hidHammer);
    }

    // 隐藏锤子
    public hidHammer() {
        this.hammer.visible = false;
    }
    
    // 显示well done文字效果
    public showWellDone(that, callBack: Function) {
        this.wellDone.y = this.wellDoneY + this.wellDone.height;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    }
}