// 打地鼠配置
const HitMoleConfig:any = {
    moleNumber: 9, // 老鼠个数 -- 暂未实现老鼠个数可配置
    // 3、生成位置随机或手动设置；
    // 单词出现位置：default 按配置words中的配置出现在相应位置，random 随机位置
    position: "random", 
    // 4、地鼠图可随意更换；
    // 地图文件名称
    map: "",
    // 1、内容后台配置，可更换单词；
    // 2、生成个数可配置；
    words: [
        {
            text: "red",
            audio: "res/audio/arrow.wav", // 音效文件 5.不同位置地鼠出现时的音频可以替换，不添加音频则无音效。
            position: 7 // 单词出现位置
        },
        {
            text: "black",
            audio: "res/audio/arrow.wav",
            position: 2
        },
        {
            text: "white",
            audio: "res/audio/arrow.wav",
            position: 5
        },
        {
            text: "pink",
            audio: "res/audio/arrow.wav",
            position: 3
        },
        {
            text: "orange",
            audio: "res/audio/arrow.wav",
            position: 4
        },
        {
            text: "green",
            audio: "res/audio/arrow.wav",
            position: 8
        },
    ]
}

