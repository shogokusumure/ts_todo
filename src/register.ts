export class Register {
    constructor(private name:string, private date:string, private time:string){}

    public regist() {
      // localstrageに登録する処理を書く
      console.log(this.name)
      console.log(this.date)
      console.log(this.time)
    }
}