import React, { Fragment, ReactNode, useRef, useState } from "react";


// 定义一个全局变量
let like = 0;
interface IUseRefConProps {
  isShow?: boolean;
  children?: ReactNode;
}
const UseRefCon = (props: IUseRefConProps) => {
  const { isShow = true } = props;
  const [value, setValue] = useState(0)
  const [valueArea, setValueArea] = useState(0)
  const [valueref, setValueRef] = useState(0)

  let likeRef = useRef(0);
  // 定义一个全局变量
  let likeArea = 0;
  function handleAlertClick() {
    // setTimeout(() => {
    //   console.log(`you clicked on ${like}`);
    //   console.log(`you clicked on ${likeRef.current}`);
    // }, 3000);
    console.log(`you clicked on ${like}`);
    console.log(`you clicked on ${likeArea}`);
    console.log(`you clicked on ${likeRef.current}`);
  }
  return (
    <Fragment>
      <p>
        <button
          onClick={() => {
            like = ++like;
            likeArea = ++likeArea;
            likeRef.current = likeRef.current + 1;
            setValue(like)
            setValueArea(likeArea)
            setValueRef(likeRef.current)
          }}
        >
          点赞
        </button>
        <button onClick={handleAlertClick}>查看打印次数</button>
        <button >全局变量{value}</button>
        <button >局部变量{valueArea}</button>
        <button >ref变量{valueref}</button>
      </p>
      {isShow && (
        <div>
          <a href="../../page/test">查看全局变量和useRef的区别</a>
        </div>
      )}
    </Fragment>
  );
};
export default UseRefCon;
