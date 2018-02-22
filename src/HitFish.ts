// 
//import Browser = Laya.Browser;
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitFish {
    public static hitFishMain: HitFishMain; // 拍鱼游戏主界面
    // private leftFishs: Fish[]; // 左边鱼
    // private rightFishs: Fish[]; // 右边鱼
    public static gameConfig: any;
    private static fishType: number; //鱼的类型
    public static gameFish: Fish[]; // 存放这次游戏的鱼
    public static started: boolean = false; // 游戏是否开始
    private theCounter: Laya.Animation;
    
    constructor(config: any)
    {
        if(!config || !config.game) {
            config = {
                leftWords: ["red", "pink", "orange"],
                rightWords: ["pink", "orange", "green", "black", "white", "ssss"],
            }
        }
        HitFish.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS},
            {url: "res/atlas/HitFish.atlas", type: Laya.Loader.ATLAS},
            {url: "HitFish/bg.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));       
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        // 鱼的类型固定6种;
        HitFish.fishType = 6;
        HitFish.hitFishMain = new HitFishMain();
        HitFish.hitFishMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitFish.hitFishMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitFish.hitFishMain.initConfig();

        this.theCounter = HitFish.hitFishMain.getChildByName("theCounter") as Laya.Animation;
        // this.theCounter.stop();
        this.theCounter.visible = false;
        this.theCounter.on(Laya.Event.COMPLETE,this,this.countEnd);

        Laya.stage.addChild(HitFish.hitFishMain);
        HitFish.gameFish = [];
        this.gameOver();
        HitFish.hitFishMain.replayBtn.visible = false;
        HitFish.hitFishMain.startBtn.visible = true;
    }

    // 游戏开始
    private gameStart() {
        HitFish.hitFishMain.showSetting(false);
        HitFish.hitFishMain.replayBtn.visible = false;
        HitFish.hitFishMain.startBtn.visible = false;
        this.initWords();
        // Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        Laya.timer.once(500, this, this.setStartState);
    }

    // 设置游戏开始状态
    private setStartState() {
        HitFish.started = true;
    }

    // 游戏结束
    private gameOver() {
        HitFish.hitFishMain.wellDone.visible = false;
        HitFish.started = false;
        HitFish.hitFishMain.replayBtn.visible = true;
        HitFish.hitFishMain.showSetting(true);
    }

    // 初始化单词
    public initWords() { 
        //y范围-30到600
        let totalY = 768;
        let fishHeigthL = totalY/HitFish.gameConfig.leftWords.length;
        let fishHeigthR = totalY/HitFish.gameConfig.rightWords.length;

        for(let i = 0; i< HitFish.gameConfig.leftWords.length;i++){
            //TODO 随机图片
            // let fishIndex = Math.floor(Math.random() * HitFish.fishType);
            let fish = new Fish(i+1,HitFish.gameConfig.leftWords[i]);
            fish.x = 155;
            fish.y = fishHeigthL * i + (fishHeigthL-200)/2;
            Laya.stage.addChild(fish);
            HitFish.gameFish.push(fish);
        }

        for(let i = 0; i< HitFish.gameConfig.rightWords.length;i++){
            // let fishIndex = Math.floor(Math.random() * HitFish.fishType);
            let fish = new Fish(i+1,HitFish.gameConfig.rightWords[i]);
            fish.x = 610;
            fish.y = fishHeigthR * i + (fishHeigthR-200)/2;
            Laya.stage.addChild(fish);
            HitFish.gameFish.push(fish);
        }
    }

    public countEnd(){
        HitFish.hitFishMain.stopCount();
        // 延迟两秒，让老师可以点击单词变回图片
        Laya.timer.once(2000, this, this.checkWellDone);
    }

    public checkWellDone(){
        let isAllRight = true;
        for(let i = 0;i<HitFish.gameFish.length;i++){
            isAllRight = isAllRight && HitFish.gameFish[i].isRight;
        }

        if(isAllRight){
            for(let i = 0;i<HitFish.gameFish.length;i++){
                HitFish.gameFish[i].removeSelf();
            }
            HitFish.gameFish = [];
            HitFish.hitFishMain.showWellDone(this, this.gameOver);
        }
    }

}

let config: any = {
        leftWords: ["red", "pink", "orange", "green"],
        rightWords: ["pink", "orange", "green", "black", "white"],
    }
new HitFish(config);