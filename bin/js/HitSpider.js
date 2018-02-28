// 蜘蛛
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var HitSpider = /** @class */ (function () {
    function HitSpider(config) {
        this.speed = 5; //移动速度
        this.offset = 50; //偏移量
        this.startPos = { x: 25, y: 50 }; //起始位置-左
        this.endPos = { x: 800, y: 50 }; //起始位置-右
        this.started = false; //游戏是否开始
        this.isBack = false; //是否返程
        this.isChecking = false; //是否正在执行检查
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                words: [
                    { word: "car", pictures: ["car.png", "car.png", "car.png", "car.png", "car.png"] },
                    { word: "train", pictures: ["train.png"] },
                    { word: "doll", pictures: ["doll.png"] },
                    { word: "computer", pictures: ["computer.png"] },
                    { word: "bike", pictures: ["bike.png"] },
                    { word: "ball", pictures: ["ball.png"] }
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
        var resArray = [
            { url: "res/atlas/common.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/HitSpider.atlas", type: Laya.Loader.ATLAS },
            { url: "HitSpider/bg.png", type: Laya.Loader.IMAGE },
            { url: "template/Text/TextBox.png", type: Laya.Loader.IMAGE },
            { url: "template/ButtonTab/btn_LargeTabButton_Middle.png", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onload));
    }
    // 游戏资源加载完成进行游戏初始化设置
    HitSpider.prototype.onload = function () {
        HitSpider.hitSpiderMain = new HitSpiderMain();
        HitSpider.hitSpiderMain.replayBtn.on(Laya.Event.CLICK, this, this.gameStart);
        HitSpider.hitSpiderMain.startBtn.on(Laya.Event.CLICK, this, this.gameStart);
        Laya.stage.addChild(HitSpider.hitSpiderMain);
        HitSpider.hitSpiderMain.startBtn.visible = true;
        HitSpider.hitSpiderMain.replayBtn.visible = false;
        this.started = false;
        this.startPos.x = this.startPos.x + this.offset;
        this.startPos.y = this.startPos.y + this.offset;
        this.endPos.x = this.endPos.x + this.offset;
        this.endPos.y = this.endPos.y + this.offset;
        HitSpider.currentSpider = new Spider();
        HitSpider.currentSpider.visible = false;
        HitSpider.currentSpider.zOrder = 1;
        Laya.stage.addChild(HitSpider.currentSpider);
    };
    // 图片点击事件
    HitSpider.prototype.mouseClick = function (hsPic) {
        // 只有当游戏已经开始并且蜘蛛空闲状态，才能执行任务
        if (this.started && !this.isChecking) {
            HitSpider.targetPos = { x: (hsPic.x + this.offset), y: (hsPic.y + this.offset) };
            this.isChecking = true;
        }
    };
    // 初始化
    HitSpider.prototype.init = function () {
        HitSpider.currentSpider.pos(this.startPos.x, this.startPos.y);
        HitSpider.targetPos = this.endPos;
        HitSpider.currentSpider.visible = true;
        this.started = true;
        this.isChecking = false;
        var pictures = new Array();
        for (var i = 0; i < 8; i++) {
            var hsPic = new HSPicture("happy", "fly-" + (i + 1) + ".png");
            hsPic.pos(HitSpider.posArr[i].x, HitSpider.posArr[i].y);
            hsPic.body.on(Laya.Event.CLICK, this, this.mouseClick, [hsPic]);
            Laya.stage.addChild(hsPic);
        }
    };
    // 游戏开始
    HitSpider.prototype.gameStart = function () {
        // HitSpider.hitSpiderMain.showSetting(false);
        HitSpider.hitSpiderMain.replayBtn.visible = false;
        HitSpider.hitSpiderMain.startBtn.visible = false;
        this.init();
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        // Laya.stage.on(Laya.Event.CLICK,this,this.mouseClick);
    };
    // 按帧循环，显示蜘蛛位置
    HitSpider.prototype.onLoop = function () {
        var spiderX = HitSpider.currentSpider.x;
        var spiderY = HitSpider.currentSpider.y;
        //去程先横向移动，返程先纵向移动
        if (this.isBack) {
            if (spiderY != HitSpider.targetPos.y) {
                var _y = this.getDistanceValue(HitSpider.targetPos.y, spiderY);
                HitSpider.currentSpider.pos(spiderX, spiderY + _y);
            }
            else if (spiderX != HitSpider.targetPos.x) {
                var _x = this.getDistanceValue(HitSpider.targetPos.x, spiderX);
                HitSpider.currentSpider.pos(spiderX + _x, spiderY);
            }
        }
        else {
            if (spiderX != HitSpider.targetPos.x) {
                var _x = this.getDistanceValue(HitSpider.targetPos.x, spiderX);
                HitSpider.currentSpider.pos(spiderX + _x, spiderY);
            }
            else if (spiderY != HitSpider.targetPos.y) {
                var _y = this.getDistanceValue(HitSpider.targetPos.y, spiderY);
                HitSpider.currentSpider.pos(spiderX, spiderY + _y);
            }
        }
        // 到达目标位置
        if (spiderX === HitSpider.targetPos.x && spiderY === HitSpider.targetPos.y) {
            spiderX === this.endPos.x ? (HitSpider.targetPos = this.startPos) : (HitSpider.targetPos = this.endPos);
            //如果是在来回线以下，即是返程
            if (spiderY != this.startPos.y) {
                this.isBack = true;
                // 停留三秒
                Laya.timer.clear(this, this.onLoop);
                HitSpider.currentSpider.playAction(this.checkPic());
                Laya.timer.once(3000, this, this.resume);
            }
            else {
                this.isBack = false;
                this.isChecking = false;
            }
        }
    };
    // 验证图片是否正确
    HitSpider.prototype.checkPic = function () {
        //spider_wrong
        //spider_right
        return "spider_right";
    };
    // 重新开始游走循环
    HitSpider.prototype.resume = function () {
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, this.onLoop);
        HitSpider.currentSpider.playAction("spider_move");
    };
    // 获取当前点与目标点的坐标距离
    HitSpider.prototype.getDistanceValue = function (target, pos) {
        if (target === void 0) { target = 0; }
        if (pos === void 0) { pos = 0; }
        var _value = target - pos;
        if (_value === 0)
            return 0;
        var absValue = Math.min(Math.abs(_value), this.speed);
        return (_value / Math.abs(_value)) * absValue;
    };
    // 八个位置，第一排1234，第二排5678
    HitSpider.posArr = [
        { x: 50, y: 300 },
        { x: 300, y: 240 },
        { x: 560, y: 330 },
        { x: 755, y: 230 },
        { x: 120, y: 580 },
        { x: 320, y: 460 },
        { x: 550, y: 600 },
        { x: 800, y: 520 }
    ];
    return HitSpider;
}());
var config = {
    gameModel: true,
    words: [
        { word: "car", pictures: ["car.png", "car.png", "car.png", "car.png", "car.png"] },
        { word: "train", pictures: ["train.png"] },
        { word: "doll", pictures: ["doll.png"] },
        { word: "computer", pictures: ["computer.png"] },
        { word: "bike", pictures: ["bike.png"] },
        { word: "ball", pictures: ["ball.png"] }
    ]
};
new HitSpider(config);
//# sourceMappingURL=HitSpider.js.map