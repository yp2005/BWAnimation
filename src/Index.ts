// 程序入口，本工程仅用于切换各个动画进行测试

// 游戏名称，修改这个变量值来切换不同游戏，mole：打地鼠，fish：拍鱼，balloon：拍气球，spider：蜘蛛和单词
let gameName = "spider"; 

if(gameName == "mole") {
    //打地鼠游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        game: "word", // word 地鼠单词，picture 图片
        words: ["red", "pink", "orange", "green", "black", "white"],
        pictures: ["picture1.png", "picture1.png", "picture1.png"],
    };
    new HitMole(config);
}
else if(gameName == "fish") {
    // 拍鱼游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        leftWords: ["red", "pink", "orange", "green"],
        rightWords: ["pink", "orange", "green", "black", "white"],
    };
    new HitFish(config);
}
else if(gameName == "balloon") {
    // 拍气球游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        backgroundImg: "mainBG.png", // 游戏背景图
        layout: 3, // 布局 2、3
        words: [
            // {word: "car", pictures: ["car.png"]},
            // {word: "train", pictures: ["train.png"]},
            {word: "doll", pictures: ["doll.png"]},
            {word: "computer", pictures: ["computer.png"]},
            {word: "bike", pictures: ["bike.png"]},
            {word: "ball", pictures: ["ball.png"]}
        ]
    };
    // let config: any = {
    //     gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
    //     words: [
    //         {word: "car", pictures: ["car.png"]},
    //         {word: "ball", pictures: ["ball.png"]}
    //     ]
    // };
    new HitBalloon(config);
}
else if(gameName == "spider") {
    // 蜘蛛游戏
    let config: any = {
        gameModel: false, // 是否游戏模式，游戏模式不显示配置按钮
        word: "happy",
        wordNum: 3
    };
    new SpiderAndWord(config);
}