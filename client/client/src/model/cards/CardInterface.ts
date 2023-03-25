interface CardInterface {
    cardId: number;
    cardName: string;
    powerId: number;
    cardType: CardsPto.CardType;
    type2: number;
    detailType: CardsPto.AtkType | CardsPto.EventType | CardsPto.BuilingType;
    attack: number;
    health: number;
    fee: number;
    quality: CardsPto.QualityType;
    desc: string;
    buffs: number[];
    count: number;
    isDerivation: number;
    useCondition: number[];
    effectId: number;
    soundId: number;
}