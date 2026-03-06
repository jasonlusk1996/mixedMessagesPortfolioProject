//this is the start of the code for the mixed messages project
//user runs program
//store array of class, weapon, and item
const loadout = {classes: ['Warrior', 'Mage', 'Rogue','Archer','Monk'], weapons: ['Sword', 'Staff', 'Dagger','Bow','Staff'], items: ['Health Potion', 'Mana Potion', 'Stamina Potion','Poison Potion','Agility Potion']};
//iterate through each array and randomly select one element from each
function selectLoadout(loadout) {
    const selectedClass = loadout.classes[Math.floor(Math.random() * loadout.classes.length)];
    const selectedWeapon = loadout.weapons[Math.floor(Math.random() * loadout.weapons.length)];
    const selectedItem = loadout.items[Math.floor(Math.random() * loadout.items.length)];
    //combine the three elements into a single string and display it to the user
    console.log(`You are a ${selectedClass}, equipped with a ${selectedWeapon}. You have a ${selectedItem} in your inventory.`);
}
