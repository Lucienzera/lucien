const now = Date.now();
const lastYear = now - 365 * 24 * 60 * 60 * 1000;
const randomDate = new Date(
  Math.floor(Math.random() * (now - lastYear)) + lastYear
);
console.log('Random date (last year):', randomDate.toISOString());
