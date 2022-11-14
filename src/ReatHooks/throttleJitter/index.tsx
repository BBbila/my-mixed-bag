import classNames from "classnames";
import React, { Fragment, ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import useThrottle from "../useThrottle";


interface IThrottleJitterConProps {
  
}
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
  const throttleFunc = useCallback((fn: Function, delay:any) => {
  const [flag, setFlag] = useState(true)
    let timer: any = null
    return function(this:any) { 
        let context = this
        if(!flag) return
        setFlag(false)
        clearTimeout(timer)
        fn.apply(context,arguments)
        timer = setTimeout(function() {
        setFlag(true)
        },delay)
      }
    }
  ,[])


  /** 点击事件 */
  function handleClickJitter(type = '') {
    if(type == 'debounce') {
      setText("已处理")
    }else {
      setThrottleText(`执行`)
    }
  }

  
  return (
    <Fragment>
      <div className="btnGroup">
        <button onClick={debounce(() => {handleClickJitter('debounce')},5000)}>防抖</button>
        <div className={textCls}>{text}</div>
        <button className="down" onClick={throttleFunc(() => {handleClickJitter('throttle')},5000)}>节流</button>
        <div className={textThrottleCls}>{throttleText}</div>
      </div>
    </Fragment>
  );
}
export default throttleJitterCon;




 

  