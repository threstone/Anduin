class MiniCard {
    private static bgColorArr = [0xFFFFFF, 0x00FFFF, 0xFF00FF, 0xFF6600];

    static getMiniCard(cardInfo: CardInterface, count: number) {
        const miniCard = BaseUI.UIMiniCard.createInstance();
        RES.getResByUrl(`./resource/card/${cardInfo.cardId}.jpg`, (data: egret.Texture) => {
            if (!data) {
                return
            }
            miniCard.miniImg.img.texture = data;
        });
        miniCard.cardName.text = cardInfo.cardName;
        miniCard.feeText.text = `${cardInfo.fee}费`;
        miniCard.countText.text = `X${count}`;
        miniCard.bg.color = MiniCard.bgColorArr[cardInfo.quality];
        return miniCard;
    }
}