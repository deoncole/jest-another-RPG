// function constructor to create an object
function Potion(name) {
    this.types = ['strength', 'agility', 'heath'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
  
  module.exports = Potion;