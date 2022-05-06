import ComponentBase from "../../Message/ComponentBase";
import { MessageType } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { BackpackType } from "../BackpackControl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeedControl extends ComponentBase {

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            MessageCenter.SendCustomMessage(MessageType.Type_UI, MessageType.UI_Backpack, BackpackType.Type_open);
        })
    }
}
