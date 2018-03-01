
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BalloonUI extends View {
		public shake:Laya.FrameAnimation;
		public blast:Laya.FrameAnimation;
		public picture:Laya.Image;
		public blastImg:Laya.Image;
		public word:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":128,"height":250},"child":[{"type":"Image","props":{"y":2,"x":10,"var":"picture","skin":"HitBalloon/balloon-1.png"},"compId":2},{"type":"Image","props":{"y":-5,"x":-37,"width":190,"var":"blastImg","skin":"HitBalloon/blast.png","height":150}},{"type":"Text","props":{"y":64,"x":0,"width":128,"var":"word","text":"doll","strokeColor":"#ffffff","stroke":2,"fontSize":25,"font":"Arial","color":"#000000","align":"center"}}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":19},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":20}]}}],"name":"shake","id":1,"frameRate":10,"action":0},{"nodes":[{"target":2,"keyframes":{"y":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":2},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":3},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":7},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":9},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":11},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":13},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":14},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":15},{"value":-6,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":16},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":17},{"value":-9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":18}],"x":[{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":7},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":8},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":9},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":11},{"value":10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":12},{"value":9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":13},{"value":8,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":14},{"value":5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":15},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":16},{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":17},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":18}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":18}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":1},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":2},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":6},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":8},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":9},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":12},{"value":1.03,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":13},{"value":1.06,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":14},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1.13,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":16},{"value":1.16,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":17},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":18}]}}],"name":"blast","id":2,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BalloonUI.uiView);

        }

    }
}

module ui {
    export class FishUI extends View {
		public wordBg:Laya.Image;
		public fishImg:Laya.Image;
		public fishWord:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":250,"height":200},"child":[{"type":"Image","props":{"y":56,"x":11,"var":"wordBg","skin":"HitFish/wordbg.png"}},{"type":"Image","props":{"y":12,"x":3,"var":"fishImg","skin":"HitFish/fish-5.png"}},{"type":"Text","props":{"y":59,"x":25,"width":200,"var":"fishWord","valign":"middle","text":"computer","height":65,"fontSize":40,"font":"Helvetica","color":"#fff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.FishUI.uiView);

        }

    }
}

