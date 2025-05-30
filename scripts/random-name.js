// Generate a random name combination
const firstNames = ['Alex', 'Jordan', 'Casey', 'Morgan', 'Riley', 'Avery', 'Quinn', 'Sage', 'Rowan', 'Blake'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];

const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

console.log(`${randomFirstName} ${randomLastName}`);
