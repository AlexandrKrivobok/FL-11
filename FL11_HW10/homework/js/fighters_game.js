const fighterBrutus = new Fighter({name: 'Brutus', damage: 21, hp: 100, agility: 43});
const fighterShemira = new Fighter({name: 'Shemira', damage: 24, hp: 100, agility: 31});
const magic100 = 100;

function Fighter(setUp) {
  setUp.wins = 0;
  setUp.loses = 0;

  this.getName = () => setUp.name;
  this.getDamage = () => setUp.damage;
  this.getHealth = () => setUp.hp;
  this.getAgility = () => setUp.agility;
  this.dealDamage = (amountOfHP) => {
    if (setUp.hp - amountOfHP > 0) {
      setUp.hp -= amountOfHP
    } else {
      setUp.hp = 0;
    }
  };
  this.heal = (amountOfHP) => {
    if (setUp.hp + amountOfHP > magic100) {
      setUp.hp = magic100
    } else {
      setUp.hp += magic100;
    }
  };
  this.attack = (defender) => {
    if (Math.random() < Math.round((1 - defender.getAgility() / magic100) * magic100) / magic100) {
      defender.dealDamage(setUp.damage);
      console.log(`${setUp.name} make ${setUp.damage} damage to ${defender.getName()}`);
    } else {
      console.log(`${setUp.name} attack missed`);
    }
  }
  this.logCombatHistory = () => `Name: ${setUp.name}, Wins: ${setUp.wins}, Loses: ${setUp.loses}`;
  this.addWin = () => setUp.wins++;
  this.addLoss = () => setUp.loses++;
}

function battle(Fighter1, Fighter2){
  if(Fighter1.getHealth() !== 0 && Fighter2.getHealth() !== 0) {
    while (Fighter1.getHealth() !== 0 && Fighter2.getHealth() !== 0) {
      Fighter1.attack(Fighter2);
      if(Fighter2.getHealth() > 0) {
        Fighter2.attack(Fighter1);
      }
    }

    if (Fighter1.getHealth() === 0) {
      Fighter2.addWin();
      Fighter1.addLoss();
    } else {
      Fighter1.addWin();
      Fighter2.addLoss();
    }
  } else {
    if(Fighter1.getHealth() === 0) {
      console.log(`${Fighter1.getName()} is already dead, heal him and go FIGHT!`);
    } else {
      console.log(`${Fighter2.getName()} is already dead, heal him and go FIGHT!`);
    }
  }
}

battle(fighterBrutus, fighterShemira);
console.log(fighterBrutus.getHealth());
console.log(fighterShemira.getHealth());
console.log(fighterBrutus.logCombatHistory());
console.log(fighterShemira.logCombatHistory());
battle(fighterBrutus, fighterShemira);
fighterBrutus.heal(magic100);
fighterShemira.heal(magic100);
battle(fighterBrutus, fighterShemira);
