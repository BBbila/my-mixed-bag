import classNames from "classnames"
import { Fragment } from "react"

type MODEL = 'horizontal' | 'portrait'
interface IMenuProps {
  /**@name 索引-选中 */
  defaultIndex?: number
  /**@name 点击事件 */
  onSelect?: (selectedIndex: number) => void
  /**@name 模式 横向/纵向 */
  model?: MODEL
  children?: React.ReactNode
}


const Menu = (props: IMenuProps) => { 
  const {defaultIndex, onSelect, model, children } = props


  const cls =  classNames('horMenu', {'porMenu': model === 'portrait'})

  return (
    <Fragment>
      <div className={cls}>
        222
      </div>
    </Fragment>
  )
}
export default Menu
