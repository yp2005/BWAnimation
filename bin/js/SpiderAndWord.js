// 蜘蛛
var Stage = Laya.Stage;
var WebGL = Laya.WebGL;
var Sprite = Laya.Sprite;
var SpiderAndWord = /** @class */ (function () {
    function SpiderAndWord(config) {
        this.wordArrs = [["ugly", "beautiful"], ["happy", "sad"], ["old", "young"]]; //单词组合
        // 如果没有传入配置，使用默认配置
        if (!config) {
            config = {
                gameModel: false,
                rightWord: "beautiful",
                wrongWord: "ugly",
                wordNum: 8,
                rightNum: 4,
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
        var text = new Laya.Text();
        text.text = "fffff";
        text.font = "ff";
        // ff字体加载完再加载主页面
        Laya.timer.once(100, this, function () {
            SpiderAndWord.spiderAndWordMain = new SpiderAndWordMain();
            SpiderAndWord.spiderAndWordMain.replayBtn.on(Laya.Event.CLICK, this, SpiderAndWord.restart);
            Laya.stage.addChild(SpiderAndWord.spiderAndWordMain);
            SpiderAndWord.started = false;
            SpiderAndWord.startPos.x = SpiderAndWord.startPos.x + SpiderAndWord.offset;
            SpiderAndWord.startPos.y = SpiderAndWord.startPos.y + SpiderAndWord.offset;
            SpiderAndWord.endPos.x = SpiderAndWord.endPos.x + SpiderAndWord.offset;
            SpiderAndWord.endPos.y = SpiderAndWord.endPos.y + SpiderAndWord.offset;
            SpiderAndWord.currentSpider = new Spider();
            SpiderAndWord.currentSpider.visible = false;
            SpiderAndWord.currentSpider.zOrder = 10;
            Laya.stage.addChild(SpiderAndWord.currentSpider);
            SpiderAndWord.posArr = SpiderAndWord.posArr.map(function (p) {
                return { x: (p.x + SpiderAndWord.offset), y: (p.y + SpiderAndWord.offset) };
            });
            SpiderAndWord.gameStart();
        });
    };
    SpiderAndWord.restart = function () {
        if (SpiderAndWord.spiderAndWordMain.replayBtn.skin.indexOf("disabled") != -1) {
            return;
        }
        SpiderAndWord.spiderAndWordMain.replayBtn.skin = "common/replay-disabled.png";
        SpiderAndWord.currentSpider.visible = false;
        for (var _i = 0, _a = SpiderAndWord.currentPics; _i < _a.length; _i++) {
            var picture = _a[_i];
            picture.removeSelf();
            picture.destroy();
        }
        SpiderAndWord.gameStart();
    };
    // 图片点击事件
    SpiderAndWord.mouseClick = function (hsPic) {
        // 只有当游戏已经开始并且蜘蛛空闲状态，才能执行任务
        if (SpiderAndWord.started && !SpiderAndWord.isChecking) {
            SpiderAndWord.speedPlus = 4;
            // SpiderAndWord.targetPos = {x:(hsPic.x+SpiderAndWord.offset),y:(hsPic.y+SpiderAndWord.offset)};
            SpiderAndWord.targetPos = { x: hsPic.x, y: hsPic.y };
            SpiderAndWord.currentWord = hsPic.word;
            SpiderAndWord.isChecking = true;
            SpiderAndWord.currentPic = hsPic;
        }
    };
    // 初始化
    SpiderAndWord.init = function () {
        SpiderAndWord.currentSpider.pos(SpiderAndWord.startPos.x, SpiderAndWord.startPos.y);
        SpiderAndWord.targetPos = SpiderAndWord.endPos;
        SpiderAndWord.currentSpider.visible = true;
        SpiderAndWord.started = true;
        SpiderAndWord.isChecking = false;
        var rightWord = SpiderAndWord.gameConfig.rightWord;
        var wrongWord = SpiderAndWord.gameConfig.wrongWord;
        var rightnum = SpiderAndWord.gameConfig.rightNum;
        var wordNum = SpiderAndWord.gameConfig.wordNum;
        var rightpics = SpiderAndWord.wordNums[rightWord];
        // let wrongpics = SpiderAndWord.wordNums[wrongWord];
        SpiderAndWord.currentPics = new Array();
        // 获取一个1-8的随机数组
        var ranPos = CommonTools.getRandomArr(8);
        var picArr1 = CommonTools.getRandomArr(rightpics);
        // let picArr2 = CommonTools.getRandomArr(4);
        // 只取其中 rightnum 个位置
        for (var i = 0; i < rightnum; i++) {
            // 图片编号
            var picNum = picArr1[i];
            // 图片的位置随机获取
            var picPos = ranPos[i] - 1;
            var hsPic = new HSPicture(rightWord, "spiderpic-" + rightWord + "-" + picNum + ".png");
            hsPic.changePic("spiderpic-" + rightWord + "-" + picNum + ".png");
            hsPic.pos(SpiderAndWord.posArr[picPos].x, SpiderAndWord.posArr[picPos].y);
            hsPic.body.on(Laya.Event.CLICK, this, SpiderAndWord.mouseClick, [hsPic]);
            SpiderAndWord.currentPics.push(hsPic);
            Laya.stage.addChild(hsPic);
        }
        if (wrongWord) {
            var wrongpics = SpiderAndWord.wordNums[wrongWord];
            var wrongnum = wordNum - rightnum;
            var picArr2 = CommonTools.getRandomArr(wrongpics);
            // 只取其中 wrongnum 个位置
            for (var i = 0; i < wrongnum; i++) {
                // 图片编号
                var picNum = picArr2[i];
                // 图片的位置随机获取
                var picPos = ranPos[rightnum + i] - 1;
                var hsPic = new HSPicture(wrongWord, "spiderpic-" + wrongWord + "-" + picNum + ".png");
                hsPic.changePic("spiderpic-" + wrongWord + "-" + picNum + ".png");
                hsPic.pos(SpiderAndWord.posArr[picPos].x, SpiderAndWord.posArr[picPos].y);
                hsPic.body.on(Laya.Event.CLICK, this, SpiderAndWord.mouseClick, [hsPic]);
                SpiderAndWord.currentPics.push(hsPic);
                Laya.stage.addChild(hsPic);
            }
        }
        // 如果是蝴蝶游戏，基础速度变快
        // if(SpiderAndWord.gameConfig.word === 'beautiful' || SpiderAndWord.gameConfig.word === 'ugly'){
        // }
    };
    // 游戏开始
    SpiderAndWord.gameStart = function () {
        SpiderAndWord.spiderAndWordMain.replayBtn.skin = "common/replay-disabled.png";
        SpiderAndWord.init();
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, SpiderAndWord.onLoop);
        // Laya.stage.on(Laya.Event.CLICK,this,SpiderAndWord.mouseClick);
    };
    // 按帧循环，显示蜘蛛位置
    SpiderAndWord.onLoop = function () {
        var spiderX = SpiderAndWord.currentSpider.x;
        var spiderY = SpiderAndWord.currentSpider.y;
        //去程先横向移动，返程先纵向移动
        if (SpiderAndWord.isBack) {
            if (spiderY != SpiderAndWord.targetPos.y) {
                var _y = SpiderAndWord.getDistanceValue(SpiderAndWord.targetPos.y, spiderY);
                SpiderAndWord.currentSpider.pos(spiderX, spiderY + _y);
            }
            else if (spiderX != SpiderAndWord.targetPos.x) {
                SpiderAndWord.speedPlus = 0;
                // u3、u4反馈0323.excel，游戏结束的话蜘蛛回到上面就不再横向移动了
                if (SpiderAndWord.started) {
                    // 不必回到起点才可以选择
                    SpiderAndWord.isBack = false;
                    SpiderAndWord.isChecking = false;
                    var _x = SpiderAndWord.getDistanceValue(SpiderAndWord.targetPos.x, spiderX);
                    SpiderAndWord.currentSpider.pos(spiderX + _x, spiderY);
                }
                else {
                    Laya.timer.clear(this, SpiderAndWord.onLoop);
                }
            }
        }
        else {
            if (spiderX != SpiderAndWord.targetPos.x) {
                var _x = SpiderAndWord.getDistanceValue(SpiderAndWord.targetPos.x, spiderX);
                SpiderAndWord.currentSpider.pos(spiderX + _x, spiderY);
            }
            else if (spiderY != SpiderAndWord.targetPos.y) {
                // SpiderAndWord.speedPlus = 6;
                var _y = SpiderAndWord.getDistanceValue(SpiderAndWord.targetPos.y, spiderY);
                SpiderAndWord.currentSpider.pos(spiderX, spiderY + _y);
            }
        }
        // 到达目标位置
        if (spiderX === SpiderAndWord.targetPos.x && spiderY === SpiderAndWord.targetPos.y) {
            spiderX === SpiderAndWord.endPos.x ? (SpiderAndWord.targetPos = SpiderAndWord.startPos) : (SpiderAndWord.targetPos = SpiderAndWord.endPos);
            //如果是在来回线以下，即是返程
            if (spiderY != SpiderAndWord.startPos.y) {
                SpiderAndWord.isBack = true;
                // 停留三秒
                Laya.timer.clear(this, SpiderAndWord.onLoop);
                SpiderAndWord.currentSpider.playAction(SpiderAndWord.checkPic());
                Laya.timer.once(3000, this, SpiderAndWord.resume);
            }
            else {
                SpiderAndWord.isBack = false;
                SpiderAndWord.isChecking = false;
            }
        }
    };
    // 验证图片是否正确
    SpiderAndWord.checkPic = function () {
        //spider_wrong
        //spider_right
        var _word = (SpiderAndWord.currentWord === SpiderAndWord.gameConfig.rightWord) ? "spider_right" : "spider_wrong";
        if (_word === "spider_right") {
            SpiderAndWord.currentPic.showBg();
        }
        else {
            SpiderAndWord.currentPic.playNo();
        }
        if (SpiderAndWord.checkAllRight()) {
            Laya.timer.once(3000, this, SpiderAndWord.gameOver);
        }
        return _word;
    };
    SpiderAndWord.showWellDone = function () {
        // u3、u4反馈0323.excel，去掉gameover
        SpiderAndWord.gameOver();
        // SpiderAndWord.currentSpider.visible = false;
        // for(let picture of SpiderAndWord.currentPics) {
        //     picture.removeSelf();
        //     picture.destroy();
        // }
        // SpiderAndWord.spiderAndWordMain.showWellDone(this,SpiderAndWord.gameOver);
    };
    // 验证是否所有对的图片都选出
    SpiderAndWord.checkAllRight = function () {
        var isAllRight = true;
        SpiderAndWord.currentPics.forEach(function (p) {
            if (p.word === SpiderAndWord.gameConfig.rightWord) {
                isAllRight = isAllRight && p.isRight;
            }
        });
        return isAllRight;
    };
    // 重新开始游走循环
    SpiderAndWord.resume = function () {
        //恢复游戏循环
        Laya.timer.frameLoop(1, this, SpiderAndWord.onLoop);
        SpiderAndWord.currentSpider.playAction("spider_move");
    };
    // 获取当前点与目标点的坐标距离
    SpiderAndWord.getDistanceValue = function (target, pos) {
        if (target === void 0) { target = 0; }
        if (pos === void 0) { pos = 0; }
        var _value = target - pos;
        if (_value === 0)
            return 0;
        var absValue = Math.min(Math.abs(_value), (SpiderAndWord.speed + SpiderAndWord.speedPlus));
        return (_value / Math.abs(_value)) * absValue;
    };
    // 游戏结束
    SpiderAndWord.gameOver = function () {
        // SpiderAndWord.spiderAndWordMain.wellDone.visible = false;
        // SpiderAndWord.spiderAndWordMain.replayBtn.visible = true;
        // SpiderAndWord.spiderAndWordMain.showSetting(true);
        Laya.SoundManager.playMusic("res/audio/spider-success.mp3", 1);
        SpiderAndWord.started = false;
        SpiderAndWord.spiderAndWordMain.replayBtn.skin = "common/replay-abled.png";
    };
    SpiderAndWord.speed = 4; //移动速度
    SpiderAndWord.speedPlus = 0; //增加的移动速度
    SpiderAndWord.offset = 50; //偏移量
    SpiderAndWord.startPos = { x: 40, y: 50 }; //起始位置-左
    SpiderAndWord.endPos = { x: 880, y: 50 }; //起始位置-右
    SpiderAndWord.started = false; //游戏是否开始
    SpiderAndWord.isBack = false; //是否返程
    SpiderAndWord.isChecking = false; //是否正在执行检查
    SpiderAndWord.currentWord = ""; //当前选中的图片的单词
    SpiderAndWord.wordNums = {
        "ugly": 4,
        "beautiful": 4,
        "happy": 4,
        "sad": 4,
        "old": 4,
        "young": 4,
        "clothes": 6
    };
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