const SoundEffectRoot = './resource/sound/'
class SoundMgr extends BaseClass {

    public winSound: Sound;
    public lostSound: Sound;
    public clickSound: Sound;

    constructor() {
        super();

        this.winSound = new Sound(`${SoundEffectRoot}battle_win.mp3`);
        this.lostSound = new Sound(`${SoundEffectRoot}battle_lose.mp3`);
        this.clickSound = new Sound(`${SoundEffectRoot}click.mp3`);
    }


    public playSoundEffect(soundName: string, startTime?: number, loops?: number) {
        const sound = new egret.Sound();
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, () => {
            sound.play(startTime, loops);
        }, this);
        sound.load(`${SoundEffectRoot}${soundName}.mp3`);
    }
}