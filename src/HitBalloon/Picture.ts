// 气球类
class Picture extends ui.PictureUI {
    private word: string;
    public position: string; // 位置 top、bottom
    private state: number = 0; // 状态 0 未被连线，1 已被连线
    public line: Sprite;
    constructor(word: string, pic: string) {
        super();
        this.word = word;
        this.picture.skin = "HitBalloon/" + pic;
        this.picture.centerX = 0;
        this.picture.centerY = 0;
        this.on(Laya.Event.CLICK, this, this.drawLine);
    }

    private drawLine() {
        if(HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0 && this.state == 0) {
            if(this.word == HitBalloon.currentBalloon.word.text) {
                this.state = 1;
                let line = new Sprite();
                Laya.stage.addChild(line);
                let fromX: number = HitBalloon.currentBalloon.x + 64;
                let fromY: number;
                let toX: number = this.x + 102;
                let toY: number;
                
                if(this.position == "top") {
                    fromY = HitBalloon.currentBalloon.y + 60;
                    toY = this.y + this.height - 10;
                }
                else {
                    fromY = HitBalloon.currentBalloon.y + 95;
                    toY = this.y + this.height - this.picture.height - (this.height - this.picture.height) / 2 - 10;
                }
                line.graphics.drawLine(fromX, fromY, toX, toY, "#10b94c", 5); 
                this.line = line;
                HitBalloon.currentBalloon.linedNumber++;
                if(HitBalloon.currentBalloon.linedNumber == HitBalloon.currentBalloon.getPicNumber()) {
                    HitBalloon.currentBalloon.state = 1;
                    HitBalloon.finishedWordsNumber++;
                    if(HitBalloon.finishedWordsNumber == HitBalloon.hitBalloonMain.getBalloonsNumber()) {
                        HitBalloon.hitBalloonMain.gameOver();
                    }
                } 
            }
            else {
                this.shake();
            } 
        }
    }

    private shake() {
        Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
            Laya.Tween.to(this.picture, {skewX:15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                    Laya.Tween.to(this.picture, {skewX:15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                        Laya.Tween.to(this.picture, {skewX:-15}, 50, Laya.Ease.elasticInOut, Laya.Handler.create(this, function(){
                            Laya.Tween.to(this.picture, {skewX:0}, 50, Laya.Ease.elasticInOut)
                        }))
                    } ))
                }))
            }))
        }));
    }
}