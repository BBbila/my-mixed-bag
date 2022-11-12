import {
  observable,
  action,
  makeObservable
} from 'mobx'


class Store {
  @observable title:string = "hello mobx";
  @observable age:number = 44;
  @observable isVisible:boolean = true;
  @observable list: number[] = [1,2,3,4];

  constructor() {
    // makeObservable 在mobx6.0版本进行初始化，方可修饰视图
    makeObservable(this);
  }

  //删除list中最后一项
  @action.bound 
  cancel() {
    console.log("6666")
    if(this.list.length > 0 ){
      this.list.pop();
    }
  }
}

export const store:any = new Store();

