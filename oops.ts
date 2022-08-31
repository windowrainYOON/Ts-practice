abstract class User { // 다른 class가 상속 받을 수 있는 class // 상속만 가능함
  constructor(
    public firstName:string, // 외부에서 접근 가능
    private lastName:string, // 클래스 안에서만 접근 가능
    protected nickName:string //자식 클래스에서 접근 가능
  ) {}
  abstract getNickName() :void // abstract method
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

class Player3 extends User{
  getNickName(): void {
    console.log(this.nickName) //상속된 자식 클래스의 경우 protected에 접근 가능
  }
}

const nico1 = new Player3("nico", "lastName", "nico");

// nico1.nickName; //인스턴스 밖에서 접근할 수 없음

nico1.getFullName();

