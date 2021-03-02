export default class Attribute {
    cureEffect: number;
    curedEffect: number;
    lifeBasic: number;
    lifeStatic: number;
    lifePercentage: number;
    attackBasic: number;
    attackStatic: number;
    attackPercentage: number;
    defendBasic: number;
    defendStatic: number;
    defendPercentage: number;
    critical: number;
    bCritical: number;
    eCritical: number;
    qCritical: number;
    airCritical: number;
    criticalDamage: number;
    thunderRes: number;
    fireRes: number;
    waterRes: number;
    iceRes: number;
    windRes: number;
    rockRes: number;
    elementalMastery: number;
    recharge: number;
    thunderBonus: number;
    fireBonus: number;
    waterBonus: number;
    iceBonus: number;
    windBonus: number;
    rockBonus: number;
    physicalBonus: number;
    elementalBonus: number;
    aBonus: number;
    bBonus: number;
    eBonus: number;
    qBonus: number;
    airBonus: number;
    bonus: number;
    thunderTime: number;
    fireTime: number;
    waterTime: number;
    iceTime: number;
    windTime: number;
    rockTime: number;
    shield: number;
    attack(): number;
    life(): number;
    defend(): number;
    crit(value: number): void;
}
