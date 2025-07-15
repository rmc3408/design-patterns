interface IWeapon {
  attack(): void
}

class Sword implements IWeapon {
  attack(): void {
    console.log('Swinging a sword!')
  }
}

class Axe implements IWeapon {
  attack(): void {
    console.log('Chopping with an axe!')
  }
}

class Bow implements IWeapon {
  attack(): void {
    console.log('Shooting an arrow!')
  }
}

class Fist implements IWeapon {
  attack(): void {
    console.log('Fist fighting')
  }
}

class Character {
  protected weapon: IWeapon = new Fist()

  constructor() {}

  setWeapon(weapon: IWeapon): void {
    this.weapon = weapon
  }

  fight(): void {
    this.weapon.attack()
  }
}

class Knight extends Character {
  constructor() {
    super()
    this.weapon = new Sword() // Default weapon
  }
}

class Archer extends Character {
  constructor() {
    super()
    this.weapon = new Bow() // Default weapon
  }
}

const c1 = new Character()
c1.fight()
c1.setWeapon(new Bow())
c1.fight()

const k1 = new Knight()
k1.fight()
