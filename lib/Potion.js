// function constructor to create an object
// ES6 way
class Potion {
    constructor(name){
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

// regualar way
// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
//     if (this.name === 'health') {
//       this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//       this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }
  
module.exports = Potion;