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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var BalloonUI = /** @class */ (function (_super) {
        __extends(BalloonUI, _super);
        function BalloonUI() {
            return _super.call(this) || this;
        }
        BalloonUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.BalloonUI.uiView);
        };
        BalloonUI.uiView = { "type": "View", "props": { "width": 128, "height": 250 }, "child": [{ "type": "Image", "props": { "y": 2, "x": 10, "var": "picture", "skin": "HitBalloon/balloon-1.png" }, "compId": 2 }, { "type": "Image", "props": { "y": -5, "x": -37, "width": 190, "var": "blastImg", "skin": "HitBalloon/blast.png", "height": 150 } }, { "type": "Text", "props": { "y": 49, "x": 0, "width": 128, "var": "word", "valign": "middle", "text": "computer", "strokeColor": "#ffffff", "stroke": 2, "height": 30, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 1 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 2 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 3 }, { "value": -2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 4 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 5 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 6 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 7 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 8 }, { "value": -7, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 9 }, { "value": -8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }, { "value": -7, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 11 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 12 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 13 }, { "value": -4, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 14 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 15 }, { "value": -2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 16 }, { "value": -1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 17 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 18 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 19 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 20 }] } }], "name": "shake", "id": 1, "frameRate": 10, "action": 0 }, { "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 1 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 2 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 3 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 4 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 5 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 6 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 7 }, { "value": -3, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 8 }, { "value": -5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 9 }, { "value": -6, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }, { "value": -8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 11 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 12 }], "x": [{ "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 1 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 2 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 3 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 4 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 5 }, { "value": 10, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 6 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 7 }, { "value": 8, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 8 }, { "value": 5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 9 }, { "value": 4, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 10 }, { "value": 2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 11 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 12 }], "scaleY": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 0 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 1 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 2 }, { "value": 1.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 3 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 4 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 6 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 7 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 8 }, { "value": 1.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 9 }, { "value": 1.13, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 10 }, { "value": 1.16, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 11 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleY", "index": 12 }], "scaleX": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 0 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 1 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 2 }, { "value": 1.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 3 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 4 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 5 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 6 }, { "value": 1.03, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 7 }, { "value": 1.06, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 8 }, { "value": 1.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 9 }, { "value": 1.13, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 10 }, { "value": 1.16, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 11 }, { "value": 1.2, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "scaleX", "index": 12 }] } }], "name": "blast", "id": 2, "frameRate": 16, "action": 0 }] };
        return BalloonUI;
    }(View));
    ui.BalloonUI = BalloonUI;
})(ui || (ui = {}));
(function (ui) {
    var FishUI = /** @class */ (function (_super) {
        __extends(FishUI, _super);
        function FishUI() {
            return _super.call(this) || this;
        }
        FishUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.FishUI.uiView);
        };
        FishUI.uiView = { "type": "View", "props": { "width": 220, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 56, "x": 3, "width": 214, "var": "wordBg", "skin": "HitFish/wordbg.png", "height": 88 } }, { "type": "Image", "props": { "y": 12, "x": 3, "var": "fishImg", "skin": "HitFish/fish-5.png" } }, { "type": "Text", "props": { "y": 67, "x": 10, "width": 200, "var": "fishWord", "valign": "top", "text": "computer", "height": 65, "fontSize": 40, "font": "FF", "color": "#fff", "align": "center" } }] };
        return FishUI;
    }(View));
    ui.FishUI = FishUI;
})(ui || (ui = {}));
(function (ui) {
    var HammerUI = /** @class */ (function (_super) {
        __extends(HammerUI, _super);
        function HammerUI() {
            return _super.call(this) || this;
        }
        HammerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HammerUI.uiView);
        };
        HammerUI.uiView = { "type": "View", "props": { "width": 141, "height": 174 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "HitMole/hammer.png", "rotation": 0 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 133, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 124, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 1 }, { "value": 56, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 5 }], "x": [{ "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 95, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 1 }, { "value": 67, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 5 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -30, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 1 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 5 }], "pivotY": [{ "value": 133, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotY", "index": 0 }, { "value": 124, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotY", "index": 1 }, { "value": 56, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotY", "index": 5 }], "pivotX": [{ "value": 98, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotX", "index": 0 }, { "value": 95, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotX", "index": 1 }, { "value": 67, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotX", "index": 5 }] } }], "name": "hit", "id": 1, "frameRate": 24, "action": 0 }] };
        return HammerUI;
    }(View));
    ui.HammerUI = HammerUI;
})(ui || (ui = {}));
(function (ui) {
    var HitBalloonUI = /** @class */ (function (_super) {
        __extends(HitBalloonUI, _super);
        function HitBalloonUI() {
            return _super.call(this) || this;
        }
        HitBalloonUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.HitBalloonUI.uiView);
        };
        HitBalloonUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "HitBalloon/mainBG.png" } }, { "type": "Text", "props": { "y": 38, "x": 300, "valign": "top", "text": "Listen and match.", "fontSize": 55, "font": "FF", "color": "#e3e345", "bold": true } }, { "type": "Image", "props": { "y": 681, "x": 832, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Box", "props": { "y": 124, "x": 581, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 249 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 505, "width": 480, "skin": "common/configBG.png", "sizeGrid": "15,5,25,5", "height": 359, "alpha": 1 } }, { "type": "Label", "props": { "y": 204, "x": 558, "text": "单词：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 192, "x": 626, "width": 315, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 195, "x": 641, "width": 286, "name": "textInput", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Button", "props": { "y": 277, "x": 645, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 3, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 239, "x": 634, "text": "示例：car:car1.png,car2.png;ball:ball.png", "fontSize": 17, "font": "FF", "color": "#666666" } }, { "type": "Label", "props": { "y": 84, "x": 539, "width": 98, "text": "背景图：", "height": 20, "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 73, "x": 625, "width": 315, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 76, "x": 640, "width": 286, "name": "backgroundImg", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Label", "props": { "y": 142, "x": 558, "text": "布局：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 142, "x": 672, "text": "三行", "name": "threeLineRadio", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 142, "x": 776, "text": "两行", "name": "twoLineRadio", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 139, "x": 648, "width": 20, "skin": "common/img_radio_checked.png", "name": "threeLineRadioImg", "height": 20 } }, { "type": "Image", "props": { "y": 139, "x": 751, "width": 20, "skin": "common/img_radio_notCheck.png", "name": "twoLineRadioImg", "height": 20 } }] }, { "type": "Text", "props": { "y": 135, "x": 141, "width": 300, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 33, "fontSize": 30, "font": "FF", "color": "#17a817", "align": "center" } }, { "type": "Image", "props": { "y": 24, "x": 27, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Text", "props": { "y": 698, "x": 835, "width": 168, "var": "replayText", "valign": "top", "text": "Replay", "strokeColor": "#000000", "stroke": 5, "height": 39, "fontSize": 27, "font": "FF", "color": "#ffffff", "align": "center" } }] };
        return HitBalloonUI;
    }(View));
    ui.HitBalloonUI = HitBalloonUI;
})(ui || (ui = {}));
(function (ui) {
    var HitFishUI = /** @class */ (function (_super) {
        __extends(HitFishUI, _super);
        function HitFishUI() {
            return _super.call(this) || this;
        }
        HitFishUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.HitFishUI.uiView);
        };
        HitFishUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "top": 0, "skin": "HitFish/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Animation", "props": { "y": 100, "x": 420, "var": "theCounter", "source": "Counter.ani", "name": "theCounter" } }, { "type": "Box", "props": { "y": 120, "x": 576, "width": 985, "var": "fishConfig", "pivotY": 100, "pivotX": 554, "height": 242 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 332, "width": 653, "skin": "common/configBG.png", "sizeGrid": "5,15,5,15", "height": 233, "alpha": 1 } }, { "type": "Label", "props": { "y": 117, "x": 370, "text": "右边单词：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 52, "x": 370, "text": "左边单词：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 110, "x": 470, "width": 470, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 113, "x": 490, "width": 430, "var": "rightInput", "text": "app,adfs,orange", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Button", "props": { "y": 166, "x": 490, "width": 86, "var": "fishSubmitBtn", "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 3, "x": 947, "width": 40, "var": "closeBtn", "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Image", "props": { "y": 46, "x": 470, "width": 470, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 51, "x": 490, "width": 430, "var": "leftInput", "text": "app,adfs", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Text", "props": { "y": 74, "x": 61, "wordWrap": true, "width": 265, "var": "fishTip", "text": "左右两边单词个数分别在1-6之间", "pivotY": 2, "pivotX": 8, "height": 88, "fontSize": 30, "font": "FF", "color": "#ffffff", "align": "center" } }] }, { "type": "Image", "props": { "y": 24, "x": 27, "width": 30, "var": "fishConfigBtn", "skin": "common/setting.png", "height": 30 } }, { "type": "Image", "props": { "y": 287, "x": 273, "var": "wellDone", "skin": "common/well-done.png" } }, { "type": "Image", "props": { "y": 681, "x": 832, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Text", "props": { "y": 698, "x": 833, "width": 168, "var": "replayText", "valign": "top", "text": "Replay", "strokeColor": "#000000", "stroke": 5, "height": 39, "fontSize": 27, "font": "FF", "color": "#ffffff", "align": "center" } }] };
        return HitFishUI;
    }(View));
    ui.HitFishUI = HitFishUI;
})(ui || (ui = {}));
(function (ui) {
    var HitMoleUI = /** @class */ (function (_super) {
        __extends(HitMoleUI, _super);
        function HitMoleUI() {
            return _super.call(this) || this;
        }
        HitMoleUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.HitMoleUI.uiView);
        };
        HitMoleUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "HitMole/mainBG.jpg" } }, { "type": "Box", "props": { "y": 66, "x": 90, "width": 161, "name": "item0", "height": 180 }, "child": [{ "type": "Image", "props": { "y": -10, "x": 5, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -13, "x": 5, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask1.png" } }] }, { "type": "Box", "props": { "y": 61, "x": 513, "width": 161, "name": "item1", "height": 180 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask2.png" } }] }, { "type": "Box", "props": { "y": 160, "x": 315, "width": 161, "name": "item2", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask3.png" } }] }, { "type": "Box", "props": { "y": 139, "x": 767, "width": 161, "name": "item3", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask4.png" } }] }, { "type": "Box", "props": { "y": 216, "x": 43, "width": 161, "name": "item4", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask5.png" } }] }, { "type": "Box", "props": { "y": 262, "x": 538, "width": 161, "name": "item5", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask6.png" } }] }, { "type": "Box", "props": { "y": 340, "x": 228, "width": 161, "name": "item6", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask7.png" } }] }, { "type": "Box", "props": { "y": 345, "x": 828, "width": 161, "name": "item7", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask8.png" } }] }, { "type": "Box", "props": { "y": 440, "x": 449, "width": 161, "name": "item8", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask9.png" } }] }, { "type": "Box", "props": { "y": 494, "x": 60, "width": 161, "name": "item9", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask10.png" } }] }, { "type": "Box", "props": { "y": 518, "x": 729, "width": 161, "name": "item10", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 118, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 126, "x": -31, "skin": "HitMole/mask11.png" } }] }, { "type": "Box", "props": { "y": 589, "x": 377, "width": 161, "name": "item11", "height": 180 }, "child": [{ "type": "Image", "props": { "x": 1, "width": 150, "skin": "HitMole/word_bg.png", "name": "wordBg", "height": 50 } }, { "type": "Text", "props": { "y": -3, "x": 0, "width": 150, "name": "word", "height": 40, "fontSize": 30, "font": "FF", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 120, "x": 23, "skin": "HitMole/mouse.png", "name": "mouseImg" } }, { "type": "Image", "props": { "y": 128, "x": -31, "skin": "HitMole/mask12.png" } }] }, { "type": "Image", "props": { "y": 14, "x": 17, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Box", "props": { "y": 114, "x": 571, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 242 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 514, "width": 471, "skin": "common/configBG.png", "height": 233, "alpha": 1 } }, { "type": "Label", "props": { "y": 121, "x": 566, "text": "单词：", "name": "wordLabel", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 121, "x": 566, "text": "图片：", "name": "picLabel", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 58, "x": 566, "text": "游戏：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 58, "x": 680, "text": "单词", "name": "wordRadio", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Label", "props": { "y": 57, "x": 784, "text": "图片", "name": "picRadio", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 54, "x": 656, "width": 20, "skin": "common/img_radio_checked.png", "name": "wordRadioImg", "height": 20 } }, { "type": "Image", "props": { "y": 54, "x": 759, "width": 20, "skin": "common/img_radio_notCheck.png", "name": "picRadioImg", "height": 20 } }, { "type": "Image", "props": { "y": 110, "x": 634, "width": 323, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 113, "x": 649, "width": 292, "name": "textInput", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Button", "props": { "y": 171, "x": 645, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 3, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }] }, { "type": "Text", "props": { "y": 74, "x": 212, "width": 300, "var": "tip", "text": "操作不正确！", "pivotY": 2, "pivotX": 8, "height": 30, "fontSize": 30, "font": "FF", "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 681, "x": 832, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Text", "props": { "y": 698, "x": 835, "width": 168, "valign": "top", "text": "Replay", "strokeColor": "#000000", "stroke": 5, "height": 39, "fontSize": 27, "font": "FF", "color": "#ffffff", "align": "center" } }, { "type": "Image", "props": { "y": 246, "x": 467, "var": "startOverBg", "skin": "HitMole/star-over-bg.png" } }, { "type": "Text", "props": { "y": 259, "x": 467, "width": 176, "var": "startOverText", "valign": "top", "text": "Start", "height": 50, "fontSize": 30, "font": "FF", "color": "#000000", "bold": true, "align": "center" } }] };
        return HitMoleUI;
    }(View));
    ui.HitMoleUI = HitMoleUI;
})(ui || (ui = {}));
(function (ui) {
    var PictureUI = /** @class */ (function (_super) {
        __extends(PictureUI, _super);
        function PictureUI() {
            return _super.call(this) || this;
        }
        PictureUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PictureUI.uiView);
        };
        PictureUI.uiView = { "type": "View", "props": { "width": 165, "height": 165 }, "child": [{ "type": "Image", "props": { "y": 101, "x": 0, "skin": "HitBalloon/pic_bg.png" } }, { "type": "Image", "props": { "y": 50, "x": 36, "var": "picture", "skin": "HitBalloon/ball.png" } }] };
        return PictureUI;
    }(View));
    ui.PictureUI = PictureUI;
})(ui || (ui = {}));
(function (ui) {
    var SpiderAndWordUI = /** @class */ (function (_super) {
        __extends(SpiderAndWordUI, _super);
        function SpiderAndWordUI() {
            return _super.call(this) || this;
        }
        SpiderAndWordUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.SpiderAndWordUI.uiView);
        };
        SpiderAndWordUI.uiView = { "type": "View", "props": { "width": 1024, "height": 768 }, "child": [{ "type": "Image", "props": { "width": 1024, "skin": "SpiderAndWord/bg.png", "height": 768 } }, { "type": "Image", "props": { "y": 21, "x": 22, "width": 30, "var": "setting", "skin": "common/setting.png", "height": 30 } }, { "type": "Text", "props": { "y": 35, "x": 78, "wordWrap": true, "width": 291, "var": "tip", "text": "正确单词只能是ugly，beautiful，happy，sad，old，young中的一个", "pivotY": 2, "pivotX": 8, "height": 144, "fontSize": 30, "font": "FF", "color": "#ffffff", "align": "center" } }, { "type": "Box", "props": { "y": 121, "x": 576, "width": 985, "var": "configBox", "pivotY": 100, "pivotX": 554, "height": 242 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 340, "width": 645, "skin": "common/configBG.png", "sizeGrid": "15,15,15,15", "height": 283, "alpha": 1 } }, { "type": "Label", "props": { "y": 64, "x": 379, "text": "单词个数：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 60, "x": 479, "width": 470, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 63, "x": 499, "width": 430, "text": "8", "name": "wordNum", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Button", "props": { "y": 204, "x": 497, "width": 86, "skin": "template/ButtonTab/btn_LargeTabButton_Middle.png", "name": "submitBtn", "labelSize": 20, "labelColors": "#007AFF,#007AFF,#FFFFFF", "label": "提交", "height": 32 } }, { "type": "Text", "props": { "y": 3, "x": 947, "width": 40, "text": "+", "rotation": 45, "pivotY": -1, "pivotX": -10, "name": "closeBtn", "height": 40, "fontSize": 40, "color": "#5d5454", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 126, "x": 379, "text": "正确单词：", "fontSize": 20, "font": "FF", "color": "#2a2121" } }, { "type": "Image", "props": { "y": 121, "x": 479, "width": 470, "skin": "template/Text/TextBox.png", "height": 39 } }, { "type": "TextInput", "props": { "y": 125, "x": 499, "width": 430, "text": "ugly", "name": "textInput", "height": 31, "fontSize": 16, "font": "FF", "color": "#3b3232" } }, { "type": "Text", "props": { "y": 168, "x": 494, "text": "示例：ugly, beautiful, happy, sad, old, young", "fontSize": 17, "font": "FF", "color": "#666666" } }] }, { "type": "Image", "props": { "y": 681, "x": 822, "var": "replayBtn", "skin": "common/replay-disabled.png" } }, { "type": "Text", "props": { "y": 698, "x": 823, "width": 168, "var": "replayText", "valign": "top", "text": "Replay", "strokeColor": "#000000", "stroke": 5, "height": 39, "fontSize": 27, "font": "FF", "color": "#ffffff", "align": "center" } }] };
        return SpiderAndWordUI;
    }(View));
    ui.SpiderAndWordUI = SpiderAndWordUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map