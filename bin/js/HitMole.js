// 打地鼠
//import Browser = Laya.Browser;
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitMole = /** @class */ (function () {
    function HitMole(config) {
        // 如果没有传入配置，使用默认配置
        if (!config || !config.game) {
            config = {
                gameModel: false,
                game: "word",
                words: ["red", "pink", "orange", "green", "black", "white"],
                pictures: [],
            };
        }
        HitMole.gameConfig = config;
        // 初始化舞台设置
        Laya.init(1024, 768, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#ffffff";
        // 加载游戏资源
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitMole.atlas", type: Laya.Loader.ATLAS },
            { url: "HitMole/mainBG.jpg", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitMole.prototype.onload = function () {
        HitMole.hitMoleMain = new HitMoleMain();
        HitMole.hitMoleMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitMole.hitMoleMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitMole.hitMoleMain);
        this.initMoles();
        this.gameOver();
        HitMole.hitMoleMain.replayBtn.visible = false;
    };
    // 游戏开始
    HitMole.prototype.gameStart = function () {
        HitMole.hitMoleMain.showSetting(false);
        HitMole.hitMoleMain.replayBtn.visible = false;
        HitMole.hitMoleMain.startBtn.visible = false;
        //this.initWords();
        this.wordTmp = JSON.parse(JSON.stringify(HitMole.gameConfig.words));
        this.pictureTmp = JSON.parse(JSON.stringify(HitMole.gameConfig.pictures));
        Laya.stage.on(Laya.Event.CLICK, this, this.showMole);
        // 晚一点开始游戏，否则点击开始按钮就会触发舞台点击事件，调用showMole方法
        Laya.timer.once(500, this, this.setStartState);
    };
    // 设置游戏开始状态
    HitMole.prototype.setStartState = function () {
        HitMole.started = true;
    };
    // 初始化老鼠
    HitMole.prototype.initMoles = function () {
        if (!this.moles || this.moles.length == 0) {
            this.moles = new Array();
            for (var i = 0; i < 12; i++) {
                var item = HitMole.hitMoleMain.getChildByName("item" + i);
                var mole = new Mole(item.getChildByName("mouseImg"), item.getChildByName("wordBg"), item.getChildByName("word"));
                mole.x = item.x;
                mole.y = item.y;
                this.moles.push(mole);
            }
        }
        else {
            for (var _i = 0, _a = this.moles; _i < _a.length; _i++) {
                var mole = _a[_i];
                mole.reset();
            }
        }
    };
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
    HitMole.prototype.showMole = function () {
        if (!HitMole.started) {
            return;
        }
        if (this.currentMole) {
            this.currentMole.hit(HitMole.gameConfig.game);
            HitMole.hitMoleMain.showHammer(this.currentMole);
            this.currentMole = null;
        }
        else {
            if ((HitMole.gameConfig.game == "word" && this.wordTmp.length > 0)
                || (HitMole.gameConfig.game == "picture" && this.pictureTmp.length > 0)) {
                // 老鼠出洞音效文件
                var audio = "res/audio/mole-out.mp3";
                // 随机一个地洞位置和上次位置不同
                var molePositionIndex = void 0;
                while (true) {
                    molePositionIndex = Math.floor(Math.random() * 12);
                    if (molePositionIndex != this.currentMoleIndex) {
                        break;
                    }
                }
                this.currentMoleIndex = molePositionIndex;
                this.currentMole = this.moles[molePositionIndex];
                if (HitMole.gameConfig.game == "word") {
                    // 随机一个单词出来
                    var positionIndex = Math.floor(Math.random() * this.wordTmp.length);
                    var word = this.wordTmp[positionIndex];
                    this.wordTmp.splice(positionIndex, 1);
                    this.currentMole.setPic("HitMole/mouse.png");
                    this.currentMole.setText(word);
                    this.currentMole.showMouse(audio);
                }
                else if (HitMole.gameConfig.game == "picture") {
                    // 随机一张图片
                    var positionIndex = Math.floor(Math.random() * this.pictureTmp.length);
                    var picture = this.pictureTmp[positionIndex];
                    this.pictureTmp.splice(positionIndex, 1);
                    this.currentMole.setPic("HitMole/" + picture);
                    this.currentMole.showPic(audio);
                }
            }
            else {
                this.initMoles();
                Laya.stage.off(Laya.Event.CLICK, this, this.showMole);
                HitMole.hitMoleMain.showWellDone(this, this.gameOver);
            }
        }
    };
    // 游戏结束
    HitMole.prototype.gameOver = function () {
        HitMole.hitMoleMain.wellDone.visible = false;
        HitMole.started = false;
        HitMole.hitMoleMain.replayBtn.visible = true;
        HitMole.hitMoleMain.hidHammer();
        HitMole.hitMoleMain.showSetting(true);
    };
    HitMole.started = false; // 游戏是否开始
    return HitMole;
}());
//# sourceMappingURL=HitMole.js.map