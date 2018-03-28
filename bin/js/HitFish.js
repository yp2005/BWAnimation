// 双排鱼
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var SoundManager = Laya.SoundManager;
var HitFish = /** @class */ (function () {
    function HitFish(config) {
        if (!config) {
            config = {
                gameModel: false,
                leftWords: ["red", "pink", "orange"],
                rightWords: ["pink", "orange", "green", "black", "white", "ssss"],
            };
        }
        HitFish.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitFish.atlas", type: Laya.Loader.ATLAS },
            { url: "HitFish/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitFish.prototype.onload = function () {
        // 鱼的类型固定6种;
        HitFish.fishType = 6;
        HitFish.hitFishMain = new HitFishMain();
        HitFish.hitFishMain.replayBtn.on(Laya.Event.CLICK, this, this.restart);
        // HitFish.hitFishMain.initConfig();
        this.theCounter = HitFish.hitFishMain.getChildByName("theCounter");
        // this.theCounter.stop();
        this.theCounter.visible = false;
        this.theCounter.on(Laya.Event.COMPLETE, this, this.countEnd);
        Laya.stage.addChild(HitFish.hitFishMain);
        HitFish.gameFish = [];
        SoundManager.playMusic("res/audio/fish_bg.mp3", 0);
        SoundManager.setMusicVolume(0.1);
        SoundManager.setSoundVolume(1);
        this.gameStart();
    };
    // 重新开始游戏
    HitFish.prototype.restart = function () {
        if (HitFish.hitFishMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        HitFish.hitFishMain.replayBtn.skin = "common/replay-disabled.png";
        for (var i = 0; i < HitFish.gameFish.length; i++) {
            HitFish.gameFish[i].removeSelf();
        }
        HitFish.gameFish = [];
        this.gameStart();
    };
    // 游戏开始
    HitFish.prototype.gameStart = function () {
        if (HitFish.gameConfig.leftWords && HitFish.gameConfig.leftWords.length > 0 && HitFish.gameConfig.rightWords && HitFish.gameConfig.rightWords.length > 0) {
            HitFish.hitFishMain.replayBtn.skin = "common/replay-disabled.png";
            this.initWords();
            Laya.timer.once(500, this, this.setStartState);
        }
        else {
            HitFish.hitFishMain.showTip("左右两边必须至少配置一个单词！");
        }
    };
    // 设置游戏开始状态
    HitFish.prototype.setStartState = function () {
        HitFish.started = true;
    };
    // 游戏结束
    HitFish.prototype.gameOver = function () {
        HitFish.hitFishMain.replayBtn.skin = "common/replay-abled.png";
        HitFish.started = false;
    };
    // 初始化单词
    HitFish.prototype.initWords = function () {
        var totalY = 768;
        var fishHeigthL = totalY / HitFish.gameConfig.leftWords.length;
        var fishHeigthR = totalY / HitFish.gameConfig.rightWords.length;
        // 初始化左边
        var arr = CommonTools.getRandomArr(HitFish.fishType);
        for (var i = 0; i < HitFish.gameConfig.leftWords.length; i++) {
            var fish = new Fish(arr[i], HitFish.gameConfig.leftWords[i]);
            fish.x = 180;
            fish.y = fishHeigthL * i + (fishHeigthL - 200) / 2;
            HitFish.hitFishMain.addChild(fish);
            HitFish.gameFish.push(fish);
        }
        // 初始化右边
        arr = CommonTools.getRandomArr(HitFish.fishType);
        for (var i = 0; i < HitFish.gameConfig.rightWords.length; i++) {
            var fish = new Fish(arr[i], HitFish.gameConfig.rightWords[i]);
            fish.x = 600;
            fish.y = fishHeigthR * i + (fishHeigthR - 200) / 2;
            HitFish.hitFishMain.addChild(fish);
            HitFish.gameFish.push(fish);
        }
    };
    // 返回随机数组
    // private getRandomArr(){
    //     let arr = [];
    //     for(var i = 0;i<HitFish.fishType;i++){
    //         arr.push(i+1);
    //     }
    //     return arr.sort((a,b)=>{
    //         return Math.random()>.5 ? -1 : 1
    //     });
    // }
    // 倒数结束回调
    HitFish.prototype.countEnd = function () {
        HitFish.hitFishMain.stopCount();
        // 延迟两秒，让老师可以点击单词变回图片
        this.checkWellDone();
    };
    // 判断是否完成游戏
    HitFish.prototype.checkWellDone = function () {
        var isAllRight = true;
        for (var i = 0; i < HitFish.gameFish.length; i++) {
            isAllRight = isAllRight && HitFish.gameFish[i].isRight;
        }
        if (isAllRight) {
            // u3、u4反馈0323.excel，去掉gameover
            this.gameOver();
            // HitFish.hitFishMain.showWellDone(this, this.gameOver);
        }
    };
    HitFish.started = false; // 游戏是否开始
    return HitFish;
}());
//# sourceMappingURL=HitFish.js.map