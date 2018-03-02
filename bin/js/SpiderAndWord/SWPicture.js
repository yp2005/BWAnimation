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
// 蜘蛛图片类
var HSPicture = /** @class */ (function (_super) {
    __extends(HSPicture, _super);
    function HSPicture(word, pic) {
        var _this = _super.call(this) || this;
        _this.word = word;
        _this.isRight = false;
        _this.body = new Laya.Image("SpiderAndWord/" + pic);
        _this.bg = new Laya.Image("SpiderAndWord/spider_rightshadow.png");
        _this.body.zOrder = 2;
        _this.bg.zOrder = 1;
        _this.bg.visible = false;
        _this.bg.centerX = 0;
        _this.bg.centerY = 0;
        _this.addChild(_this.bg);
        _this.body.centerX = 0;
        _this.body.centerY = 0;
        _this.addChild(_this.body);
        return _this;
        // this.body.on(Laya.Event.CLICK,this,this.mouseClick);
    }
    HSPicture.prototype.showBg = function () {
        this.isRight = true;
        this.bg.visible = true;
    };
    return HSPicture;
}(Laya.Sprite));
//# sourceMappingURL=SWPicture.js.map