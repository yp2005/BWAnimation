// 鱼类
class Fish extends ui.FishUI {
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

    // 显示单词
    private showWord(){
        this.fishImg.visible = false;
        this.wordBg.visible = true;
        this.fishWord.visible = true;
        HitFish.hitFishMain.startCount();
        this.isRight = true;
    }

    // 隐藏单词
    private hideWord(){
        this.fishImg.visible = true;
        this.wordBg.visible = false;
        this.fishWord.visible = false;
        HitFish.hitFishMain.stopCount();
        this.isRight = false;
    }

    // 重置状态
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