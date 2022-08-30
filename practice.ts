let a : number[] = [1,2];
let b : string[] = ["sdf", "sdf"];
let c : boolean[] = [true, false];

// const player : {
//   name:string,
//   age?:number
// } = {
//   name:"nico"
// }

// if(player.age && player.age < 10){

// }


//=======Alias
type Age = number;
type Name = string;

type Player = {
  readonly name : Name,
  age? : Age
}

const nico : Player = {
  name:"nico"
}

const lynn : Player = {
  name:"lynn",
  age:12
}

function playerMaker (name:string) : Player {
  return {
    name
  }
}
const nicoName = playerMaker("nico");
nicoName.age = 12;

const playerMaker2 = (name:string) : Player => ({name});
const nicoName2 = playerMaker2("nico");
nicoName2.age = 12;

//===readonly => 읽기만 가능하게 바꿈
const names: readonly string[] = ["1","2"];

const player: [string, number, boolean] = ["nico", 12, true]; //Tuple
const playerRead: readonly [string, number, boolean] = ["nico", 12, true];

//========
let d:unknown;
if (typeof d === 'number'){
let e = d+1;
}

if (typeof d === "string"){
  let e = d.toUpperCase();
}

//====void=아무것도 return하지 않는 함수
function hello(){
  console.log('x');
}

//===never = 함수가 절대 return하지 않을 때
function hi(name:string|number) {
  // throw new Error("xxx");
  if (typeof name === "string"){
    //name===string
  } else if (typeof name === "number"){
    //name===number
  } else {
    //name===never : 절대 실행되지 않음!
  }
}

function hihi() : never {
  throw new Error("xxx");
}