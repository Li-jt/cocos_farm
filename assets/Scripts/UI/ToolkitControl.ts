import ComponentBase from "../Message/ComponentBase";
import Message, { MessageType } from "../Message/Message";
import UIManager from "./UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ToolkitControl extends ComponentBase {

    isOpen: boolean = false;

    start() {
        //注册为ui的消息接收者
        UIManager.Instance.RegisterReceive(this);
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            this.CloseToolkit();
        })
    }

    //接收消息
    ReceiveMessage(message: Message): void {
        if (message.Command == MessageType.UI_Toolkit) {
            if (message.Content == ToolkitType.Type_open) {
                this.OpenToolkit();
            }
        }
    }

    OpenToolkit() {
        if (this.isOpen) return;
        this.isOpen = true;
        var action = cc.moveTo(0.5, cc.v2(this.node.x, this.node.y + this.node.height));
        this.node.runAction(action);
    }

    CloseToolkit() {
        this.isOpen = false;
        var action = cc.moveTo(0.5, cc.v2(this.node.x, this.node.y - this.node.height));
        this.node.runAction(action);
    }
}

export class ToolkitType {
    static Type_open = 1;
}
