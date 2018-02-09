// 老鼠类
class Mole {
    // private normalState: Laya.Image; // 老鼠普通状态图片
    // private hitState: Laya.Image; // 老鼠受击图片
    // private upY: number;
    // private downY: number = 27;
    //private box: Laya.Box; // 老鼠的页面容器
    //private ani: Laya.Animation; // 老鼠出洞动画
    private mouseImg: Laya.Image; // 老鼠图片
    private wordBg: Laya.Image; // 显示单词背景
    private word: Laya.Text; // 显示的单词
    public x: number;
    public y: number;

    constructor(mouseImg: Laya.Image, wordBg: Laya.Image, word: Laya.Text) {
        //this.box = box;
        this.mouseImg = mouseImg;
        this.wordBg = wordBg;
        this.word = word;
        this.reset();
    }

    // // 显示老鼠页面容器
    // showBox() {
    //     this.box.visible = true;
    // }

    // // 隐藏老鼠页面容器
    // hidBox() {
    //     this.box.visible = false;
    // }

    // 重置老鼠状态
    public reset() {
        this.mouseImg.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
        //this.box.visible = false;
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
            Laya.Tween.to(this.mouseImg, {y: 118}, 500, Laya.Ease.backOut);
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
}