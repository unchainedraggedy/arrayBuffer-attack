export default class Character {
    constructor(baseAttack) {
      this._baseAttack = baseAttack;
      this._stoned = false;
      this._distance = 1;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = value;
    }
  
    get distance() {
      return this._distance;
    }
  
    set distance(value) {
      if (value < 1) {
        throw new Error('расстояние должно быть хотя бы единицей');
      }
      this._distance = value;
    }
  
    get attack() {
      let adjustedAttack = this._baseAttack * (1 - (this._distance - 1) * 0.1);
      if (this._stoned) {
        adjustedAttack -= Math.log2(this._distance) * 5;
      }
      return Math.max(adjustedAttack, 0);
    }
  
    set attack(value) {
      this._baseAttack = value;
    }
  }
  
  export class Magician extends Character {
    constructor(baseAttack) {
      super(baseAttack);
    }
  }
  
  export class Daemon extends Character {
    constructor(baseAttack) {
      super(baseAttack);
    }
  }
  

  