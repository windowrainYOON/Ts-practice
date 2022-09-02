//단어 사전
type Words = {
  [key:string]:string // 키 값이 string이어야 한다는 언급
}

class Word {
  constructor(
    public readonly term: string,
    public readonly def : string
  ) {}
}

class Dict {
  private words : Words
  constructor(){
    this.words = {}
  }
  add(word:Word){
    if(this.words[word.term] === undefined){
      this.words[word.term] = word.def;
    } else {
      console.log("이미 존재하는 단어입니다");
    }
  }
  def(term:string){
    return this.words[term]
  }
  update(word:Word){
    if (this.words[word.term] !== undefined){
      this.words[word.def] = word.def;
    }
  }
  del(term:string){
    if (this.words[term] !== undefined) {
      delete this.words[term]
    }
  }
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi");