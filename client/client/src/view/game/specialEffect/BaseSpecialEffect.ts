abstract class BaseSpecialEffect {
    abstract handleEffect(specialEffectId: number, dataArray: number[]): Promise<void>;
}