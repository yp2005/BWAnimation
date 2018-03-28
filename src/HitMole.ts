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
    //private molesTemp: Mole[]; // 存放这次游戏随机出来的老鼠
    private currentMole: Mole; // 当前显示的老鼠
    private currentMoleIndex: number; // 当前显示的老鼠的位置
    public static started: boolean = false; // 游戏是否开始
    private wordTmp: string[]; // 本轮游戏剩余要显示的单词
    private pictureTmp: string[]; // 本轮游戏剩余要显示的图片
    
    constructor(config: any)
    {
        // 如果没有传入配置，使用默认配置
        if(!config || !config.game) {
            config = {
                gameModel: false,
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
            {url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS},
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
        Laya.stage.addChild(HitMole.hitMoleMain);
        this.initMoles();
        this.moles[5].startOverAni();
        Laya.stage.on(Laya.Event.CLICK, this, this.start);
    }

    // 开始
    private start() {
        Laya.stage.off(Laya.Event.CLICK, this, this.start);
        this.moles[5].hit(HitMole.gameConfig.game);
        HitMole.hitMoleMain.showHammer(this.moles[5]);
        Laya.timer.once(500, this, this.gameStart, [true]);
    }

    // 游戏开始
    private gameStart(first: boolean) {
        HitMole.hitMoleMain.showSetting(false);
        HitMole.hitMoleMain.startOverBg.visible = false;
        HitMole.hitMoleMain.startOverText.visible = false;
        HitMole.hitMoleMain.replayBtn.skin = "common/replay-disabled.png";
        this.initMoles();
        this.wordTmp = JSON.parse(JSON.stringify(HitMole.gameConfig.words));
        this.pictureTmp = JSON.parse(JSON.stringify(HitMole.gameConfig.pictures));
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        // 晚一点开始游戏，否则点击开始按钮就会触发舞台点击事件，调用showMole方法
        Laya.timer.once(500, this, this.setStartState);
        this.showMole(first)
    }

    // 设置游戏开始状态
    private setStartState() {
        HitMole.started = true;
    }

    // 初始化老鼠
    private initMoles() {
        if(!this.moles || this.moles.length == 0) { // 第一次初始化
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
        else { // 初始化过，只重置状态
            for(let mole of this.moles) {
                mole.reset();
            }
        }  
    }

    // 初始化单词
    // private initWords() { 
    //     this.molesTemp = new Array<Mole>();
    //     let pos = new Array<number>();
    //     for(let i = 0; i < 12; i++) {
    //         pos.push(i);
    //     }
    //     // 如果是单词游戏进行单词初始化
    //     if(HitMole.gameConfig.game == "word") {
    //         for(let word of HitMole.gameConfig.words) {
    //             // 为每个单词分配随机不重复的位置
    //             let positionIndex = Math.floor(Math.random() * pos.length);
    //             let position = pos[positionIndex];
    //             pos.splice(positionIndex, 1);

    //             //设置改为word后需要把图片设置为地鼠
    //             this.moles[position].setPic("HitMole/mouse.png");
    //             this.moles[position].setText(word);
    //             this.molesTemp.push(this.moles[position]);
    //         } 
    //     }
    //     else if(HitMole.gameConfig.game == "picture") { // 图片游戏进行图片初始化
    //         for(let pic of HitMole.gameConfig.pictures) {
    //             let positionIndex = Math.floor(Math.random() * pos.length);
    //             let position = pos[positionIndex];
    //             pos.splice(positionIndex, 1);
    //             this.moles[position].setPic("HitMole/" + pic);
    //             this.molesTemp.push(this.moles[position]);
    //         } 
    //     }
    // }

    // 显示老鼠
    private showMole(first: boolean) {
        if(!HitMole.started && first !== true) {
            return;
        }
        if(this.currentMole) { // 已经有老鼠冒出来，敲打老鼠
            this.currentMole.hit(HitMole.gameConfig.game);
            HitMole.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else { // 当前没有出洞的老鼠
            if((HitMole.gameConfig.game == "word" && this.wordTmp.length > 0) 
                    || (HitMole.gameConfig.game == "picture" && this.pictureTmp.length > 0)) { // 还有单词或图片没显示
                // 老鼠出洞音效文件
                let audio = "res/audio/mole-out.mp3";
                // 随机一个地洞位置和上次位置不同
                let molePositionIndex;
                while(true) {
                    molePositionIndex = Math.floor(Math.random() * 12);
                    if(molePositionIndex != this.currentMoleIndex) {
                        break;
                    }
                }
                this.currentMoleIndex = molePositionIndex;
                this.currentMole = this.moles[molePositionIndex];
                if(HitMole.gameConfig.game == "word") {
                    // 随机一个单词出来
                    let positionIndex = Math.floor(Math.random() * this.wordTmp.length);
                    let word = this.wordTmp[positionIndex];
                    this.wordTmp.splice(positionIndex, 1);
                    
                    this.currentMole.setPic("HitMole/mouse.png");
                    this.currentMole.setText(word);
                    this.currentMole.showMouse(audio);  
                }
                else if(HitMole.gameConfig.game == "picture") { // 图片游戏进行图片初始化
                    // 随机一张图片
                    let positionIndex = Math.floor(Math.random() * this.pictureTmp.length);
                    let picture = this.pictureTmp[positionIndex];
                    this.pictureTmp.splice(positionIndex, 1);
                    
                    this.currentMole.setPic("HitMole/" + picture);
                    this.currentMole.showPic(audio);
                }
            }
            else { // 单词或图片都已经显示，游戏结束
                HitMole.hitMoleMain.replayBtn.skin = "common/replay-abled.png";
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                this.gameOver();
            }
        }
    }

    // 游戏结束
    private gameOver() {
        HitMole.started = false;
        HitMole.hitMoleMain.hidHammer();
        HitMole.hitMoleMain.showSetting(true);
        this.moles[5].startOverAni();
        HitMole.hitMoleMain.startOverText.text = "Well Done";
        HitMole.hitMoleMain.startOverText.fontSize = 27;
        HitMole.hitMoleMain.startOverBg.visible = true;
        HitMole.hitMoleMain.startOverText.visible = true;
    }

}
