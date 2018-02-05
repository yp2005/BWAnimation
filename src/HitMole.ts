// 打地鼠
//import Browser = Laya.Browser;
import Stage = Laya.Stage;
import WebGL   = Laya.WebGL;
import Sprite = Laya.Sprite;
class HitMole {
    // private browserWidth: number = Browser.clientWidth;
    // private browserHeight: number = Browser.clientHeight;
    private hitMoleMain: HitMoleMain; // 打地鼠主界面
    private moles: Mole[]; // 所有老鼠
    private words: string[]; // 所有单词
    private molesTemp: Mole[]; // 存放这次游戏随机出来的老鼠
    private currentMole: Mole; // 当前显示的老鼠
    private started: boolean = false; // 游戏是否开始
    constructor()
    {
        // 初始化舞台设置
		Laya.init(1024, 768, WebGL);
		Laya.stage.alignV = Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = "showall";
		Laya.stage.bgColor = "#ffffff";
        
        // 加载游戏资源
        let resArray: any[] = [
            {url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS},
            {url: "HitMole/map_1.png", type: Laya.Loader.IMAGE}
        ];
        
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));       
    }

    // 游戏资源加载完成进行游戏初始化设置
    private onload() {
        this.hitMoleMain = new HitMoleMain();
        this.hitMoleMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        this.hitMoleMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(this.hitMoleMain);
        this.initMoles();
        this.gameOver();
        this.hitMoleMain.replayBtn.visible = false;
    }

    // 游戏开始
    private gameStart() {
        this.hitMoleMain.replayBtn.visible = false;
        this.hitMoleMain.startBtn.visible = false;
        this.started = true;
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
    }

    // 初始化老鼠
    private initMoles() {
        if(!this.moles || this.moles.length == 0) {
            this.moles = new Array<Mole>();
            for(let i = 0; i < HitMoleConfig.moleNumber; i++) {
                let item = this.hitMoleMain.getChildByName("item" + i) as Laya.Box;
                let mole = new Mole(item.getChildByName("ani") as Laya.Animation,
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
        for(let i = 0; i < HitMoleConfig.moleNumber; i++) {
            pos.push(i);
        }
        for(let word of HitMoleConfig.words) {
            let position  = word.position - 1;
            if(HitMoleConfig.position == "random") {
                let positionIndex = Math.floor(Math.random() * pos.length);
                position = pos[positionIndex];
                pos.splice(positionIndex, 1);
            }
            this.moles[position].setText(word.text);
            this.moles[position].setAudio(word.audio);
            this.molesTemp.push(this.moles[position]);
        } 
    }

    // 显示老鼠
    private showMole() {
        if(!this.started) {
            return;
        }
        if(this.currentMole) {
            this.currentMole.hit();
            this.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else {
            if(this.molesTemp.length > 0) {
                let showMoleIndex = Math.floor(Math.random() * this.molesTemp.length);
                this.molesTemp[showMoleIndex].show();
                this.currentMole = this.molesTemp[showMoleIndex];
                this.molesTemp.splice(showMoleIndex, 1);
            }
            else {
                this.initMoles();
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                this.hitMoleMain.showWellDone(this, this.gameOver);
            }
        }
    }

    // 游戏结束
    private gameOver() {
        this.hitMoleMain.wellDone.visible = false;
        this.started = false;
        this.initWords();
        this.hitMoleMain.replayBtn.visible = true;
        this.hitMoleMain.hidHammer();
    }

}
new HitMole();