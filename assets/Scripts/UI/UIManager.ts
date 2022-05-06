import ManagerBase from "../Message/ManagerBase";
import { MessageType } from "../Message/Message";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {
    static Instance: UIManager

    onLoad() {
        super.onLoad();
        UIManager.Instance = this;
    }

    //接收消息类型
    SetMessageType(): number {
        return MessageType.Type_UI;
    }

}
