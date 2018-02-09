// 老鼠类
var Mole = /** @class */ (function () {
    function Mole(mouseImg, wordBg, word) {
        //this.box = box;
        this.mouseImg = mouseImg;
        this.wordBg = wordBg;
        this.word = word;
        this.reset();
    }
    // // 显示老鼠页面容器
    // showBox() {
    //     this.box.visible = true;
    // }
    // // 隐藏老鼠页面容器
    // hidBox() {
    //     this.box.visible = false;
    // }
    // 重置老鼠状态
    Mole.prototype.reset = function () {
        this.mouseImg.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
        //this.box.visible = false;
    };
    // 设置显示的单词
    Mole.prototype.setText = function (text) {
        this.word.text = text;
    };
    // 设置图片
    Mole.prototype.setPic = function (pic) {
        this.mouseImg.skin = pic;
    };
    // 显示老鼠
    Mole.prototype.showMouse = function (audio) {
        this.mouseImg.visible = true;
        this.wordBg.visible = true;
        this.word.visible = true;
        if (audio) {
            Laya.SoundManager.playSound(audio, 1);
        }
        this.mouseImg.y = 118;
        Laya.Tween.to(this.mouseImg, { y: 52 }, 500, Laya.Ease.backOut);
    };
    // 显示图片
    Mole.prototype.showPic = function (audio) {
        this.mouseImg.visible = true;
        if (audio) {
            Laya.SoundManager.playSound(audio, 1);
        }
        this.mouseImg.y = 118;
        Laya.Tween.to(this.mouseImg, { y: 40 }, 500, Laya.Ease.backOut);
    };
    // 老鼠受击
    Mole.prototype.hit = function (game) {
        if (game == "word") {
            this.mouseImg.y = 52;
            Laya.Tween.to(this.mouseImg, { y: 118 }, 500, Laya.Ease.backOut);
        }
        else if (game = "picture") {
            this.mouseImg.y = 40;
            Laya.Tween.to(this.mouseImg, { y: 135 }, 500, Laya.Ease.backIn, Laya.Handler.create(this, this.hidePic));
        }
    };
    // 隐藏图片
    Mole.prototype.hidePic = function () {
        this.mouseImg.visible = false;
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map