import { observer }from 'mobx-react';
import {Fragment} from 'react';

const Cube = (props: any) => {
  const {
    title,
    list
  } = props;

  return(
    <Fragment>
      <h2>{title}</h2>
      <ul>
      {list.map((item:number,index:number) => {
        return <li key={index}>{item}</li>
      })}
      </ul>
    </Fragment>
  )
};

export default observer(Cube);