interface CardInterface {
    cardId: number;
    cardName: string;
    powerId: number;
    cardType: CardsPto.CardType;
    type2: number;
    attack: number;
    atkType: CardsPto.AtkType;
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