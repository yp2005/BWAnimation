// 蜘蛛
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class SpiderAndWord {
    public static spiderAndWordMain: SpiderAndWordMain; // 游戏主界面
    public static currentSpider: Spider; // 当前蜘蛛对象
    private currentPic: HSPicture; // 当前图片对象
    public static currentPics: Array<HSPicture>; // 当前图片数组
    public static targetPos: any; //目标位置
    private speed: number = 3; //移动速度
    private offset: number = 50; //偏移量
    private startPos: any = {x:40,y:50} //起始位置-左
    private endPos: any = {x:880,y:50} //起始位置-右
    public static started: boolean = false; //游戏是否开始
    private isBack: boolean = false; //是否返程
    private isChecking: boolean = false; //是否正在执行检查
    private currentWord: string = ""; //当前选中的图片的单词
    private wordArrs = [["ugly","beautiful"],["happy","sad"],["old","young"]]; //单词组合
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
                word: "beautiful",
                wordNum: 8
            };
        }
        SpiderAndWord.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/SpiderAndWord.atlas", type: Laya.Loader.ATLAS},
            {url: "SpiderAndWord/bg.png", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));     
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        SpiderAndWord.spiderAndWordMain = new SpiderAndWordMain();
        SpiderAndWord.spiderAndWordMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        SpiderAndWord.spiderAndWordMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(SpiderAndWord.spiderAndWordMain);
        SpiderAndWord.spiderAndWordMain.startBtn.visible = true;
        SpiderAndWord.spiderAndWordMain.replayBtn.visible = false;
        SpiderAndWord.started = false;

        this.startPos.x = this.startPos.x+this.offset;
        this.startPos.y = this.startPos.y+this.offset;
        this.endPos.x = this.endPos.x+this.offset;
        this.endPos.y = this.endPos.y+this.offset;

        SpiderAndWord.currentSpider = new Spider();
        SpiderAndWord.currentSpider.visible = false;
        SpiderAndWord.currentSpider.zOrder = 10;

        Laya.stage.addChild(SpiderAndWord.currentSpider);

        SpiderAndWord.posArr = SpiderAndWord.posArr.map(p=>{
            return {x:(p.x+this.offset),y:(p.y+this.offset)}
        })
    }

    // 图片点击事件
    private mouseClick(hsPic:HSPicture){
        // 只有当游戏已经开始并且蜘蛛空闲状态，才能执行任务
        if(SpiderAndWord.started && !this.isChecking){
            // SpiderAndWord.targetPos = {x:(hsPic.x+this.offset),y:(hsPic.y+this.offset)};
            SpiderAndWord.targetPos = {x:hsPic.x,y:hsPic.y};
            this.currentWord = hsPic.word;
            this.isChecking = true;

            this.currentPic = hsPic;
        }
    }

    // 初始化
    private init() {
        SpiderAndWord.currentSpider.pos(this.startPos.x,this.startPos.y);
        SpiderAndWord.targetPos = this.endPos;
        SpiderAndWord.currentSpider.visible = true;
        SpiderAndWord.started = true;
        this.isChecking = false;

        SpiderAndWord.currentPics = new Array<HSPicture>();
        let wordArr = this.wordArrs.find(arr => {
            return (arr.indexOf(SpiderAndWord.gameConfig.word) != -1);
        })
        // 获取一个1-8的随机数组
        let ranPos = CommonTools.getRandomArr(8);
        let picArr1 = CommonTools.getRandomArr(4);
        let picArr2 = CommonTools.getRandomArr(4);

        // 如果配置的是单数的话，也得随机。如配置5，随机出现正确2或者3
        let ran = Math.random()>.5 ? 1:0;

        // console.log(JSON.stringify(ranPos))
        // console.log(JSON.stringify(picArr1))
        // console.log(JSON.stringify(picArr2))
        // 只取其中SpiderAndWord.gameConfig.wordNum个位置
        for(var i=0;i<SpiderAndWord.gameConfig.wordNum;i++){
            // 对的错的间隔着,随机数ran随机出来0或者1，于是如果是单数张图片时，多出来的那张图随机出来是对或者错
            let picType = ((i+ran)%2) ? wordArr[0] : wordArr[1];
            // 对的错的各从4个图片中随机出来对应个图
            let picNum = (i%2) ? picArr1[Math.floor(i/2)] : picArr2[Math.floor(i/2)];
            // 图片的位置随机获取
            let picPos = ranPos[i]-1;
            // console.log(i+"===="+"spiderpic-"+picType+"-"+picNum+".png");
            let hsPic = new HSPicture(picType,"spiderpic-"+picType+"-"+picNum+".png");
            hsPic.pos(SpiderAndWord.posArr[picPos].x,SpiderAndWord.posArr[picPos].y);
            hsPic.body.on(Laya.Event.CLICK,this,this.mouseClick,[hsPic]);
            
            SpiderAndWord.currentPics.push(hsPic);
            Laya.stage.addChild(hsPic);
        }
    }

    // 游戏开始
    private gameStart() {
        SpiderAndWord.spiderAndWordMain.setting.visible = false;
        SpiderAndWord.spiderAndWordMain.replayBtn.visible = false;
        SpiderAndWord.spiderAndWordMain.startBtn.visible = false;
        this.init();  
        
        //恢复游戏循环
        Laya.timer.frameLoop(1,this,this.onLoop);
        // Laya.stage.on(Laya.Event.CLICK,this,this.mouseClick);
    }

    // 按帧循环，显示蜘蛛位置
    onLoop():void{
        let spiderX = SpiderAndWord.currentSpider.x;
        let spiderY = SpiderAndWord.currentSpider.y;

        //去程先横向移动，返程先纵向移动
        if(this.isBack){
            if(spiderY != SpiderAndWord.targetPos.y){
                let _y = this.getDistanceValue(SpiderAndWord.targetPos.y,spiderY);
                SpiderAndWord.currentSpider.pos(spiderX,spiderY + _y);
            }else if(spiderX != SpiderAndWord.targetPos.x){
                // 不必回到起点才可以选择
                this.isBack = false;
                this.isChecking = false;
                let _x = this.getDistanceValue(SpiderAndWord.targetPos.x,spiderX);
                SpiderAndWord.currentSpider.pos(spiderX + _x,spiderY);
            }
        }else{
            if(spiderX != SpiderAndWord.targetPos.x){
                let _x = this.getDistanceValue(SpiderAndWord.targetPos.x,spiderX);
                SpiderAndWord.currentSpider.pos(spiderX + _x,spiderY);
            }else if(spiderY != SpiderAndWord.targetPos.y){
                let _y = this.getDistanceValue(SpiderAndWord.targetPos.y,spiderY);
                SpiderAndWord.currentSpider.pos(spiderX,spiderY + _y);
            }
        }

        // 到达目标位置
        if(spiderX === SpiderAndWord.targetPos.x && spiderY === SpiderAndWord.targetPos.y){
            spiderX === this.endPos.x ? (SpiderAndWord.targetPos = this.startPos) : (SpiderAndWord.targetPos = this.endPos);
            
            //如果是在来回线以下，即是返程
            if(spiderY != this.startPos.y){
                this.isBack = true;
                // 停留三秒
                Laya.timer.clear(this,this.onLoop);
                SpiderAndWord.currentSpider.playAction(this.checkPic());
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
        let _word = (this.currentWord === SpiderAndWord.gameConfig.word) ? "spider_right" : "spider_wrong";
        if(_word === "spider_right"){
            this.currentPic.showBg();
        }

        if(this.checkAllRight()){
            Laya.timer.once(3000, this, this.showWellDone);
        }

        return _word;
    }

    showWellDone(){
        SpiderAndWord.currentSpider.visible = false;
        for(let picture of SpiderAndWord.currentPics) {
            picture.removeSelf();
            picture.destroy();
        }
        SpiderAndWord.spiderAndWordMain.showWellDone(this,this.gameOver);
    }

    // 验证是否所有对的图片都选出
    checkAllRight(){
        let isAllRight = true;
        SpiderAndWord.currentPics.forEach(p => {
            if(p.word === SpiderAndWord.gameConfig.word){
                isAllRight = isAllRight && p.isRight;
            }
        })
        return isAllRight;
    }

    // 重新开始游走循环
    resume():void {
        //恢复游戏循环
        Laya.timer.frameLoop(1,this,this.onLoop);
        SpiderAndWord.currentSpider.playAction("spider_move");
    }

    // 获取当前点与目标点的坐标距离
    getDistanceValue(target:number = 0,pos:number = 0):number{
        let _value = target - pos;
        if(_value === 0) return 0;
        let absValue = Math.min(Math.abs(_value),this.speed)
        return (_value/Math.abs(_value)) * absValue;
    }

    // 游戏结束
    public gameOver() {
        SpiderAndWord.spiderAndWordMain.wellDone.visible = false;
        SpiderAndWord.spiderAndWordMain.replayBtn.visible = true;
        SpiderAndWord.spiderAndWordMain.showSetting(true);
        SpiderAndWord.started = false;
    }
}
