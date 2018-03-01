// 蜘蛛图片类
class HSPicture extends Laya.Sprite {
    public body:Laya.Image;
    public word:string;
    constructor(word: string, pic: string) {
        super();
        this.word = word;
        this.body = new Laya.Image("HitSpider/" + pic);
        // var bound:Laya.Rectangle = this.body.getBounds();
        // this.body.pos(-bound.width/2,-bound.height/2);
        this.body.centerX = 0;
        this.body.centerY = 0;
        this.addChild(this.body);


        // this.body.on(Laya.Event.CLICK,this,this.mouseClick);
    }
    
    // private mouseClick(){
    //     HitSpider.targetPos = {x:this.x,y:this.y};
    //     console.log(JSON.stringify(HitSpider.targetPos));
    // }
}