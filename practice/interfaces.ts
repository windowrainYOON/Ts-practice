type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10
//type이 특정 값만 가지도록 할 수 있음
type Player4 = {
  nickname:string,
  team: Team,
  health: Health
}

const nico2 : Player4 = {
  nickname: "nico",
  team: "yellow",
  health: 10
}

//=====interface = 객체의 모양을 결정해 주기 위해서만 존재

interface Player5 {
  nickname:string,
  team: Team,
  health: Health
}

const nico3 : Player5 = {
  nickname: "nico",
  team: "yellow",
  health: 10
}
//===
interface User1 {
  readonly name:string
}

interface Player6 extends User1 {}
// type Player6 = User1 & {} // 두 양식 모두 작동, type에서 상속 받는 방법
//interface는 동일한 것을 여러번 만들어도 하나도 합쳐줌 (type은 겹치는 것은 동작하지 않음)

const nico4 : Player6 = {
  name:"nico"
}
//======

// abstract class User2 { //abstract 방식은 js로 컴파일 될 때 class로 변환되어 남음 => 코드가 길어짐
//   constructor(
//     protected firstName:string,
//     protected lastName:string
//   ) {}
//   abstract sayHi(name:string):string
//   abstract fullName():string
// }

// class Player7 extends User2 {
//   fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`
//   }
// }

interface User2 {
  firstName:string,
  lastName:string,
  sayHi(name:string):string,
  fullName():string
}

interface Human {
  health:number
}

class Player7 implements User2, Human { //interface의 경우 implements를 이용해 상속 받아줌
  constructor(
    public firstName : string,
    public lastName: string,
    public health:number
  ){}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`
  }
}

