// 打地鼠
//import Browser = Laya.Browser;
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitMole {
    // private browserWidth: number = Browser.clientWidth;
    // private browserHeight: number = Browser.clientHeight;
    public static hitMoleMain: HitMoleMain; // 打地鼠主界面
    private moles: Mole[]; // 所有老鼠
    //private words: string[]; // 所有单词
    public static gameConfig: any;
    private molesTemp: Mole[]; // 存放这次游戏随机出来的老鼠
    private currentMole: Mole; // 当前显示的老鼠
    public static started: boolean = false; // 游戏是否开始
    
    constructor(config: any)
    {
        if(!config || !config.game) {
            config = {
                game: "word",
                words: ["red", "pink", "orange", "green", "black", "white"],
                pictures: [],
            }
        }
        HitMole.gameConfig = config;

        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS},
            {url: "HitMole/mainBG.jpg", type: Laya.Loader.IMAGE},
            {url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE},
            {url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));       
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        HitMole.hitMoleMain = new HitMoleMain();
        HitMole.hitMoleMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitMole.hitMoleMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitMole.hitMoleMain);
        this.initMoles();
        this.gameOver();
        HitMole.hitMoleMain.replayBtn.visible = false;
    }

    // 游戏开始
    private gameStart() {
        HitMole.hitMoleMain.showSetting(false);
        HitMole.hitMoleMain.replayBtn.visible = false;
        HitMole.hitMoleMain.startBtn.visible = false;
        this.initWords();
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        Laya.timer.once(500, this, this.setStartState);
    }

    // 设置游戏开始状态
    private setStartState() {
        HitMole.started = true;
    }

    // 初始化老鼠
    private initMoles() {
        if(!this.moles || this.moles.length == 0) {
            this.moles = new Array<Mole>();
            for(let i = 0; i < 12; i++) {
                let item = HitMole.hitMoleMain.getChildByName("item" + i) as Laya.Box;
                let mole = new Mole(item.getChildByName("mouseImg") as Laya.Image,
                                    item.getChildByName("wordBg") as Laya.Image,
                                    item.getChildByName("word") as Laya.Text);
                mole.x = item.x;
                mole.y = item.y;
                this.moles.push(mole);
            }
        }
        else {
            for(let mole of this.moles) {
                mole.reset();
            }
        }
        
    }

    // 初始化单词
    private initWords() { 
        this.molesTemp = new Array<Mole>();
        let pos = new Array<number>();
        for(let i = 0; i < 12; i++) {
            pos.push(i);
        }
        // 如果是单词游戏进行单词初始化
        if(HitMole.gameConfig.game == "word") {
            for(let word of HitMole.gameConfig.words) {
                let positionIndex = Math.floor(Math.random() * pos.length);
                let position = pos[positionIndex];
                pos.splice(positionIndex, 1);
                this.moles[position].setText(word);
                this.molesTemp.push(this.moles[position]);
            } 
        }
        else if(HitMole.gameConfig.game == "picture") {
            for(let pic of HitMole.gameConfig.pictures) {
                let positionIndex = Math.floor(Math.random() * pos.length);
                let position = pos[positionIndex];
                pos.splice(positionIndex, 1);
                this.moles[position].setPic("HitMole/" + pic);
                this.molesTemp.push(this.moles[position]);
            } 
        }
    }

    // 显示老鼠
    private showMole() {
        if(!HitMole.started) {
            return;
        }
        if(this.currentMole) {
            this.currentMole.hit(HitMole.gameConfig.game);
            HitMole.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else {
            if(this.molesTemp.length > 0) {
                let showMoleIndex = Math.floor(Math.random() * this.molesTemp.length);
                // TODO 随机一个生效文件
                let audio = "";
                if(HitMole.gameConfig.game == "word") {
                    this.molesTemp[showMoleIndex].showMouse(audio);
                }
                else if(HitMole.gameConfig.game == "picture") {
                    this.molesTemp[showMoleIndex].showPic(audio);
                }
                
                this.currentMole = this.molesTemp[showMoleIndex];
                this.molesTemp.splice(showMoleIndex, 1);
            }
            else {
                this.initMoles();
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                HitMole.hitMoleMain.showWellDone(this, this.gameOver);
            }
        }
    }

    // 游戏结束
    private gameOver() {
        HitMole.hitMoleMain.wellDone.visible = false;
        HitMole.started = false;
        HitMole.hitMoleMain.replayBtn.visible = true;
        HitMole.hitMoleMain.hidHammer();
        HitMole.hitMoleMain.showSetting(true);
    }

}
let config: any = {
    game: "picture", // word 地鼠单词，picture 图片
    words: ["red", "pink", "orange", "green", "black", "white"],
    pictures: ["picture1.png", "picture1.png", "picture1.png"],
};
new HitMole(config);