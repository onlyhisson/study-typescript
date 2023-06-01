abstract class Animal {
  constructor(public name?: string, public age?: number) {}
  abstract say(): string;
}

class Cat extends Animal {
  say() {
    return "ya-ong";
  }
}

class Dog extends Animal {
  say() {
    return "wal-wal";
  }
}

let animals: Animal[] = [new Cat("야용이", 2), new Dog("멍멍이", 3)];
let sound = animals.map((el) => el.say());

console.log(sound);
