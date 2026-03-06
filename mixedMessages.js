//this is the start of the code for the mixed messages project
//user runs program
//store array of class, weapon, and item
const loadout = {classes: ['Warrior', 'Mage', 'Rogue','Archer','Monk'], weapons: ['Sword', 'Staff', 'Dagger','Bow','Staff'], items: ['Health Potion', 'Mana Potion', 'Stamina Potion','Poison Potion','Agility Potion']};
//iterate through each array and randomly select one element from each
//combine the three elements into a single string and display it to the user
//logged console will be something like "You are a [class], equipped with a [weapon]. You have a [item] in your inventory."