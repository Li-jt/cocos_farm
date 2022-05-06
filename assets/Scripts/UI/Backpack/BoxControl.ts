import ComponentBase from "../../Message/ComponentBase";
import { MessageType } from "../../Message/Message";
import MessageCenter from "../../Message/MessageCenter";
import { SeedType } from "../../Seed";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BoxControl extends ComponentBase {

    goods: any = SeedType.Seed_carrot;
    num: number = 1;

    SetBox(goods: any, num: number) {
        this.goods = goods;
        this.num = num;
    }

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            MessageCenter.SendCustomMessage(MessageType.Type_UI, MessageType.UI_Land, this.goods);
        })
    }
}
