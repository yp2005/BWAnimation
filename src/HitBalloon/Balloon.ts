// 气球类
class Balloon extends ui.BalloonUI {
    public state: number; // 气球状态0 未连线，1已连线
    private picNumber: number;
    public linedNumber: number = 0;
    constructor(word: string, picNumber: number) {
        super();
        this.word.text = word;
        this.picNumber = picNumber;
        this.word.visible = false;
        this.picture.on(Laya.Event.CLICK, this, this.hit);
        Laya.timer.once(Math.floor(Math.random() * 1000), this, this.doShake);
    }

    private hit() {
        if(HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0) {
            return;
        }
        HitBalloon.currentBalloon = this;
        this.shake.stop();
        this.blast.play(0, false);
        Laya.timer.once(1200, this, this.showWord);
    }

    private showWord() {
        this.picture.visible = false;
        this.word.visible = true;
        this.state = 0;
    }

    private doShake() {
        this.shake.play(0, true);
    }

    public getPicNumber(): number {
        return this.picNumber;
    }

}