/**
 * 蜘蛛类
 */

class Spider extends Laya.Sprite {
    //定义蜘蛛身体
    private body:Laya.Animation;
    //当前动作
    public action:string = "";
    //是否缓存了动画
    private static cached :boolean;
    constructor() {
        super();
        this.init();
    }

    public init():void{
        if(!Spider.cached){
            Spider.cached = true;
            //缓存移动动画
            Laya.Animation.createFrames(["HitSpider/spider-move-1.png","HitSpider/spider-move-2.png","HitSpider/spider-move-3.png","HitSpider/spider-move-2.png"],"spider_move");
            
            //缓存选中动画
            Laya.Animation.createFrames(["HitSpider/spider-right-1.png"],"spider_right");

            //缓存未选中动画
            let wrongArr = [];
            for(var i=1;i<16;i++){
                wrongArr.push("HitSpider/spider-wrong-"+i+".png");
            }
            Laya.Animation.createFrames(wrongArr,"spider_wrong");
        }

        if(!this.body){
            //创建一个动画作为蜘蛛的身体
            this.body = new Laya.Animation();
            this.body.interval = 500;
            this.addChild(this.body);

            //添加动画播放完成事件
            this.body.on(Laya.Event.COMPLETE,this,this.onPlayComplete);
        }

        // 蜘蛛线
        this.graphics.drawLine(0, -768, 0, -55, "#fff", 4);

        //默认循环移动动画
        this.playAction("spider_move");
    }

    // 动画完毕回调
    onPlayComplete():void{
        
    }

    // 执行指定动画
    playAction(action:string):void{
        //记录当前的播放动画类型
        this.action = action;

        if(action === "spider_wrong"){
            this.body.interval = 100;
        } else{
            this.body.interval = 500;
        }

        //根据不同的动画类型播放动画;
        this.body.play(0,true,action);
        //获取动画大小的区域
        var bound:Laya.Rectangle = this.body.getBounds();
        //设置居中
        this.body.pos(-bound.width/2,-bound.height/2);
    }
}