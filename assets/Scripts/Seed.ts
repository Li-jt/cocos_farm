const { ccclass, property } = cc._decorator;

export default class Seed {
    //种子类
    //种子id
    id: number;
    //种子名称
    name: string;
    //种子生长周期
    img: string[];
    //种子生长周期时间(秒)
    time: number;

    constructor(id: number, name: string, img: string[], time: number) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.time = time;
    }
}

export class SeedType {
    static Seed_carrot = new Seed(0, '胡萝卜', ['worldImage_699', 'worldImage_89', 'worldImage2_89', 'worldImage3_89'], 60);
}
