// 老鼠类
class Mole {
    // private normalState: Laya.Image; // 老鼠普通状态图片
    // private hitState: Laya.Image; // 老鼠受击图片
    // private upY: number;
    // private downY: number = 27;
    private ani: Laya.Animation; // 老鼠出洞动画
    private wordBg: Laya.Image; // 显示单词
    private word: Laya.Text; // 显示单词
    private audio: string; // 出现时的音效
    public x: number;
    public y: number;

    constructor(ani: Laya.Animation, wordBg: Laya.Image, word: Laya.Text) {
        this.ani = ani;
        this.wordBg = wordBg;
        this.word = word;
        this.reset();
    }

    // 重置老鼠状态
    public reset() {
        this.ani.visible = false;
        this.wordBg.visible = false;
        this.word.visible = false;
    }

    // 设置声效文件
    public setText(text: string) {
        this.word.text = text;
    }

    // 设置声效文件
    public setAudio(audio: string) {
        this.audio = audio;
    }

    // 显示老鼠
    public show() {
        this.ani.visible = true;
        this.wordBg.visible = true;
        this.word.visible = true;
        if(this.audio) {
            Laya.SoundManager.playSound(this.audio, 1);
        } 
        this.ani.play(0, false, "ani1");
    }

    // 老鼠受击
    public hit() {
        this.ani.play(0, false, "ani2");
    }
}