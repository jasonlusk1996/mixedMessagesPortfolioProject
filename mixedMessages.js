//store object with class, weapon, and item
const loadout = {classes: ['warrior', 'mage', 'rogue','archer','monk'], weapons: ['sword', 'staff', 'dagger','bow','staff'], items: ['health potion', 'mana potion', 'stamina potion','poison potion','agility potion']};

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
function promptUser(loadout) {
    const prompt = require('prompt-sync')();
    let action = ''
    while (action !== 'exit') {console.log('What would you like to do? (view classes, view weapons, view items, add class, add weapon, add item, select loadout, or exit)');
      action = prompt('Selection: ').toLowerCase().trim();
      switch (action) {
        //if user selects view classes, display classes
        case 'view classes':
          console.log('Classes: ' + loadout.classes.join(', '));
          break;
        //if user selects view weapons, display weapons
        case 'view weapons':
          console.log('Weapons: ' + loadout.weapons.join(', '));
          break;
        //if user selects view items, display items
        case 'view items':
          console.log('Items: ' + loadout.items.join(', '));
          break;
        //if user selects add class, prompt user to enter class and add it to classes array
        case 'add class':
          const newClass = prompt('Enter a new class: ');
          loadout.classes.push(newClass);
          console.log(`${newClass} has been added to classes.`);
          break;
        //if user selects add weapon, prompt user to enter weapon and add it to weapons array
        case 'add weapon':
          const newWeapon = prompt('Enter a new weapon: ');
          loadout.weapons.push(newWeapon);
          console.log(`${newWeapon} has been added to weapons.`);
          break;
        //if user selects add item, prompt user to enter item and add it to items array
        case 'add item':
          const newItem = prompt('Enter a new item: ');
          loadout.items.push(newItem);
          console.log(`${newItem} has been added to items.`);
          break;
        //if user selects select loadout, call selectLoadout function
        case 'select loadout':
          selectLoadout(loadout);
          break;
        case 'exit':
          console.log('Exiting program. Goodbye!');
          break;
        //if user selects an invalid option, display error message
        default:
          console.log('Invalid selection. Please try again.');
        }
  }
}

//runs program
promptUser(loadout);