// 工具类
var CommonTools = /** @class */ (function () {
    function CommonTools() {
    }
    // 返回随机数组
    CommonTools.getRandomArr = function (length) {
        if (length === void 0) { length = 0; }
        var arr = [];
        for (var i = 0; i < length; i++) {
            arr.push(i + 1);
        }
        return arr.sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
    };
    return CommonTools;
}());
//# sourceMappingURL=CommonTools.js.map