// 锤子类
class Hammer extends ui.HammerUI {
    
    // 播放捶打动画
    public play(x: number, y: number) {
        this.pos(x, y);
        this.hit.play(0, false);
    }
}