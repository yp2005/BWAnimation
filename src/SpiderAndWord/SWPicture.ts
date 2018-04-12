// 蜘蛛图片类
class HSPicture extends Laya.Sprite {
    public body:Laya.Image;
    public bg:Laya.Image;
    public word:string;
    public isRight:boolean;
    constructor(word: string, pic: string) {
        super();
        this.word = word;
        this.isRight = false;
        this.body = new Laya.Image("SpiderAndWord/" + pic);
        this.bg = new Laya.Image("SpiderAndWord/spider_rightshadow.png");
        this.body.zOrder = 2;
        this.bg.zOrder = 1;
        this.bg.visible = false;
        this.bg.centerX = 0;
        this.bg.centerY = 0;
        this.addChild(this.bg);
        this.body.centerX = 0;
        this.body.centerY = 0;
        this.addChild(this.body);


        // this.body.on(Laya.Event.CLICK,this,this.mouseClick);
    }

    public showBg(){
        Laya.SoundManager.playMusic("res/audio/spider-catch.mp3",1);
        this.isRight = true;
        this.bg.visible = true;
    }

    public playNo(){
        Laya.SoundManager.playMusic("res/audio/spider-no.mp3",1);
    }
    
    // private mouseClick(){
    //     SpiderAndWord.targetPos = {x:this.x,y:this.y};
    //     console.log(JSON.stringify(SpiderAndWord.targetPos));
    // }
}