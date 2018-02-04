// 游戏主界面
class HitMoleMain extends ui.HitMoleUI {
    private hammer: Hammer; // 锤子
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    constructor() {
        super();
        this.hammer = new Hammer();
        this.hammer.visible = false;
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
        this.addChild(this.hammer);
    }

    // 显示锤子，出现捶打效果
    public showHammer(mole: Mole) {
        this.hammer.visible = true;
        this.hammer.play(mole.x + 20, mole.y - 10);
        Laya.timer.once(1000, this, this.hidHammer);
    }

    // 隐藏锤子
    public hidHammer() {
        this.hammer.visible = false;
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