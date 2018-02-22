// 老鼠类
class Fish extends ui.FishUI {
    // private normalState: Laya.Image; // 老鼠普通状态图片
    // private hitState: Laya.Image; // 老鼠受击图片
    // private upY: number;
    // private downY: number = 27;
    //private box: Laya.Box; // 老鼠的页面容器
    //private ani: Laya.Animation; // 老鼠出洞动画
    // private fishImg: Laya.Image; // 鱼图片
    // private wordBg: Laya.Image; // 显示单词背景
    // private word: Laya.Text; // 显示的单词

    public isRight: boolean; //单词是否已经被答中
    public x: number;
    public y: number;

    constructor(picNo: number, word: string) {
        super();
        this.fishImg.skin = "HitFish/fish-"+picNo+".png";
        this.fishWord.text = word;
        this.reset();
        this.fishImg.on(Laya.Event.CLICK,this,this.showWord);
        this.wordBg.on(Laya.Event.CLICK,this,this.hideWord);
        //默认单词未被答中
        this.isRight = false;
    }

    private showWord(){
        this.fishImg.visible = false;
        this.wordBg.visible = true;
        this.fishWord.visible = true;
        HitFish.hitFishMain.startCount();
        this.isRight = true;
    }

    private hideWord(){
        this.fishImg.visible = true;
        this.wordBg.visible = false;
        this.fishWord.visible = false;
        HitFish.hitFishMain.stopCount();
        this.isRight = false;
    }

    // 重置老鼠状态
    public reset() {
        this.fishImg.visible = true;
        this.wordBg.visible = false;
        this.fishWord.visible = false;
    }

    // 设置显示的单词
    public setText(text: string) {
        this.fishWord.text = text;
    }
}