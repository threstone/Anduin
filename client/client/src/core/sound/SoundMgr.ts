class SoundMgr extends BaseClass {

    public winSound: Sound;
    public lostSound: Sound;
    public clickSound: Sound;

    constructor() {
        super();

        this.winSound = new Sound("./resource/sound/battle_win.mp3");
        this.lostSound = new Sound("./resource/sound/battle_lose.mp3");
        this.clickSound = new Sound("./resource/sound/click.mp3");
    }
}