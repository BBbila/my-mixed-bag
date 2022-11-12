import { Fragment } from "react";
import { observer, inject } from "mobx-react";
import UseRefCon from "../ReatHooks/useRef";

const Test = () => {
  return (
    <Fragment>
      <UseRefCon isShow={false} />
      <UseRefCon isShow={false}></UseRefCon>
      <UseRefCon isShow={false}></UseRefCon>
    </Fragment>
  );
};

export default inject((store) => store)(observer(Test));
