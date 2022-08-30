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