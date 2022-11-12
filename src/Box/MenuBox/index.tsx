import { observer, inject } from "mobx-react";
import { Fragment } from "react";
import Menu from "../../Components/Menu/index";
// import MenuItem from "../../Components/Menu/compotents/MenuItem/index";

interface Iprops {
  children?: any;
}

const MenuBox = ({ props }: Iprops & any) => {
  return <Fragment>
    <Menu onSelect={() => {}}>
      {/* <MenuItem>
        第一
      </MenuItem>
      <MenuItem>
        第二
      </MenuItem> */}
    </Menu>
    </Fragment>;
};

export default inject((store) => store)(observer(MenuBox));
