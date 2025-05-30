// Generate random coordinates (latitude, longitude)
const randomLat = (Math.random() * 180 - 90).toFixed(6);
const randomLng = (Math.random() * 360 - 180).toFixed(6);
console.log(`Latitude: ${randomLat}, Longitude: ${randomLng}`);
