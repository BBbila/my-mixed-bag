import {
    observable,
    action,
    makeObservable
  } from 'mobx'
  
  
  class Store {
    @observable num:number = 0;
    @observable isShow:boolean = false;
  
    constructor() {
      // makeObservable 在mobx6.0版本进行初始化，方可修饰视图
      makeObservable(this);
    }
  
    @action.bound 
    handleClickTime() {
      this.num += 1;
      this.isShow = true;
    }

    @action.bound
    handleClickHide() {
        this.isShow = false;
        this.num = 0;
    }
  }
  
  export const buttonStore:any = new Store();
  