// 游戏主界面
class SpiderAndWordMain extends ui.SpiderAndWordUI {
    // private wellDoneY: number; // well done效果Y坐标
    // private wellDoneX: number; // well done效果X坐标
    private configView: HSConfigView; // 配置页

    constructor() {
        super(); 
        // this.wellDone.visible = false;
        // this.wellDoneY = this.wellDone.y;
        // this.wellDoneX = this.wellDone.x;
        this.configView = new HSConfigView(this.configBox);
        this.tip.visible = false;
        this.setting.on(Laya.Event.CLICK, this, this.showConfigView)
        if(SpiderAndWord.gameConfig.gameModel) {
            this.setting.visible = false;    
        }
    }

     // 显示提示
    public showTip(text: string) {
        this.tip.text = text;
        this.tip.visible = true;
        Laya.timer.once(3000, this, this.hideTip);
    }

    private hideTip() {
        this.tip.visible = false;
    }

    // 显示游戏配置页面 
    private showConfigView() {
        //this.setting.visible = false;
        if(SpiderAndWord.started){
            SpiderAndWord.currentSpider.visible = false;
            for(let picture of SpiderAndWord.currentPics) {
                picture.removeSelf();
                picture.destroy();
            }
            SpiderAndWord.spiderAndWordMain.replayBtn.skin = "common/replay-abled.png";
        }

        this.configView.show();
    }

    // 设置设置按钮是否显示
    public showSetting(state: boolean) {
        if(!SpiderAndWord.gameConfig.gameModel) {
            this.setting.visible = state;
        }
    }

    // // 游戏结束
    // public gameOver() {
    //     // 显示well done文字效果
    //     this.wellDone.y = this.wellDoneY;
    //     console.log("2222");
    //     this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
    //     this.wellDone.scale(0, 0);
    //     this.wellDone.visible = true;
    //     Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 100}, 1500, Laya.Ease.backOut, Laya.Handler.create(this, this.reset));
   
    // }
    
    // // 显示well done文字效果
    // public showWellDone(that, callBack: Function) {
    //     this.wellDone.y = this.wellDoneY + this.wellDone.height;
    //     this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
    //     this.wellDone.scale(0, 0);
    //     this.wellDone.visible = true;
    //     Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    // }

    // // 重置游戏为初始状态
    // private reset() {
    //     this.wellDone.visible = false;
    //     this.showSetting(true);
    // }

}