console.log(
  'Random hex color:',
  '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
);
