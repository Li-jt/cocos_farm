import ComponentBase from "../Message/ComponentBase";
import Message, { MessageType } from "../Message/Message";
import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BackpackControl extends ComponentBase {

    isOpen: boolean = false;

    start() {
        //注册为ui的消息接收者
        UIManager.Instance.RegisterReceive(this);
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            this.CloseBackpackt();
        })
    }

    //接收消息
    ReceiveMessage(message: Message): void {
        super.ReceiveMessage(message);
        //打开背包
        if (message.Command == MessageType.UI_Backpack) {
            if (message.Content == BackpackType.Type_open) {
                this.OpenBackpack();
            }
        }
    }

    OpenBackpack() {
        if (this.isOpen) return;
        this.isOpen = true;
        var action = cc.moveTo(0.5, cc.v2(this.node.x, this.node.y + this.node.height));
        this.node.runAction(action);
    }

    CloseBackpackt() {
        this.isOpen = false;
        var action = cc.moveTo(0.5, cc.v2(this.node.x, this.node.y - this.node.height));
        this.node.runAction(action);
    }
    // update (dt) {}
}

export class BackpackType {
    //打开背包
    static Type_open = 1;
}
