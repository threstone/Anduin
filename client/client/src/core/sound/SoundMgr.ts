class SoundMgr extends BaseClass {
    public hallBgm: Sound;
    public battleBgm: Sound;

    constructor() {
        console.log(123);
        super();
        this.hallBgm = new Sound("./resource/sound/bgm/bgm.mp3");
        this.battleBgm = new Sound("./resource/sound/bgm/battle_bgm.mp3");
    }
}