module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":141,"height":174},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitMole/hammer.png","rotation":0},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":133,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":124,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1},{"value":56,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":98,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":95,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1},{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-30,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}],"pivotY":[{"value":133,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":0},{"value":124,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":1},{"value":56,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":5}],"pivotX":[{"value":98,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":0},{"value":95,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":1},{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}

module ui {
    export class HitBalloonUI extends View {
		public startBtn:Laya.Button;
		public replayBtn:Laya.Image;
		public wellDone:laya.display.Text;
		public configBox:Laya.Box;
		public tip:laya.display.Text;
		public setting:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitBalloon/mainBG.png"}},{"type":"Text","props":{"y":28,"x":276,"text":"Listen and repeat.","fontSize":55,"color":"#e3e345","bold":true}},{"type":"Button","props":{"y":346,"x":423,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Image","props":{"y":348,"x":426,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Text","props":{"y":420,"x":362,"width":300,"var":"wellDone","text":"well done!","height":60,"fontSize":50,"font":"Microsoft YaHei","color":"#17a817","bold":true,"align":"center"}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":249},"child":[{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","height":235,"alpha":1}},{"type":"Label","props":{"y":75,"x":558,"text":"单词：","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":66,"x":626,"width":315,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":69,"x":641,"width":286,"name":"textInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":151,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Text","props":{"y":112,"x":634,"text":"示例：car:car1.png,car2.png;ball:ball.png","fontSize":17,"color":"#666666"}}]},{"type":"Text","props":{"y":135,"x":141,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"color":"#17a817","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"setting","skin":"common/setting.png","height":30}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitBalloonUI.uiView);

        }

    }
}

module ui {
    export class HitFishUI extends View {
		public theCounter:Laya.Animation;
		public fishConfig:Laya.Box;
		public rightInput:Laya.TextInput;
		public fishSubmitBtn:Laya.Button;
		public closeBtn:laya.display.Text;
		public leftInput:Laya.TextInput;
		public fishTip:laya.display.Text;
		public fishConfigBtn:Laya.Image;
		public startBtn:Laya.Button;
		public replayBtn:Laya.Image;
		public wellDone:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"top":0,"skin":"HitFish/bg.png","right":0,"left":0,"bottom":0}},{"type":"Animation","props":{"y":100,"x":420,"var":"theCounter","source":"Counter.ani","name":"theCounter"}},{"type":"Box","props":{"y":124,"x":581,"width":985,"var":"fishConfig","pivotY":100,"pivotX":554,"height":242},"child":[{"type":"Image","props":{"y":9,"x":332,"width":653,"skin":"common/configBG.png","height":233,"alpha":1}},{"type":"Label","props":{"y":119,"x":370,"text":"右边单词：","fontSize":20,"color":"#2a2121"}},{"type":"Label","props":{"y":54,"x":370,"text":"左边单词：","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":110,"x":470,"width":470,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":113,"x":490,"width":430,"var":"rightInput","text":"app,adfs,orange","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":166,"x":490,"width":86,"var":"fishSubmitBtn","skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"var":"closeBtn","text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}},{"type":"Image","props":{"y":46,"x":470,"width":470,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":51,"x":490,"width":430,"var":"leftInput","text":"app,adfs","height":31,"fontSize":16,"color":"#3b3232"}}]},{"type":"Text","props":{"y":94,"x":83,"wordWrap":true,"width":265,"var":"fishTip","text":"左右两边单词个数分别在1-6之间","pivotY":2,"pivotX":8,"height":88,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":24,"x":27,"width":30,"var":"fishConfigBtn","skin":"common/setting.png","height":30}},{"type":"Button","props":{"y":356,"x":433,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Image","props":{"y":358,"x":436,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Text","props":{"y":430,"x":372,"width":300,"var":"wellDone","text":"well done!","height":60,"fontSize":50,"font":"Microsoft YaHei","color":"#b8e017","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitFishUI.uiView);

        }

    }
}

module ui {
    export class HitMoleUI extends View {
		public startBtn:Laya.Button;
		public wellDone:laya.display.Text;
		public replayBtn:Laya.Image;
		public setting:Laya.Image;
		public configBox:Laya.Box;
		public tip:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"HitMole/mainBG.jpg"}},{"type":"Box","props":{"y":66,"x":90,"width":161,"name":"item0","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask1.png"}}]},{"type":"Box","props":{"y":61,"x":513,"width":161,"name":"item1","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask2.png"}}]},{"type":"Box","props":{"y":160,"x":315,"width":161,"name":"item2","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask3.png"}}]},{"type":"Box","props":{"y":139,"x":767,"width":161,"name":"item3","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask4.png"}}]},{"type":"Box","props":{"y":216,"x":43,"width":161,"name":"item4","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask5.png"}}]},{"type":"Box","props":{"y":262,"x":538,"width":161,"name":"item5","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask6.png"}}]},{"type":"Box","props":{"y":340,"x":228,"width":161,"name":"item6","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask7.png"}}]},{"type":"Box","props":{"y":345,"x":828,"width":161,"name":"item7","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask8.png"}}]},{"type":"Box","props":{"y":440,"x":449,"width":161,"name":"item8","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask9.png"}}]},{"type":"Box","props":{"y":494,"x":60,"width":161,"name":"item9","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask10.png"}}]},{"type":"Box","props":{"y":518,"x":729,"width":161,"name":"item10","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask11.png"}}]},{"type":"Box","props":{"y":589,"x":377,"width":161,"name":"item11","height":180},"child":[{"type":"Image","props":{"x":1,"width":150,"skin":"HitMole/word_bg.png","name":"wordBg","height":50}},{"type":"Text","props":{"y":3,"width":150,"name":"word","height":40,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":118,"x":23,"skin":"HitMole/mouse.png","name":"mouseImg"}},{"type":"Image","props":{"y":126,"x":-31,"skin":"HitMole/mask12.png"}}]},{"type":"Button","props":{"y":346,"x":423,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Text","props":{"y":420,"x":362,"width":300,"var":"wellDone","text":"well done!","height":60,"fontSize":50,"font":"Microsoft YaHei","color":"#b8e017","bold":true,"align":"center"}},{"type":"Image","props":{"y":348,"x":426,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Image","props":{"y":14,"x":17,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Box","props":{"y":114,"x":571,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":242},"child":[{"type":"Image","props":{"y":9,"x":514,"width":471,"skin":"common/configBG.png","height":233,"alpha":1}},{"type":"Label","props":{"y":119,"x":566,"text":"单词：","name":"wordLabel","fontSize":20,"color":"#2a2121"}},{"type":"Label","props":{"y":119,"x":566,"text":"图片：","name":"picLabel","fontSize":20,"color":"#2a2121"}},{"type":"Label","props":{"y":54,"x":566,"text":"游戏：","fontSize":20,"color":"#2a2121"}},{"type":"Label","props":{"y":54,"x":680,"text":"单词","name":"wordRadio","fontSize":20,"color":"#2a2121"}},{"type":"Label","props":{"y":54,"x":784,"text":"图片","name":"picRadio","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":54,"x":656,"width":20,"skin":"common/img_radio_checked.png","name":"wordRadioImg","height":20}},{"type":"Image","props":{"y":54,"x":759,"width":20,"skin":"common/img_radio_notCheck.png","name":"picRadioImg","height":20}},{"type":"Image","props":{"y":110,"x":634,"width":323,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":113,"x":649,"width":292,"name":"textInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":171,"x":645,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}}]},{"type":"Text","props":{"y":74,"x":212,"width":300,"var":"tip","text":"操作不正确！","pivotY":2,"pivotX":8,"height":30,"fontSize":30,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitMoleUI.uiView);

        }

    }
}

module ui {
    export class HitSpiderUI extends View {
		public startBtn:Laya.Button;
		public replayBtn:Laya.Image;
		public wellDone:laya.display.Text;
		public setting:Laya.Image;
		public tip:laya.display.Text;
		public configBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1024,"height":768},"child":[{"type":"Image","props":{"width":1024,"skin":"HitSpider/bg.png","height":768}},{"type":"Button","props":{"y":366,"x":443,"var":"startBtn","stateNum":2,"skin":"common/btn_start.png"}},{"type":"Image","props":{"y":368,"x":446,"var":"replayBtn","skin":"common/replay.png"}},{"type":"Text","props":{"y":440,"x":382,"width":300,"var":"wellDone","text":"well done!","height":60,"fontSize":50,"font":"Microsoft YaHei","color":"#b8e017","bold":true,"align":"center"}},{"type":"Image","props":{"y":34,"x":37,"width":30,"var":"setting","skin":"common/setting.png","height":30}},{"type":"Text","props":{"y":48,"x":93,"wordWrap":true,"width":291,"var":"tip","text":"正确单词只能是ugly，beautiful，happy，sad，old，young中的一个","pivotY":2,"pivotX":8,"height":144,"fontSize":30,"color":"#ffffff","align":"center"}},{"type":"Box","props":{"y":134,"x":591,"width":985,"var":"configBox","pivotY":100,"pivotX":554,"height":242},"child":[{"type":"Image","props":{"y":9,"x":332,"width":653,"skin":"common/configBG.png","height":133,"alpha":1}},{"type":"Label","props":{"y":39,"x":370,"text":"正确单词：","fontSize":20,"color":"#2a2121"}},{"type":"Image","props":{"y":30,"x":470,"width":470,"skin":"template/Text/TextBox.png","height":39}},{"type":"TextInput","props":{"y":33,"x":490,"width":430,"text":"ugly","name":"textInput","height":31,"fontSize":16,"color":"#3b3232"}},{"type":"Button","props":{"y":86,"x":490,"width":86,"skin":"template/ButtonTab/btn_LargeTabButton_Middle.png","name":"submitBtn","labelSize":20,"labelColors":"#007AFF,#007AFF,#FFFFFF","label":"提交","height":32}},{"type":"Text","props":{"y":3,"x":947,"width":40,"text":"+","rotation":45,"pivotY":-1,"pivotX":-10,"name":"closeBtn","height":40,"fontSize":40,"color":"#5d5454","bold":false,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitSpiderUI.uiView);

        }

    }
}

module ui {
    export class PictureUI extends View {
		public picture:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":204,"height":204},"child":[{"type":"Image","props":{"y":113,"x":5,"skin":"HitBalloon/pic_bg.png"}},{"type":"Image","props":{"y":44,"x":43,"var":"picture","skin":"HitBalloon/ball.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PictureUI.uiView);

        }

    }
}
