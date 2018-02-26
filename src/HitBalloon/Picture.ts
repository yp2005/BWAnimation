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
        // 设置图片居中显示
        this.picture.centerX = 0;
        this.picture.centerY = 0;
        this.on(Laya.Event.CLICK, this, this.drawLine);
    }

    // 单词和图片连线
    private drawLine() {
        // 如果有气球炸开并且单词未连线完成并且图片未被配对才进行配对
        if(HitBalloon.currentBalloon && HitBalloon.currentBalloon.state == 0 && this.state == 0) {
            if(this.word == HitBalloon.currentBalloon.word.text) { // 图片和炸开的单词配对成功
                this.state = 1;
                // 画线
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
                // 单词应配对的图片都已连线，单词完成配对
                if(HitBalloon.currentBalloon.linedNumber == HitBalloon.currentBalloon.getPicNumber()) {
                    HitBalloon.currentBalloon.state = 1;
                    HitBalloon.finishedWordsNumber++;
                    // 所有单词都完成配对，结束游戏
                    if(HitBalloon.finishedWordsNumber == HitBalloon.hitBalloonMain.getBalloonsNumber()) {
                        HitBalloon.hitBalloonMain.gameOver();
                    }
                } 
            }
            else { // 配对不成功，图片晃动
                this.shake();
            } 
        }
    }

    // 图片晃动
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