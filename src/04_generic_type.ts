/*
  제네릭 타입
  - 다양한 타입을 한꺼번에 취급할 수 있게 함
 */
class Container<T> {
  constructor(public value: T) {}
}

let numberContainer: Container<number> = new Container<number>(1);
let stringContainer: Container<string> = new Container<string>("Hello World");
