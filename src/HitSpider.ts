// 蜘蛛
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitSpider {
    public static hitSpiderMain: HitSpiderMain; // 游戏主界面
    public static currentSpider: Spider; // 当前蜘蛛对象
    public static targetPos: any; //目标位置
    private speed: number = 5; //移动速度
    private offset: number = 50; //偏移量
    private startPos: any = {x:25,y:50} //起始位置-左
    private endPos: any = {x:800,y:50} //起始位置-右
    private started: boolean = false; //游戏是否开始
    private isBack: boolean = false; //是否返程
    private isChecking: boolean = false; //是否正在执行检查
    // 八个位置，第一排1234，第二排5678
    public static posArr: Array<any> = [
        {x:50,y:300},
        {x:300,y:240},
        {x:560,y:330},
        {x:755,y:230},
        {x:120,y:580},
        {x:320,y:460},
        {x:550,y:600},
        {x:800,y:520}
    ];
    public static gameConfig: any; // 游戏配置
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config) {
            config = {
                gameModel: false,
                words: [
                    {word: "car", pictures: ["car.png","car.png","car.png","car.png","car.png"]},
                    {word: "train", pictures: ["train.png"]},
                    {word: "doll", pictures: ["doll.png"]},
                    {word: "computer", pictures: ["computer.png"]},
                    {word: "bike", pictures: ["bike.png"]},
                    {word: "ball", pictures: ["ball.png"]}
                ]
            };
        }
        // HitSpider.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/HitSpider.atlas", type: Laya.Loader.ATLAS},
            {url: "HitSpider/bg.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        HitSpider.hitSpiderMain = new HitSpiderMain();
        HitSpider.hitSpiderMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitSpider.hitSpiderMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitSpider.hitSpiderMain);
        HitSpider.hitSpiderMain.startBtn.visible = true;
        HitSpider.hitSpiderMain.replayBtn.visible = false;
        this.started = false;

        this.startPos.x = this.startPos.x+this.offset;
        this.startPos.y = this.startPos.y+this.offset;
        this.endPos.x = this.endPos.x+this.offset;
        this.endPos.y = this.endPos.y+this.offset;

        HitSpider.currentSpider = new Spider();
        HitSpider.currentSpider.visible = false;
        HitSpider.currentSpider.zOrder = 1;

        Laya.stage.addChild(HitSpider.currentSpider);
    }

    // 图片点击事件
    private mouseClick(hsPic:HSPicture){
        // 只有当游戏已经开始并且蜘蛛空闲状态，才能执行任务
        if(this.started && !this.isChecking){
            HitSpider.targetPos = {x:(hsPic.x+this.offset),y:(hsPic.y+this.offset)};
            this.isChecking = true;
        }
    }

    // 初始化
    private init() {
        HitSpider.currentSpider.pos(this.startPos.x,this.startPos.y);
        HitSpider.targetPos = this.endPos;
        HitSpider.currentSpider.visible = true;
        this.started = true;
        this.isChecking = false;

        let pictures: HSPicture[] = new Array<HSPicture>();
        for(var i=0;i<8;i++){
            let hsPic = new HSPicture("happy","fly-"+(i+1)+".png");
            hsPic.pos(HitSpider.posArr[i].x,HitSpider.posArr[i].y);
            hsPic.body.on(Laya.Event.CLICK,this,this.mouseClick,[hsPic]);
            
            Laya.stage.addChild(hsPic);
        }
    }

    // 游戏开始
    private gameStart() {
        // HitSpider.hitSpiderMain.showSetting(false);
        HitSpider.hitSpiderMain.replayBtn.visible = false;
        HitSpider.hitSpiderMain.startBtn.visible = false;
        this.init();  
        
        //恢复游戏循环
        Laya.timer.frameLoop(1,this,this.onLoop);
        // Laya.stage.on(Laya.Event.CLICK,this,this.mouseClick);
    }

    // 按帧循环，显示蜘蛛位置
    onLoop():void{
        let spiderX = HitSpider.currentSpider.x;
        let spiderY = HitSpider.currentSpider.y;

        //去程先横向移动，返程先纵向移动
        if(this.isBack){
            if(spiderY != HitSpider.targetPos.y){
                let _y = this.getDistanceValue(HitSpider.targetPos.y,spiderY);
                HitSpider.currentSpider.pos(spiderX,spiderY + _y);
            }else if(spiderX != HitSpider.targetPos.x){
                let _x = this.getDistanceValue(HitSpider.targetPos.x,spiderX);
                HitSpider.currentSpider.pos(spiderX + _x,spiderY);
            }
        }else{
            if(spiderX != HitSpider.targetPos.x){
                let _x = this.getDistanceValue(HitSpider.targetPos.x,spiderX);
                HitSpider.currentSpider.pos(spiderX + _x,spiderY);
            }else if(spiderY != HitSpider.targetPos.y){
                let _y = this.getDistanceValue(HitSpider.targetPos.y,spiderY);
                HitSpider.currentSpider.pos(spiderX,spiderY + _y);
            }
        }

        // 到达目标位置
        if(spiderX === HitSpider.targetPos.x && spiderY === HitSpider.targetPos.y){
            spiderX === this.endPos.x ? (HitSpider.targetPos = this.startPos) : (HitSpider.targetPos = this.endPos);
            
            //如果是在来回线以下，即是返程
            if(spiderY != this.startPos.y){
                this.isBack = true;
                // 停留三秒
                Laya.timer.clear(this,this.onLoop);
                HitSpider.currentSpider.playAction(this.checkPic());
                Laya.timer.once(3000, this, this.resume);
            }else{
                this.isBack = false;
                this.isChecking = false;
            }
        }
    }

    // 验证图片是否正确
    checkPic():string{
        //spider_wrong
        //spider_right
        return "spider_right";
    }

    // 重新开始游走循环
    resume():void {
        //恢复游戏循环
        Laya.timer.frameLoop(1,this,this.onLoop);
        HitSpider.currentSpider.playAction("spider_move");
    }

    // 获取当前点与目标点的坐标距离
    getDistanceValue(target:number = 0,pos:number = 0):number{
        let _value = target - pos;
        if(_value === 0) return 0;
        let absValue = Math.min(Math.abs(_value),this.speed)
        return (_value/Math.abs(_value)) * absValue;
    }
}
let config: any = {
    gameModel: true, // 是否游戏模式，游戏模式不显示配置按钮
    words: [
        {word: "car", pictures: ["car.png","car.png","car.png","car.png","car.png"]},
        {word: "train", pictures: ["train.png"]},
        {word: "doll", pictures: ["doll.png"]},
        {word: "computer", pictures: ["computer.png"]},
        {word: "bike", pictures: ["bike.png"]},
        {word: "ball", pictures: ["ball.png"]}
    ]
};
new HitSpider(config);