// 老鼠类
var Mole = /** @class */ (function () {
    function Mole(normalState, hitState, wordBg, word) {
        this.downY = 27;
        this.normalState = normalState;
        this.hitState = hitState;
        this.wordBg = wordBg;
        this.word = word;
        this.upY = this.normalState.y;
        this.reset();
    }
    // 重置老鼠状态
    Mole.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
    };
    // 设置声效文件
    Mole.prototype.setText = function (text) {
        this.word.text = text;
    };
    // 设置声效文件
    Mole.prototype.setAudio = function (audio) {
        this.audio = audio;
    };
    // 显示老鼠
    Mole.prototype.show = function () {
        this.hitState.visible = false;
        this.wordBg.visible = true;
        this.word.visible = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        if (this.audio) {
            Laya.SoundManager.playSound(this.audio, 1);
        }
        Laya.Tween.to(this.normalState, { y: this.upY }, 500, Laya.Ease.backOut);
    };
    // 老鼠受击
    Mole.prototype.hit = function () {
        this.normalState.visible = false;
        this.hitState.visible = true;
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map