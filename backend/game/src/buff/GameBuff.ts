import { BuildingCard } from "../card/BuildingCard";
import { BuffData } from "./BuffData";

export abstract class GameBuff {
    public abstract buffId: number;
    /**给卡牌添加buff */
    public abstract addBuff(card: BuildingCard, ...param: any[]): void;
    /**移除卡牌上的指定buff */
    public abstract deleteBuff(card: BuildingCard, buff: BuffData): void;
}