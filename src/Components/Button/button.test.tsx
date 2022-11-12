import {fireEvent, render} from '@testing-library/react';
import MyButton, { btnType } from '../../Components/Button';

//追踪到组件中函数的真实实现，以及调用的次数(Mock Functions)
const fnProps = {
    onClick: jest.fn()
}

test('our first react test case', () => {
    const wrapper = render(<MyButton>Nice</MyButton>)
    const element = wrapper.queryByText('Nice')
    expect(element).toBeInTheDocument()
})

//第一个测试用例
describe('test Button commponent', () =>{
    //正确渲染default button
    it("should render the correct default button", () =>{
        const wrapper = render(<MyButton type={btnType.Default as any}>Default</MyButton>)
        const element = wrapper.getByText('Default') //返回的是HTMLElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON') //检查tagName是不是按钮
        expect(element).toHaveClass('btn btn-default')
    })
    //根据不同的props显示不同的组件
    it("should render the correct component based on different props", () =>{
        const wrapper = render(<MyButton  type={btnType.Danger as any}>Danger</MyButton>)
        const element = wrapper.getByText('Danger') //返回的是HTMLElement
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn btn-danger')
    })
    //禁用的button
    it("should render the correct button with disabled", () =>{
        const wrapper = render(<MyButton disabled>no</MyButton>)
        const element = wrapper.getByText('no') as HTMLButtonElement //类型断言,让它变成一个button
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
    })
    //测试监听事件是否生效
    it("Whether the monitoring event takes effect", () =>{
        const wrapper = render(<MyButton {...fnProps}>clickThis</MyButton>)
        const element = wrapper.getByText('clickThis') as HTMLButtonElement //类型断言,让它变成一个button
        expect(element).toBeInTheDocument()
        //调用这个方法
        fireEvent.click(element)
        expect(fnProps.onClick).toHaveBeenCalled() //期望被调用到
    })
})