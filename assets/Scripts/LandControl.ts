import ComponentBase from "./Message/ComponentBase";
import Message, { MessageType } from "./Message/Message";
import MessageCenter from "./Message/MessageCenter";
import Seed from "./Seed";
import { ToolkitType } from "./UI/ToolkitControl";
import UIManager from "./UI/UIManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LandControl extends ComponentBase {

    index: number = 0;
    seed: Seed;

    start() {
        // this.seed = new Seed(0, '胡萝卜', ['worldImage_699', 'worldImage_89', 'worldImage2_89', 'worldImage3_89'], 60);
        //注册为ui的消息接收者
        UIManager.Instance.RegisterReceive(this);
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            MessageCenter.SendCustomMessage(MessageType.Type_UI, MessageType.UI_Toolkit, ToolkitType.Type_open);
        });
    }

    ReceiveMessage(message: Message): void {
        if (message.Command == MessageType.UI_Land) {
            // this.seed = message.Content;
            this.setSeed(message.Content);
        }
    }



    setSeed(seed: Seed) {
        this.seed = seed;
        this.grow();
        this.index += 1;
        this.schedule(() => {
            if (this.index > this.seed.img.length) this.index = 0;
            this.grow();
            this.index += 1;
        }, this.seed.time / this.seed.img.length - 1)
    }

    grow() {
        if (this.index >= this.seed.img.length) return;
        cc.resources.load(this.seed.img[this.index], cc.SpriteFrame, (err, res: cc.SpriteFrame) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res;
        })
    }
}
