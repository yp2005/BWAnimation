// 蜘蛛
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var SpiderAndWord = /** @class */ (function () {
    function SpiderAndWord(config) {
        this.speed = 5; //移动速度
        this.offset = 50; //偏移量
        this.startPos = { x: 40, y: 50 }; //起始位置-左
        this.endPos = { x: 880, y: 50 }; //起始位置-右
        this.isBack = false; //是否返程
        this.isChecking = false; //是否正在执行检查
        this.currentWord = ""; //当前选中的图片的单词
        this.wordArrs = [["ugly", "beautiful"], ["happy", "sad"], ["old", "young"]]; //单词组合
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                word: "beautiful"
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/SpiderAndWord.atlas", type: Laya.Loader.ATLAS },
            { url: "SpiderAndWord/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    SpiderAndWord.prototype.onload = function () {
        var _this = this;
        SpiderAndWord.spiderAndWordMain = new SpiderAndWordMain();
        SpiderAndWord.spiderAndWordMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        SpiderAndWord.spiderAndWordMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(SpiderAndWord.spiderAndWordMain);
        SpiderAndWord.spiderAndWordMain.startBtn.visible = true;
        SpiderAndWord.spiderAndWordMain.replayBtn.visible = false;
        SpiderAndWord.started = false;
        this.startPos.x = this.startPos.x + this.offset;
        this.startPos.y = this.startPos.y + this.offset;
        this.endPos.x = this.endPos.x + this.offset;
        this.endPos.y = this.endPos.y + this.offset;
        SpiderAndWord.currentSpider = new Spider();
        SpiderAndWord.currentSpider.visible = false;
        SpiderAndWord.currentSpider.zOrder = 1;
        Laya.stage.addChild(SpiderAndWord.currentSpider);
        SpiderAndWord.posArr = SpiderAndWord.posArr.map(function (p) {
            return { x: (p.x + _this.offset), y: (p.y + _this.offset) };
        });
    };
    // 图片点击事件
    SpiderAndWord.prototype.mouseClick = function (hsPic) {
        // 只有当游戏已经开始并且蜘蛛空闲状态，才能执行任务
        if (SpiderAndWord.started && !this.isChecking) {
            // SpiderAndWord.targetPos = {x:(hsPic.x+this.offset),y:(hsPic.y+this.offset)};
            SpiderAndWord.targetPos = { x: hsPic.x, y: hsPic.y };
            this.currentWord = hsPic.word;
            this.isChecking = true;
        }
    };
    // 初始化
    SpiderAndWord.prototype.init = function () {
        SpiderAndWord.currentSpider.pos(this.startPos.x, this.startPos.y);
        SpiderAndWord.targetPos = this.endPos;
        SpiderAndWord.currentSpider.visible = true;
        SpiderAndWord.started = true;
        this.isChecking = false;
        SpiderAndWord.currentPics = new Array();
        var wordArr = this.wordArrs.find(function (arr) {
            return (arr.indexOf(SpiderAndWord.gameConfig.word) != -1);
        });
        // 获取一个1-8的随机数组
        var ranPos = CommonTools.getRandomArr(8);
        var picArr1 = CommonTools.getRandomArr(4);
        var picArr2 = CommonTools.getRandomArr(4);
        // console.log(JSON.stringify(ranPos))
        // console.log(JSON.stringify(picArr1))
        // console.log(JSON.stringify(picArr2))
        // 只取其中6个位置
        for (var i = 0; i < 6; i++) {
            // 对的错的各三个
            var picType = (i % 2) ? wordArr[0] : wordArr[1];
            // 对的错的各从4个图片中随机出来三个图
            var picNum = (i % 2) ? picArr1[Math.floor(i / 2)] : picArr2[Math.floor(i / 2)];
            // 图片的位置随机获取
            var picPos = ranPos[i] - 1;
            // console.log(i+"===="+"spiderpic-"+picType+"-"+picNum+".png");
            var hsPic = new HSPicture(picType, "spiderpic-" + picType + "-" + picNum + ".png");
            hsPic.pos(SpiderAndWord.posArr[picPos].x, SpiderAndWord.posArr[picPos].y);
            hsPic.body.on(Laya.Event.CLICK, this, this.mouseClick, [hsPic]);
            SpiderAndWord.currentPics.push(hsPic);
            Laya.stage.addChild(hsPic);
        }
    };
    // 游戏开始
    SpiderAndWord.prototype.gameStart = function () {
        // SpiderAndWord.spiderAndWordMain.showSetting(false);
        SpiderAndWord.spiderAndWordMain.replayBtn.visible = false;
        SpiderAndWord.spiderAndWordMain.startBtn.visible = false;
        this.init();
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        // Laya.stage.on(Laya.Event.CLICK,this,this.mouseClick);
    };
    // 按帧循环，显示蜘蛛位置
    SpiderAndWord.prototype.onLoop = function () {
        var spiderX = SpiderAndWord.currentSpider.x;
        var spiderY = SpiderAndWord.currentSpider.y;
        //去程先横向移动，返程先纵向移动
        if (this.isBack) {
            if (spiderY != SpiderAndWord.targetPos.y) {
                var _y = this.getDistanceValue(SpiderAndWord.targetPos.y, spiderY);
                SpiderAndWord.currentSpider.pos(spiderX, spiderY + _y);
            }
            else if (spiderX != SpiderAndWord.targetPos.x) {
                var _x = this.getDistanceValue(SpiderAndWord.targetPos.x, spiderX);
                SpiderAndWord.currentSpider.pos(spiderX + _x, spiderY);
            }
        }
        else {
            if (spiderX != SpiderAndWord.targetPos.x) {
                var _x = this.getDistanceValue(SpiderAndWord.targetPos.x, spiderX);
                SpiderAndWord.currentSpider.pos(spiderX + _x, spiderY);
            }
            else if (spiderY != SpiderAndWord.targetPos.y) {
                var _y = this.getDistanceValue(SpiderAndWord.targetPos.y, spiderY);
                SpiderAndWord.currentSpider.pos(spiderX, spiderY + _y);
            }
        }
        // 到达目标位置
        if (spiderX === SpiderAndWord.targetPos.x && spiderY === SpiderAndWord.targetPos.y) {
            spiderX === this.endPos.x ? (SpiderAndWord.targetPos = this.startPos) : (SpiderAndWord.targetPos = this.endPos);
            //如果是在来回线以下，即是返程
            if (spiderY != this.startPos.y) {
                this.isBack = true;
                // 停留三秒
                Laya.timer.clear(this, this.onLoop);
                SpiderAndWord.currentSpider.playAction(this.checkPic());
                Laya.timer.once(3000, this, this.resume);
            }
            else {
                this.isBack = false;
                this.isChecking = false;
            }
        }
    };
    // 验证图片是否正确
    SpiderAndWord.prototype.checkPic = function () {
        //spider_wrong
        //spider_right
        return (this.currentWord === SpiderAndWord.gameConfig.word ? "spider_right" : "spider_wrong");
    };
    // 重新开始游走循环
    SpiderAndWord.prototype.resume = function () {
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        SpiderAndWord.currentSpider.playAction("spider_move");
    };
    // 获取当前点与目标点的坐标距离
    SpiderAndWord.prototype.getDistanceValue = function (target, pos) {
        if (target === void 0) { target = 0; }
        if (pos === void 0) { pos = 0; }
        var _value = target - pos;
        if (_value === 0)
            return 0;
        var absValue = Math.min(Math.abs(_value), this.speed);
        return (_value / Math.abs(_value)) * absValue;
    };
    SpiderAndWord.started = false; //游戏是否开始
    // 八个位置，第一排1234，第二排5678
    SpiderAndWord.posArr = [
        { x: 50, y: 300 },
        { x: 300, y: 240 },
        { x: 560, y: 330 },
        { x: 755, y: 230 },
        { x: 120, y: 580 },
        { x: 320, y: 460 },
        { x: 550, y: 600 },
        { x: 800, y: 520 }
    ];
    return SpiderAndWord;
}());
//# sourceMappingURL=SpiderAndWord.js.map