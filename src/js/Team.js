export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Персонаж уже добавлен в команду');
      }
  
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach((character) => this.members.add(character));
    }
  
    toArray() {
      const array = [];
      this.members.forEach((elem) => { array.push(elem); });
      return array;
    }

    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index > this.members.size) {
            return {
              value: undefined,
              done: true
            };
          } else {
            index++;
            return {
              value: this.members[index],
              done: false
            };
          }
        },
      };
    }
  }