import React, { Fragment, ReactNode, useRef } from "react";
// 定义一个全局变量
let like = 0;

interface IUseRefConProps {
  isShow?: boolean;
  children?: ReactNode;
}
const UseRefCon = (props: IUseRefConProps) => {
  const { isShow = true } = props;
  let likeRef = useRef(0);
  function handleAlertClick() {
    setTimeout(() => {
      console.log(`you clicked on ${like}`);
      console.log(`you clicked on ${likeRef.current}`);
    }, 3000);
  }
  return (
    <Fragment>
      <p>
        <button
          onClick={() => {
            like = ++like;
            likeRef.current = likeRef.current + 1;
          }}
        >
          点赞
        </button>
        <button onClick={handleAlertClick}>查看打印次数</button>
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
