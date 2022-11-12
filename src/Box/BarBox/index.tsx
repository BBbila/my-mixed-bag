import { observer , inject }from 'mobx-react';
import Cube from './cube';

const BarBox = ({ store }: any) =>{
  return (
    <div style={{padding:'20px'}}>
      <div className="mainContent">
        <Cube title={store.title} list={store.list}></Cube>
        <div>
          <button onClick={store.cancel}>删除</button>
        </div>
        {store.isVisible && <span>我已经{store.age}岁了!</span>}
      </div>
    </div>
  );
}

export default inject(store => store)(observer(BarBox));
