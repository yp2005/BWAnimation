/**
 * 蜘蛛类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spider = /** @class */ (function (_super) {
    __extends(Spider, _super);
    function Spider() {
        var _this = _super.call(this) || this;
        //当前动作
        _this.action = "";
        _this.init();
        return _this;
    }
    Spider.prototype.init = function () {
        if (!Spider.cached) {
            Spider.cached = true;
            //缓存移动动画
            Laya.Animation.createFrames(["HitSpider/spider-move-1.png", "HitSpider/spider-move-2.png", "HitSpider/spider-move-3.png", "HitSpider/spider-move-2.png"], "spider_move");
            //缓存选中动画
            Laya.Animation.createFrames(["HitSpider/spider-right-1.png"], "spider_right");
            //缓存未选中动画
            var wrongArr = [];
            for (var i = 1; i < 16; i++) {
                wrongArr.push("HitSpider/spider-wrong-" + i + ".png");
            }
            Laya.Animation.createFrames(wrongArr, "spider_wrong");
        }
        if (!this.body) {
            //创建一个动画作为蜘蛛的身体
            this.body = new Laya.Animation();
            this.body.interval = 500;
            this.addChild(this.body);
            //添加动画播放完成事件
            this.body.on(Laya.Event.COMPLETE, this, this.onPlayComplete);
        }
        // 蜘蛛线
        this.graphics.drawLine(0, -768, 0, -55, "#fff", 4);
        //默认循环移动动画
        this.playAction("spider_move");
    };
    // 动画完毕回调
    Spider.prototype.onPlayComplete = function () {
    };
    // 执行指定动画
    Spider.prototype.playAction = function (action) {
        //记录当前的播放动画类型
        this.action = action;
        if (action === "spider_wrong") {
            this.body.interval = 100;
        }
        else {
            this.body.interval = 500;
        }
        //根据不同的动画类型播放动画;
        this.body.play(0, true, action);
        //获取动画大小的区域
        var bound = this.body.getBounds();
        //设置居中
        this.body.pos(-bound.width / 2, -bound.height / 2);
    };
    return Spider;
}(Laya.Sprite));
//# sourceMappingURL=Spider.js.map