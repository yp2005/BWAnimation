// 气球类
class Balloon extends ui.BalloonUI {
    public state: number; // 气球状态0 未连线，1已连线
    private picNumber: number; // 单词对应的图片数量
    public linedNumber: number = 0; // 单词已连线图片数量
    constructor(word: string, picNumber: number) {
        super();
        this.word.text = word;
        this.picNumber = picNumber;
        this.word.visible = false;
        this.blastImg.visible = false;
        this.picture.on(Laya.Event.CLICK, this, this.hit);
        Laya.timer.once(Math.floor(Math.random() * 1000), this, this.doShake);
    }

    // 气球受到拍打
    private hit() {
        // 如果有气球已经炸开还没完成图片连线，不炸开气球
        if(HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0) {
            return;
        }
        this.picture.off(Laya.Event.CLICK, this, this.hit);
        HitBalloon.currentBalloon = this;
        // 停止气球晃动，炸开气球显示单词
        this.shake.stop();
        this.blast.play(0, false);
        Laya.timer.once(1200, this, this.showBlast);
    }

    // 显示爆炸效果图片

    private showBlast() {
        this.picture.visible = false;
        this.blastImg.visible = true;
        Laya.timer.once(300, this, this.showWord);
    }

    // 显示单词
    private showWord() {
        this.blastImg.visible = false;
        this.word.visible = true;
        this.state = 0;
    }

    // 晃动气球
    private doShake() {
        this.shake.play(0, true);
    }

    // 获取单词对应的图片数量
    public getPicNumber(): number {
        return this.picNumber;
    }

}