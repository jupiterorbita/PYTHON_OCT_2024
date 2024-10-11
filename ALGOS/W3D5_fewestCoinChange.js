/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
  quarter: 25c
  dime: 10c
  nickel: 5c
  penny: 1c
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 51;
const expected2 = { quarter: 2, penny: 1 };

const cents2a = 56;
const expected2a = { quarter: 2, nickel: 1, penny: 1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:


// create the function and decide what params it needs and what it will return






// --------------------------------

function fewsestCoinChange(amount) {
    const coins = {
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };
    let result = {

    };
    if (amount >= coins.quarter) {
        result.quarter = Math.floor(amount / coins.quarter);
        //amount %= coins.quarter;
        amount = amount - (result.quarter * 25)
    }
    if (amount >= coins.dime) {
        result.dime = Math.floor(amount / coins.dime);
        amount %= coins.dime;
    }

    if (amount >= coins.nickel) {
        result.nickel = Math.floor(amount / coins.nickel);
        amount %= coins.nickel;
    }

    if (amount >= coins.penny) {
        result.penny = Math.floor(amount / coins.penny);
    }
    return result;
}


function fewestCoinChange(cents) {
    obj = {}
    penny = 0
    nickel = 0
    dime = 0
    quarter = 0
    while (cents > 0) {
        // check to see if we can fit a quarter
        if (cents >= 25) {
            quarter++
            cents -= 25
            obj["quarter"] = quarter
        }
        // check to see if we can fit a dime
        else if (cents >= 10) {
            dime++
            cents -= 10
            obj["dime"] = dime
        }
        // check to see if we can fit a nickel
        else if (cents >= 5) {
            nickel++
            cents -= 5
            obj["nickel"] = nickel
        }
        // check to see if we can fit a penny
        else if (cents >= 1) {
            penny++
            cents -= 1
            obj["penny"] = penny
        }
    }
    return obj
}

function fewestCoin(num) {
    var newCoins = {}
    var quarter = 25
    var dime = 10
    var nickel = 5
    var penny = 1
    if (num >= quarter) {
        total = (num / quarter)
        newCoins['quarter'] = Math.floor(total)
        num = num - (Math.floor(total) * quarter)
    }
    if (num >= dime) {
        total = (num / dime)
        newCoins['dime'] = Math.floor(total)
        num = num - (Math.floor(total) * dime)
    }
    if (num >= nickel) {
        total = (num / nickel)
        newCoins['nickel'] = Math.floor(total)
        num = num - (Math.floor(total) * nickel)
    }
    if (num >= penny) {
        total = (num / penny)
        newCoins['penny'] = Math.floor(total)
        num = num - (Math.floor(total) * penny)
    }
    return newCoins
}


function fewestCoinChange(cents) {
    if (cents < 0) {
        return ("Sorry, you now owe ME!")
    }
    var walletHash = {};
    var fullValue = Math.floor(cents / 25);
    if (fullValue != 0) {
        walletHash["Quarter"] = fullValue;
        cents = cents % 25;
    }
    fullValue = Math.floor(cents / 10);
    if (fullValue != 0) {
        walletHash["Dime"] = fullValue;
        cents = cents % 10;
    }
    fullValue = Math.floor(cents / 5);
    if (fullValue != 0) {
        walletHash["Nickel"] = fullValue;
        cents = cents % 5;
    }
    fullValue = Math.floor(cents / 1);
    if (fullValue != 0) {
        walletHash["Penny"] = fullValue;
        cents = cents % 1;
    }
    return walletHash;
}


function fewestCoinChange(balance) {
    var myCoins = {};
    // use ifs to check how many coins are needed, starting with 
    if (balance >= 25) {
        // grabbing all the quarters now to not need a loop
        var quartersNeeded = Math.floor(balance / 25); //round down for whole numbers
        myCoins['quarter'] = quartersNeeded; //add the key
        balance -= (25 * quartersNeeded); //subtract the amoung of coins * their value from balance
        console.log("Added " + quartersNeeded + " quarter(s)"); //logging for visibility
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 10) {
        var dimesNeeded = Math.floor(balance / 10)
        myCoins['dime'] = dimesNeeded;
        balance -= (10 * dimesNeeded);
        console.log("Added " + dimesNeeded + " dime(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 5) {
        nickelsNeeded = Math.floor(balance / 5);
        myCoins['nickel'] = nickelsNeeded;
        balance -= (5 * nickelsNeeded);
        console.log("Added " + nickelsNeeded + " nickel(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    if (balance >= 1) {
        //everything left is pennies | balance has to be <= 4 at this point
        myCoins['penny'] = balance;
        balance -= myCoins['penny']; //subtracting penny value just to make sure it makes balance 0
        console.log("Added " + myCoins.penny + " pennie(s)");
        console.log("Remaining balance: " + balance + "c");
    }
    return myCoins;
}




function calculateFewestCoins(change) {
    const denominations = [25, 10, 5, 1]; // standard US coin denominations
    const coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        while (change >= denomination) {
            switch (denomination) {
                case 25:
                    coins.quarters++;
                    break;
                case 10:
                    coins.dimes++;
                    break;
                case 5:
                    coins.nickels++;
                    break;
                case 1:
                    coins.pennies++;
                    break;
                default:
                    break;
            }
            change -= denomination;
        }
    }

    return coins;
}
/*
The function now creates an object called coins that has properties for each coin denomination (quarters, dimes, nickels, and pennies), each initialized to 0.
Inside the loop that calculates the fewest number of coins needed, the function now uses a switch statement to increment the appropriate coin property in the coins object instead of incrementing a coins variable.
After the loops are finished, the function returns the coins object.
*/
const change1 = 67; // represents 67 cents
const fewestCoins1 = calculateFewestCoins(change1);
console.log(fewestCoins1); // should output { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }






function calculateFewestCoins(change) {
    const denominations = [25, 10, 5, 1]; // standard US coin denominations
    const coinNames = ['quarters', 'dimes', 'nickels', 'pennies'];
    const coins = {};

    for (let i = 0; i < denominations.length; i++) {
        console.log("change: ", change)
        const denomination = denominations[i];
        const coinName = coinNames[i];
        coins[coinName] = Math.floor(change / denomination);
        change %= denomination;
    }
    return coins;
}
/*
The function creates an array called coinNames that contains the names of the coin denominations in the same order as the denominations array.
The function creates an empty object called coins that will be used to store the number of coins needed for each denomination.
The function loops through each denomination in the denominations array.
For each denomination, it calculates the number of coins needed by dividing the amount of change by the denomination and using the Math.floor() method to round down to the nearest integer.
It stores the number of coins needed in the coins object using the corresponding coin name from the coinNames array.
It updates the change variable to the remainder after dividing by the denomination, using the modulus operator %.
After the loops are finished, the function returns the coins object.
*/
const change = 67; // represents 67 cents
const fewestCoins = calculateFewestCoins(change);
console.log(fewestCoins); // should output { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }




function calculateFewestCoins(change) {
    // console.log("change: ", change)
    const quarters = Math.floor(change / 25);
    change %= 25;
    // console.log("change: ", change)
    const dimes = Math.floor(change / 10);
    change %= 10;
    // console.log("change: ", change)
    const nickels = Math.floor(change / 5);
    change %= 5;
    // console.log("change: ", change)
    const pennies = change;

    return { quarters, dimes, nickels, pennies };
}
/*
The function calculates the number of quarters needed by dividing the amount of change by 25 and using the Math.floor() method to round down to the nearest integer.
It updates the change variable to the remainder after dividing by 25, using the modulus operator %.
The function calculates the number of dimes needed by dividing the updated value of change by 10 and using Math.floor() to round down.
It updates the change variable to the remainder after dividing by 10.
The function calculates the number of nickels needed by dividing the updated value of change by 5 and using Math.floor() to round down.
It updates the change variable to the remainder after dividing by 5.
The function sets the number of pennies needed to the updated value of change.
After all calculations are done, the function returns an object with properties for each coin denomination and their corresponding counts.
*/
const change3 = 67; // represents 67 cents
const fewestCoins3 = calculateFewestCoins(change3);
console.log(fewestCoins3); // should output { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }



function calculateFewestCoins(change) {
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    while (change >= 25) {
        change -= 25;
        quarters++;
    }

    while (change >= 10) {
        change -= 10;
        dimes++;
    }

    while (change >= 5) {
        change -= 5;
        nickels++;
    }

    while (change >= 1) {
        change -= 1;
        pennies++;
    }

    return { quarters, dimes, nickels, pennies };
}
/*
The function initializes four variables (quarters, dimes, nickels, and pennies) to zero.
The function uses a while loop to calculate the number of quarters needed. The loop continues as long as the value of change is greater than or equal to 25. In each iteration of the loop, the function subtracts 25 from the value of change and increments the quarters variable by 1.
The function uses another while loop to calculate the number of dimes needed. The loop continues as long as the value of change is greater than or equal to 10. In each iteration of the loop, the function subtracts 10 from the value of change and increments the dimes variable by 1.
The function uses a third while loop to calculate the number of nickels needed. The loop continues as long as the value of change is greater than or equal to 5. In each iteration of the loop, the function subtracts 5 from the value of change and increments the nickels variable by 1.
The function uses a final while loop to calculate the number of pennies needed. The loop continues as long as the value of change is greater than or equal to 1. In each iteration of the loop, the function subtracts 1 from the value of change and increments the pennies variable by 1.
After all calculations are done, the function returns an object with properties for each coin denomination and their corresponding counts.
*/
const change5 = 67; // represents 67 cents
const fewestCoins5 = calculateFewestCoins(change5);
console.log(fewestCoins5); // should output { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }


// ---------------------------
function fewestCoinChange(cents) {
    var coin = { 'quarter': 25, 'dime': 10, 'nickel': 5, 'penny': 1 };
    var change = {}
    for (var key in coin) {
        if (cents >= coin[key]) {
            div = Math.floor(cents / coin[key])
            cents = cents % coin[key];
            change[key] = div;
        }
    }
    return change;
}
function fewestCoinChange(cents) {
    let changeTotal = { quarter: 0, dime: 0, nickel: 0, penny: 0 };
    var remainder = cents;
    console.log(changeTotal);
    while (remainder >= 1) {
        if (remainder >= 25) {
            changeTotal.quarter += 1;
            remainder -= 25;
            console.log(changeTotal);
        }
        else if (remainder >= 10) {
            changeTotal.dime += 1;
            remainder -= 10;
            console.log(changeTotal);
        }
        else if (remainder >= 5) {
            changeTotal.nickel += 1;
            remainder -= 5;
            console.log(changeTotal);
        }
        else {
            changeTotal.penny += 1;
            remainder -= 1;
            console.log(changeTotal);
        }
    }
    return changeTotal;
}

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) { }

/*****************************************************************************/

/**
 * - Time: O(1) constant, no matter how large cents get, it's still 4 conditions.
 * - Space: O(1) constant, denominationTable has the same 4 keys (denominations)
 *    no matter how large cents gets.
 */
function fewestCoinChange(cents) {
    const denominationTable = {};

    if (cents >= 25) {
        const quartersCount = Math.floor(cents / 25);
        cents -= quartersCount * 25;
        denominationTable.quarter = quartersCount;
    }

    if (cents >= 10) {
        const dimesCount = Math.floor(cents / 10);
        cents -= dimesCount * 10;
        denominationTable.dime = dimesCount;
    }

    if (cents >= 5) {
        const nickelsCount = Math.floor(cents / 5);
        cents -= nickelsCount * 5;
        denominationTable.nickel = nickelsCount;
    }

    if (cents > 0) {
        denominationTable.penny = cents;
    }

    return denominationTable;
}

/**
 * - Time: O(1) constant, the loop always loops over the 4 denominations
 *    regardless of how large cents is.
 * - Space: O(1) constant.
 */
function fewestCoinChange2(cents) {
    const denominationsDescending = [
        { name: "quarter", amnt: 25 },
        { name: "dime", amnt: 10 },
        { name: "nickel", amnt: 5 },
        { name: "penny", amnt: 1 },
    ];

    const changeMap = {};

    for (const denomination of denominationsDescending) {
        if (cents >= denomination.amnt) {
            const count = Math.floor(cents / denomination.amnt);
            cents -= count * denomination.amnt;
            changeMap[denomination.name] = count;
        }
    }
    return changeMap;
}