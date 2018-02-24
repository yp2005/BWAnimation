// 游戏主界面
class HitBalloonMain extends ui.HitBalloonUI {
    private balloons: Balloon[];
    private pictures: Picture[];
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标

    constructor() {
        super(); 
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
    }

    public gameOver() {
        // 显示well done文字效果
        this.wellDone.y = this.wellDoneY;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100}, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
   
    }

    private reset() {
        this.wellDone.visible = false;
        for(let balloon of this.balloons) {
            balloon.removeSelf();
            balloon.destroy();
        }
        for(let picture of this.pictures) {
            picture.line.removeSelf();
            picture.line.destroy();
            picture.removeSelf();
            picture.destroy();
        }
        HitBalloon.hitBalloonMain.replayBtn.visible = true;
    }

    public addElement(balloons: Balloon[], pictures: Picture[]) {
        this.balloons = balloons;
        this.pictures = pictures;
        let balloonWidth: number = 1024 / this.balloons.length;
        let topPicNumber: number = Math.floor(this.pictures.length / 2);
        let picWidthTop: number = 1024 / topPicNumber;
        let picWidthBottom: number = 1024 / (this.pictures.length - topPicNumber);
        let indexes: number[] = new Array<number>();
        for(let i = 0; i < this.balloons.length; i++) {
            indexes.push(i);
        }
        for(let balloon of this.balloons) {
            let i: number = Math.floor(Math.random() * indexes.length);
            let index = indexes[i];
            indexes.splice(i, 1);
            if(index >= 6) {
                balloon.picture.skin = "HitBalloon/balloon-" + (index - 5) + ".png";
            }
            else {
                balloon.picture.skin = "HitBalloon/balloon-" + (index + 1)+ ".png";
            }
            balloon.x = index * balloonWidth + (balloonWidth - balloon.width) / 2;
            balloon.y = 330;
            this.addChild(balloon);
        }
        indexes = new Array<number>();
        for(let i = 0; i < this.pictures.length; i++) {
            indexes.push(i);
        }
        for(let picture of this.pictures) {
            let i: number = Math.floor(Math.random() * indexes.length);
            let index = indexes[i];
            indexes.splice(i, 1);
            if(index < topPicNumber) {
                picture.x = index * picWidthTop + (picWidthTop - picture.width) / 2;
                picture.y = 110;
                picture.position = "top";
            }
            else {
                picture.x = (index - topPicNumber) * picWidthBottom + (picWidthBottom - picture.width) / 2;
                picture.y = 564;
                picture.position = "bottom";
            }
            this.addChild(picture);
            index++;
        }
    }

    public getBalloonsNumber(): number {
        return this.balloons.length;
    }

}