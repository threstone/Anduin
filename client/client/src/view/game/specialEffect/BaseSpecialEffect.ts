interface SpecialEffectImpl {
    handleEffect(specialEffectId: number, dataArray: number[]): Promise<void>;
}