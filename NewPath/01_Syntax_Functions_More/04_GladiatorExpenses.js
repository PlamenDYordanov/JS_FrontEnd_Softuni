function solve (lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let totalPriceHelmet = Math.floor(lostFight / 2) * helmetPrice; 
let totalPriceSword = Math.floor(lostFight / 3) * swordPrice; 
let totalPriceHShield = Math.floor(lostFight / 6) * shieldPrice; 
let totalPriceArmor = Math.floor(lostFight / 12) * armorPrice; 
let totalPrice = totalPriceHelmet + totalPriceSword + totalPriceHShield + totalPriceArmor;
console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);


}
solve(7,
    2,
    3,
    4,
    5
    );
solve(23,
    12.50,
    21.50,
    40,
    200
    );