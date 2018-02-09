// 老鼠类
var Mole = /** @class */ (function () {
    function Mole(ani, wordBg, word) {
        this.ani = ani;
        this.wordBg = wordBg;
        this.word = word;
        this.reset();
    }
    // 重置老鼠状态
    Mole.prototype.reset = function () {
        this.ani.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
    };
    // 设置显示的单词
    Mole.prototype.setText = function (text) {
        this.word.text = text;
    };
    // 设置声效文件
    Mole.prototype.setAudio = function (audio) {
        this.audio = audio;
    };
    // 显示老鼠
    Mole.prototype.show = function () {
        this.ani.visible = true;
        this.wordBg.visible = true;
        this.word.visible = true;
        if (this.audio) {
            Laya.SoundManager.playSound(this.audio, 1);
        }
        this.ani.play(0, false, "ani1");
    };
    // 老鼠受击
    Mole.prototype.hit = function () {
        this.ani.play(0, false, "ani2");
    };
    return Mole;
}());
//# sourceMappingURL=Mole.js.map