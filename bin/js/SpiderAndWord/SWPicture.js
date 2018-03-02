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
        _this.body = new Laya.Image("SpiderAndWord/" + pic);
        // var bound:Laya.Rectangle = this.body.getBounds();
        // this.body.pos(-bound.width/2,-bound.height/2);
        _this.body.centerX = 0;
        _this.body.centerY = 0;
        _this.addChild(_this.body);
        return _this;
        // this.body.on(Laya.Event.CLICK,this,this.mouseClick);
    }
    return HSPicture;
}(Laya.Sprite));
//# sourceMappingURL=SWPicture.js.map