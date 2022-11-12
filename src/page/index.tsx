import { Fragment } from "react";
import { observer, inject } from "mobx-react";
import AccordionMain from "../Box/Accordion";
import ButtonBox from "../Box/ButtonBox";
import MenuBox from "../Box/MenuBox";

interface Iprops {
  children?: any;
}

const Home = ({ props, buttonStore }: Iprops & any) => {
  return (
    <Fragment>
      <div className="App">
        <div className="header">
          <h1>welcome to my antd</h1>
        </div>
        <div className="main">
          <AccordionMain />
          <div className="mainContent">
            <span className="title">--BUTTON--</span>
            <div className="content height-200">
              <ButtonBox></ButtonBox>
            </div>
            <span className="title">--MENU--</span>
            <div className="content height-200">
              <MenuBox></MenuBox>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default inject((store) => store)(observer(Home));
