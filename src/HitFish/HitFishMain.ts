
// 游戏主界面
class HitFishMain extends ui.HitFishUI {
    private wellDoneY: number; // well done效果Y坐标
    private wellDoneX: number; // well done效果X坐标
    
    constructor() {
        super();
        this.initConfig();
        this.wellDone.visible = false;
        this.wellDoneY = this.wellDone.y;
        this.wellDoneX = this.wellDone.x;
    }

    // 初始化配置
    public initConfig() {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = !HitFish.gameConfig.gameModel;
        this.fishConfigBtn.on(Laya.Event.CLICK,this,this.showConfig);
        this.fishSubmitBtn.on(Laya.Event.CLICK,this,this.submitConfig);
        this.closeBtn.on(Laya.Event.CLICK,this,this.hideConfig);

        let leftTxt = "",rightTxt = "";
        if(HitFish.gameConfig.leftWords){
            leftTxt = HitFish.gameConfig.leftWords.join(",");
        }
        if(HitFish.gameConfig.rightWords){
            rightTxt = HitFish.gameConfig.rightWords.join(",");
        }
        this.leftInput.text = leftTxt;
        this.rightInput.text = rightTxt;
    }

    // 提交配置
    private submitConfig() {
        let lefts = this.leftInput.text.split(",");
        let rights = this.rightInput.text.split(",");

        if(lefts.length < 1 || lefts.length > 6 || rights.length < 1 || rights.length > 6) {
            this.showTip("左右两边单词个数分别在1-6之间");
            return;
        }

        let pngArr = ["doll.png","cost.png","dot.png","flop.png","hop.png","lost.png","lot.png"
        ,"mop.png","odd.png","pod.png","pop.png","top.png","pod.png","pod.png"];
        
        let wrongWords = [];
        for(let i = 0; i< lefts.length;i++){
            let word = lefts[i];
            if(word.indexOf('.png')!==-1){
                if(pngArr.indexOf(word) === -1) {
                    wrongWords.push(word);
                }
            }
        }
        for(let i = 0; i< rights.length;i++){
            let word = rights[i];
            if(word.indexOf('.png')!==-1){
                if(pngArr.indexOf(word) === -1) {
                    wrongWords.push(word);
                }
            }
        }
        if(wrongWords.length>0){
            this.showTip("不存在单词 "+wrongWords.join(","));
            return;
        }

        HitFish.gameConfig.leftWords = lefts;
        HitFish.gameConfig.rightWords = rights;

        this.showTip("提交成功！");
        this.hideConfig();

        for(let i = 0;i<HitFish.gameFish.length;i++){
            HitFish.gameFish[i].removeSelf();
        }
        HitFish.gameFish = [];
        HitFish.gameStart();
    }

    // 开始倒数
    public startCount(){
        this.theCounter.visible = true;
        this.theCounter.play();
        Laya.SoundManager.stopAllSound();
        Laya.SoundManager.playSound("res/audio/fish_count.mp3",1);
    }

    // 停止倒数
    public stopCount(){
        this.theCounter.stop();
        this.theCounter.visible =  false;
        Laya.SoundManager.stopAllSound();
    }

    // 显示提示
    public showTip(text: string) {
        this.fishTip.text = text;
        this.fishTip.visible = true;
        Laya.timer.once(1500, this, this.hideTip);
    }

    // 隐藏提示
    private hideTip() {
        this.fishTip.visible = false;
    }

    // 显示游戏配置页面 
    public showConfig() {
        this.fishConfig.visible = true;
        this.fishConfigBtn.visible = false;
        this.fishConfig.removeSelf()
        this.addChild(this.fishConfig);
    }

    // 隐藏游戏配置页面 
    public hideConfig() {
        this.fishConfig.visible = false;
        this.fishTip.visible = false;
        this.fishConfigBtn.visible = true;
    }

    // 显示游戏配置页按钮
    public showSetting(state:boolean) {
        if(!HitFish.gameConfig.gameModel) {
            this.fishConfigBtn.visible = state;    
        }
    }

    // 显示well done文字效果
    public showWellDone(that, callBack: Function) {
        this.wellDone.y = this.wellDoneY + this.wellDone.height;
        this.wellDone.x = this.wellDoneX + this.wellDone.width / 2;
        this.wellDone.scale(0, 0);
        this.wellDone.visible = true;
        Laya.Tween.to(this.wellDone, {scaleX: 1, scaleY: 1, x: this.wellDoneX, y: this.wellDoneY - 30}, 1500, Laya.Ease.backOut, Laya.Handler.create(that, callBack));
    }
}