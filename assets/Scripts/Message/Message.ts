const { ccclass, property } = cc._decorator;

export default class Message {
    //类型
    Type: number;
    //命令
    Command: number;
    //参数
    Content: any;

    //构造方法
    constructor(type: number, command: number, content: any) {
        this.Type = type;
        this.Command = command;
        this.Content = content;
    }
}

export class MessageType {
    static Type_UI = 1;
    static Type_NPC = 2;

    //背包
    static UI_Backpack = 101;
    //工具
    static UI_Toolkit = 102;
    //地块
    static UI_Land = 103;

    static NPC_1 = 201;

    static Emeny_1 = 301;
}
