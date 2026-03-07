//store object with class, weapon, and item
const loadout = {classes: ['Warrior', 'Mage', 'Rogue','Archer','Monk'], weapons: ['Sword', 'Staff', 'Dagger','Bow','Staff'], items: ['Health Potion', 'Mana Potion', 'Stamina Potion','Poison Potion','Agility Potion']};

//randomly select one class, one weapon, and one item from the loadout object
function selectLoadout(loadout) {
    const selectedClass = loadout.classes[Math.floor(Math.random() * loadout.classes.length)];
    const selectedWeapon = loadout.weapons[Math.floor(Math.random() * loadout.weapons.length)];
    const selectedItem = loadout.items[Math.floor(Math.random() * loadout.items.length)];
    //combine the three elements into a single string and display it to the user
    const message = `You are a ${selectedClass} equipped with a ${selectedWeapon}. You have a ${selectedItem} in your inventory.`;
    console.log(message);
}

//ask user what they want to do (view classes, view weapons, view items, add class, add weapon, add item, or select loadout)
//if user selects view classes, display classes
//if user selects view weapons, display weapons
//if user selects view items, display items
//if user selects add class, prompt user to enter class and add it to classes array
//if user selects add weapon, prompt user to enter weapon and add it to weapons array
//if user selects add item, prompt user to enter item and add it to items array

//user runs program
selectLoadout(loadout);