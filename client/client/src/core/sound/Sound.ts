class Sound {
    private _sound: egret.Sound;
    private _soundChannel: egret.SoundChannel;
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }

    /*
     * @param startTime 应开始播放的初始位置（以秒为单位），默认值是 0
     * @param loops 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
     */
    public play(startTime?: number, loops?: number) {
        if (!this._sound) {
            this._sound = new egret.Sound();
            //添加加载完成侦听
            this._sound.addEventListener(egret.Event.COMPLETE, () => {
                this._soundChannel = this._sound.play(startTime, loops);
            }, this);
            this._sound.load(this._url);
            return;
        }

        this._soundChannel = this._sound.play(startTime, loops);
    }

    public stop() {
        if (this._soundChannel) {
            this._soundChannel.stop();
        }
    }
}