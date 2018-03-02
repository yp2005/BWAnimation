// 老鼠类
class Mole {
    private mouseImg: Laya.Image; // 老鼠图片
    private wordBg: Laya.Image; // 显示单词背景
    private word: Laya.Text; // 显示的单词
    public x: number;
    public y: number;

    constructor(mouseImg: Laya.Image, wordBg: Laya.Image, word: Laya.Text) {
        this.mouseImg = mouseImg;
        this.wordBg = wordBg;
        this.word = word;
        this.reset();
    }

    // 重置老鼠状态
    public reset() {
        this.mouseImg.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
    }

    // 设置显示的单词
    public setText(text: string) {
        this.word.text = text;
    }

    // 设置图片
    public setPic(pic: string) {
        this.mouseImg.skin = pic;
    }

    // 显示老鼠
    public showMouse(audio: string) {
        this.mouseImg.visible = true;
        this.wordBg.visible = true;
        this.word.visible = true;
        if(audio) {
            Laya.SoundManager.playSound(audio, 1);
        }
        this.mouseImg.y = 118;
        Laya.Tween.to(this.mouseImg, {y: 52}, 500, Laya.Ease.backOut);
    }

    // 显示图片
    public showPic(audio: string) {
        this.mouseImg.visible = true;
        if(audio) {
            Laya.SoundManager.playSound(audio, 1);
        }
        this.mouseImg.y = 118;
        Laya.Tween.to(this.mouseImg, {y: 40}, 500, Laya.Ease.backOut);
    }

    // 老鼠受击
    public hit(game: string) {
        if(game == "word") {
            this.mouseImg.y = 52;
            Laya.Tween.to(this.mouseImg, {y: 118}, 500, Laya.Ease.backOut, Laya.Handler.create(this, this.hideWord));
        }
        else if(game = "picture") {
            this.mouseImg.y = 40;
            Laya.Tween.to(this.mouseImg, {y: 135}, 500, Laya.Ease.backIn, Laya.Handler.create(this, this.hidePic));
        } 
    }

    // 隐藏图片
    private hidePic() {
        this.mouseImg.visible = false;
    }

    // 隐藏单词
    private hideWord() {
        this.wordBg.visible = false;
        this.word.visible = false;
    }
}