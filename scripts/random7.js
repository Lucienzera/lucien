function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('Random int (50-150):', randomInt(50, 150));
