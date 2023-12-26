
import React from "react"
import { Manager } from "socket.io-client";

const manager = new Manager("http://localhost:3000", {
  autoConnect: true
});

const socket = manager.socket("/");


const initIndexArray: any = Array(9).fill([]).map(() => Array(9).fill({value:''}))

const initState = {
  initGroup: initIndexArray,
  currentValue: false,
  isWin: false
}

class GoBang extends React.Component<any,any> {
  constructor(props: any) {
     super(props)
     this.state = {
      ...initState
     }
  }

  componentDidMount(): void {
    manager.open((err) => {
      if (err) {
        // an error has occurred
      } else {
        console.log('the connection was successfully established')
      }
    });
    
    this.sendMessage('hhhhhhhhhhhhhhhhhhhhhhh')
  }

  sendMessage(message: string) {
    socket.emit('message', message);
  }

  /** 点击下棋 */
  handleClickGoChess(lineIndex: number,index: number ) {
    const { currentValue, initGroup, isWin } = this.state
    //一方赢棋后，不能再点击
    if(!isWin) {
      //不能重复点击一个格子
      if(initGroup[lineIndex][index].value) {
        alert('该格子已经有棋子啦~')
        return
      }
      const newArr = initGroup.map((element: any[], map_index: number) => {
        if(map_index == lineIndex) {
          const eleObj = JSON.parse(JSON.stringify(element))
          eleObj[index].value = currentValue ? 'X' : 'O'
          return eleObj
        }else {
          return element
        }
      });
      this.setState({initGroup:newArr, currentValue: !currentValue})
      this.commonMultidimensionalJuage(newArr, !currentValue)
    }else {
      alert('棋局即将重新开始')
    }
  }

  /** 点击重置 */
  handleClickResetBoard =() => {
    this.setState({...initState})
  }

  commonWin(data: any) {
    if(Array(data)) {
      const similarList = data.map((item:any) => item.value).join(",")
      if(similarList.indexOf('O,O,O,O,O') != -1 || similarList.indexOf('X,X,X,X,X') != -1 ) {
        this.setState({isWin:true})
        setTimeout(() => {this.handleClickResetBoard()}, 3000)
        return
      }
    }
  }

  commonMultidimensionalJuage(arr: any[], c_value:Boolean) {
    //判断横向
    arr.forEach((element: any )=> {
      this.commonWin(element)
    });

    //判断纵向
    let newEleObj: any = {}
    arr.forEach((ele,index) => {
      ele.forEach((s:Object, i:number) => {
        var rowList = newEleObj[i] || []
        rowList.push(s)
        newEleObj[i] = rowList
      });
    })
    for(let item in newEleObj) {
      this.commonWin(newEleObj[item])
    }


    //判断左斜
    let newBiasEleObj: any = {}
    arr.forEach((ele,i) => {
      ele.forEach((solo:Object, j:number) => {
        let rowList = newBiasEleObj[`${i}-${j}`] || []
        const zero = i== 0 && j == 0
        const last = i== arr.length-1 && j == ele.length-1
        if(zero || last) {
          rowList.unshift(arr[i][j])
          newBiasEleObj[`${i}-${j}`] = rowList
        }else {
          if(i == 0) {
            let n= 0
            for(let k=j;k>=0;k--){
              rowList.unshift(arr[n][k])
              newBiasEleObj[`${i}-${j}`] = rowList
              n++
            }
          }else {
            let n = i
            for(let k= ele.length -1;k >= 0; k--){
              if(k >= i) {
                rowList.unshift(arr[n][k])
                newBiasEleObj[`${i}-${ele.length -1}`] = rowList
                n++
              }
            }
          }
        }
      });
    })
    for(let item in newBiasEleObj) {
      this.commonWin(newBiasEleObj[item])
    }

    

    // 右斜
    let newBiasEleObjRight: any = {}
    arr.forEach((ele,i) => {
      for(let j= ele.length -1;j > 0; j--){
        let rowList = newBiasEleObjRight[`${i}-${j}`] || []
        if(i == 0) {
          let n= 0
          for(let k=j;k<=ele.length-1;k++){
            if(k < ele.length-1) {
              rowList.push(arr[n][k])
              newBiasEleObjRight[`${i}-${j}`] = rowList
              n++
            }else if(k = ele.length -1) {
              rowList.push(arr[n][k])
              newBiasEleObjRight[`${i}-${j}`] = rowList
            }
          }
        }else {
          let n = i
          for(let k=0;k<=ele.length-1;k++){
            const v = ele.length-1
            if(k <= v-i) {
              rowList.push(arr[n][k])
              newBiasEleObjRight[`${i}-0`] = rowList
              n++
            }
          }
        }
      }
    })
    for(let item in newBiasEleObjRight) {
      this.commonWin(newBiasEleObjRight[item])
    }

  }

  
  

  render(): React.ReactNode {
      const { currentValue, isWin } = this.state
      return(
        <div className="gobangWrap">
          <div className="board">
            {this.state.initGroup?.map((line: number[],lineIndex: number) => 
              <div className="boardLine" key={lineIndex}>
                {line.map((ele: any,index) => 
                  <button className="item" key={index} onClick={() => {this.handleClickGoChess(lineIndex, index)}}>{ele?.value}</button>
                )}
              </div>
            )}
          </div>
          {/* 操作栏 */}
          <div className="operation">
              <button onClick={this.handleClickResetBoard}>重置</button>
          </div>
          {isWin && 
          <div className="operation">
              <button>{!currentValue ? 'X' : 'O'}棋子赢了</button>
          </div>
          }
        </div>
      )
  }
}

export default GoBang