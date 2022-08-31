// type Add = (a:number, b:number) => number; //call signiture

// const add : Add = (a, b) => a + b

//overloading : 함수가 여러개의 call signiture를 가지고 있을 때
type Add = {
  (a:number, b: number) : number,
  (a:number, b: string) : number
}

const add : Add = (a, b) => {
  if(typeof b === "string") return a
  return a + b
}

type Config = {
  path : string,
  state: object
}

type Push = {
  (path: string) : void,
  (config: Config) : void
}

const push : Push = (config) => {
  if (typeof config === "string") {console.log(config)}
  else {
    console.log(config.path)
  }
}

//====polymorphism => generic
type SuperPrint1 = {
  <T, M>(a:T[], b?:M):T //함수의 인자를 보고 <> 안의 type을 결정하는 방식
}
const superPrint1 : SuperPrint1 = (arr) => arr[0]


const a = superPrint1([1,2,3,4], "x")
const b = superPrint1([true, false, true], 3)
const c = superPrint1(["a", "b", "c"], true)
//=====
function superPrint<T, M>(a: T[], b?:M){
  return a[0]
}

const d = superPrint([1,2,3,4], "x")
const e = superPrint([true, false, true], 3)
const f = superPrint(["a", "b", "c"], true)

//=====

type Player<E> = {
  name:string
  extraInfo: E
}

type NicoExtra = {
  favFood:string
}

type NicoPlayer = Player<NicoExtra>

const nico : NicoPlayer = {
  name:"nico",
  extraInfo: {
    favFood: "Kinchi"
  }
}

const lynn:Player<null> = {
  name:"lynn",
  extraInfo:null
}