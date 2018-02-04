// 老鼠类
var Mole = /** @class */ (function () {
    function Mole(normalState, hitState) {
        this.downY = 21;
        this.normalState = normalState;
        this.hitState = hitState;
        this.upY = this.normalState.y;
        this.reset();
    }
    Mole.prototype.reset = function () {
        this.normalState.visible = false;
        this.hitState.visible = false;
        if (this.text) {
            this.text.visible = false;
        }
    };
    // 设置显示的单词
    Mole.prototype.setText = function (text) {
        this.text = text;
        this.text.visible = false;
    };
    Mole.prototype.setAudio = function (audio) {
        this.audio = audio;
    };
    // 显示老鼠
    Mole.prototype.show = function () {
        this.hitState.visible = false;
        this.text.visible = true;
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