
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class HammerUI extends View {
		public hit:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":-6,"x":29,"skin":"HitMole/hammer.png","rotation":20},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":76,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":66,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":5}],"x":[{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":73,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}],"pivotY":[{"value":61,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":0},{"value":56,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":5}],"pivotX":[{"value":77,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":0},{"value":67,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":5}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HammerUI.uiView);

        }

    }
}

module ui {
    export class HitMoleUI extends View {
		public replayBtn:Laya.Image;
		public startBtn:Laya.Button;
		public wellDone:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"HitMole/map_1.png"}},{"type":"Box","props":{"y":193,"x":157,"name":"item0"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":86,"skin":"HitMole/mask-01.png"}}]},{"type":"Box","props":{"y":191,"x":342,"name":"item1"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":1,"skin":"HitMole/mask-02.png"}}]},{"type":"Box","props":{"y":196,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":1,"skin":"HitMole/mask-03.png"}}]},{"type":"Box","props":{"y":283,"x":128,"name":"item3"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":0,"skin":"HitMole/mask-04.png"}}]},{"type":"Box","props":{"y":284,"x":344,"name":"item4"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":1,"skin":"HitMole/mask-05.png"}}]},{"type":"Box","props":{"y":281,"x":543,"name":"item5"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":86,"skin":"HitMole/mask-06.png"}}]},{"type":"Box","props":{"y":381,"x":120,"name":"item6"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":85,"x":1,"skin":"HitMole/mask-07.png"}}]},{"type":"Box","props":{"y":386,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":86,"skin":"HitMole/mask-08.png"}}]},{"type":"Box","props":{"y":387,"x":565,"name":"item8"},"child":[{"type":"Image","props":{"x":5,"skin":"HitMole/mouse_normal.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":6,"skin":"HitMole/mouse_hit.png","name":"hit"}},{"type":"Image","props":{"y":86,"skin":"HitMole/mask-09.png"}}]},{"type":"Image","props":{"y":264,"x":314,"var":"replayBtn","skin":"HitMole/replay.png"}},{"type":"Button","props":{"y":275,"x":311,"var":"startBtn","stateNum":2,"skin":"HitMole/btn_start.png"}},{"type":"Text","props":{"y":350,"x":277,"var":"wellDone","text":"well done!","fontSize":50,"font":"Arial","color":"#f12073","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.HitMoleUI.uiView);

        }

    }
}
