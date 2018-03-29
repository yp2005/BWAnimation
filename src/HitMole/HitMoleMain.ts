// 游戏主界面
class HitMoleMain extends ui.HitMoleUI {
    private hammer: Hammer; // 锤子
    private configView: HMConfigView;
    constructor() {
        super();
        this.hammer = new Hammer();
        this.hammer.visible = false;
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
}