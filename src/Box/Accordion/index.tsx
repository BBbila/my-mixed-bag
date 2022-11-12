import { configList } from "./data";
import { Link } from "react-router-dom";

interface IAccordionMainProps {
  children?: any;
}

const AccordionMain = (props: IAccordionMainProps) => {
  return (
    <div className="accordionMainWrap">
      {configList.length &&
        configList.map((item) => (
          <div className="itemWrap" key={item.id}>
            <div className="item">{item.title}</div>
            {item.child.length &&
              item.child.map((data) => (
                <ul className="itemUl">
                  <Link to={data.url}>
                    <li className="itemli">{data.name}</li>
                  </Link>
                </ul>
              ))}
          </div>
        ))}
    </div>
  );
};

export default AccordionMain;
