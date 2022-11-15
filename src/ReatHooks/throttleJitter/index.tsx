import classNames from "classnames";
import React, { Fragment, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useThrottle from "../useThrottle";


interface IThrottleJitterConProps {
  
}

const BtnMemo = React.memo((props: any) => {
  const { click } = props
  return (
  <button className="down" onClick={click}>节流</button>
  )
})

const throttleJitterCon = (props: IThrottleJitterConProps) => {
  const [text, setText] = useState("")
  const [throttleText, setThrottleText] = useState("初始")

  const textCls = classNames('text', {'dangerous': text == '暂停中...' ? true : false})
  const textThrottleCls = classNames('text', {'dangerous': text == '暂停中...' ? true : false})

  /** 防抖: 在事件被触发n秒后，再执行操作（回调函数) */
  function debounce(fn: any, delay: any) {
    let timer: any = null; 
    return function (this: any){
        let context = this,
        args = arguments;
        if(timer) { 
          setText("暂停中...")
          clearTimeout(timer)
        }
        timer = setTimeout(function (){
          fn.apply(context,args);
        },delay)
    }
 }

  /** 节流：在一定时间内只能执行一次 */
  const throttleFunc = (fn: Function, delay:any) => {
    let timer: any
    return useCallback(function(this:any) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
        }, delay)
        fn.apply(this, arguments)
      }
    },[])
  }

  


  /** 点击事件 */
  function handleClickJitter(type = '') {
    if(type == 'debounce') {
      setText("已处理")
    }else {
      setThrottleText(`${new Date().getSeconds()}`)
    }
  }

  
  return (
    <Fragment>
      <div className="btnGroup">
        <button onClick={debounce(() => {handleClickJitter('debounce')},5000)}>防抖</button>
        <div className={textCls}>{text}</div>
        <BtnMemo click={throttleFunc(() =>{handleClickJitter('throttle')},3000)} />
        <div className={textThrottleCls}>{throttleText}</div>
      </div>
    </Fragment>
  );
}

export default throttleJitterCon;




 

  