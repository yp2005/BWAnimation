// 老鼠类
class Mole {
    private mouseImg: Laya.Image; // 老鼠图片
    private wordBg: Laya.Image; // 显示单词背景
    private word: Laya.Text; // 显示的单词
    public x: number; // 相对画布的位置
    public y: number;

    constructor(mouseImg: Laya.Image, wordBg: Laya.Image, word: Laya.Text) {
        this.mouseImg = mouseImg;
        this.wordBg = wordBg;
        this.wordBg.y = -10;
        this.word = word;
        this.word.y = -7;
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

    // 开始结束游戏动画
    public startOverAni() {
        this.mouseImg.visible = true;
        Laya.SoundManager.playSound("res/audio/mole-out.mp3", 1);
        this.mouseImg.y = 118;
        Laya.Tween.to(this.mouseImg, {y: 52}, 500, Laya.Ease.backOut);
    }

    // 显示老鼠
    public showMouse(audio: string) {
        this.word.width = this.word.text.length > 8 ? this.word.text.length * 16 + 40 : 150;
        this.word.x = (160 - this.word.width) / 2;
        this.wordBg.width = this.word.width;
        this.wordBg.centerX = 0;
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
        Laya.SoundManager.playSound("res/audio/hit-mole.mp3", 1);
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