// 老鼠类
class Mole {
    private normalState: Laya.Image; // 老鼠普通状态图片
    private hitState: Laya.Image; // 老鼠受击图片
    private upY: number;
    private downY: number = 27;
    private wordBg: Laya.Image; // 显示单词
    private word: Laya.Text; // 显示单词
    private audio: string; // 出现时的音效
    public x: number;
    public y: number;

    constructor(normalState: Laya.Image, hitState: Laya.Image, wordBg: Laya.Image, word: Laya.Text) {
        this.normalState = normalState;
        this.hitState = hitState;
        this.wordBg = wordBg;
        this.word = word;
        this.upY = this.normalState.y;
        this.reset();
    }

    // 重置老鼠状态
    public reset() {
        this.normalState.visible = false;
        this.hitState.visible = false;
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
        this.hitState.visible = false;
        this.wordBg.visible = true;
        this.word.visible = true;
        this.normalState.y = this.downY;
        this.normalState.visible = true;
        if(this.audio) {
            Laya.SoundManager.playSound(this.audio, 1);
        } 
        Laya.Tween.to(this.normalState,{y:this.upY},500,Laya.Ease.backOut);
    }

    // 老鼠受击
    public hit() {
        this.normalState.visible = false;
        this.hitState.visible = true;
    }
}