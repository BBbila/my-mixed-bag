import { Fragment } from "react";
import MyButton, { btnType, btnSize } from "../../Components/Button";
import { observer, inject } from "mobx-react";

interface Iprops {
  children?: any;
}

const ButtonBox = ({ props, buttonStore }: Iprops & any) => {
  const store = buttonStore;
  return (
    <Fragment>
      <div className="flex-b width-100per">
        <MyButton type={btnType.Primary as any} onClick={store.handleClickTime}>
          Primary
        </MyButton>
        {store.isShow && (
          <span>
            您已经点击了{store.num}次
            <span
              style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
              onClick={store.handleClickHide}
            >
              隐藏
            </span>
          </span>
        )}
        <MyButton type={btnType.Default as any}>Default</MyButton>
        <MyButton type={btnType.Danger as any}>Danger</MyButton>
        <MyButton type={btnType.Disabled as any} disabled>
          Disabled
        </MyButton>
      </div>
      <div className="flex-b width-100per">
        <MyButton type={btnType.Primary as any} size={btnSize.Large}>
          Primary
        </MyButton>
        <MyButton type={btnType.Default as any} size={btnSize.Large}>
          Default
        </MyButton>
        <MyButton type={btnType.Danger as any} size={btnSize.Small}>
          Danger
        </MyButton>
        <MyButton type={btnType.Disabled as any} size={btnSize.Small} disabled>
          Disabled
        </MyButton>
      </div>
      <div className="flex-b width-100per">
        <MyButton type={btnType.Link as any}>Link1</MyButton>
        <MyButton type={btnType.Link as any} disabled>
          Link2
        </MyButton>
        <MyButton type={btnType.Link as any} href="https://codersblock.com">
          Link3
        </MyButton>
        <MyButton type={btnType.Link as any} size={btnSize.Small}>
          Link4
        </MyButton>
        <MyButton type={btnType.Link as any} size={btnSize.Large}>
          Link5
        </MyButton>
      </div>
    </Fragment>
  );
};

export default inject((store) => store)(observer(ButtonBox));
