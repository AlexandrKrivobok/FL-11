function Hamburger(type, calories, secretIngredient) {
    this.type = type;
    
    let caloriesCount = calories;
    let cheeseAdded = false;
    let tomatoCounter = 0;
    let secretIngredientAdded = false;
    let bitesCounter = 0;

    this.getCalories = () => caloriesCount;

    this.setCalories = (val) => caloriesCount = val;

    this.addCheese = () => {
        if(cheeseAdded) {
            console.log("Sorry, you can add cheese only once");
        } else {
            caloriesCount += 120;
            cheeseAdded = true;
        }
    }

    this.addTomato = () => {
        if(tomatoCounter < 2) {
            caloriesCount += 20;
            tomatoCounter += 1;
        } else {
            console.log("Sorry, you can add tomato only twice");
        }
    }

    this.addSecretIngredient = () => {
        if(!secretIngredientAdded) {
            if(!tomatoCounter && !cheeseAdded) {
                secretIngredientAdded = true;
                caloriesCount += 100;
            } else {
                console.log("Sorry, you can add secret ingredient only before other ingredients");
            }
        } else {
            console.log("Sorry, you can add secret ingredient only once");
        }
    }

    if(secretIngredient) {
        this.addSecretIngredient();
    }

    this.bite = () => {
        this.addSecretIngredient = () => console.log("Sorry, you cannot add secret ingredient");
        this.addTomato = () => console.log("Sorry, you cannot add tomato");
        this.addCheese = () => console.log("Sorry, you cannot add cheese");
        bitesCounter++;
    }

    this.info = () => {
        let secret = '';
        let cheese = '';
        let tomato = '';

        if(secretIngredientAdded) {
            secret = 'with secret ingredient, ';
        }

        if(cheeseAdded) {
            cheese = 'with cheese, ';
        }

        switch(tomatoCounter) {
            case 1 :
                tomato = 'with 1 tomato, ';
            break;

            case 2 :
                tomato = 'with 2 tomato, ';
            break;

            default:
            break;
        }
        console.log(`${type} hamburger: ${secret}${cheese}${tomato}is bit ${bitesCounter} time(s). Total calories ${caloriesCount}`);
    }
}

// const myHamburger = new Hamburger('classic',600, true);

// console.log(myHamburger.getCalories());
// myHamburger.addSecretIngredient();
// myHamburger.addTomato();
// myHamburger.addTomato();
// myHamburger.addTomato();
// myHamburger.addCheese();
// myHamburger.addCheese();
// myHamburger.addCheese();
// myHamburger.addSecretIngredient();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.bite();
// myHamburger.info();