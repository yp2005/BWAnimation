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
var Hammer = /** @class */ (function (_super) {
    __extends(Hammer, _super);
    function Hammer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hammer.prototype.play = function (x, y) {
        this.pos(x, y);
        this.hit.play(0, false);
    };
    return Hammer;
}(ui.HammerUI));
//# sourceMappingURL=Hammer.js.map