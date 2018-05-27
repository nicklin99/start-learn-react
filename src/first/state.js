
import React, { Component } from 'react';

/**
 * 组件状态存储、更新、显示
 * 生命周期
 * 事件
 * 
 * @class UserState
 * @extends {Component}
 */
class UserState extends Component {

    constructor(props) {
        super(props)
        this.state = {
            money: props.money,
            now: new Date()
        }

        this.payMoney = this.payMoney.bind(this)
        this.payMoney2 = this.payMoney2.bind(this)
    }

    //mark: 生命周期组件dom渲染完成，类似vue mounted

    componentDidMount() {
        this.timer = setInterval(() => this.now(), 1000)
    }

    now() {
        this.setState({
            now: new Date()
        });
    }

    //mark: 生命周期组件dom卸载
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {

        let showMoney

        if (this.state.money > 0) {
            showMoney = (
                <div>
                    <span>我的余额</span> <span>{this.state.money}</span>
                </div>
            )
        } else {
            showMoney = <span>没钱了</span>
        }

        return (
            <div>
                <span>jsx可以嵌入任何js表达式 </span>
                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx">https://reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx</a>

                <br />
                <span>1+1 = {1 + 1}</span>

                <span>当前时间 {this.state.now.toLocaleTimeString()}</span>

                <br />
                <br />
                <hr />

                jsx变量存储写法：{showMoney} <br />
                表达式写法：{this.state.money > 0 ? <div><span>我的余额</span> <span>{this.state.money}</span></div> : <span>没钱了</span>}

                <br />
                <span>直接对象更新</span>
                <button onClick={this.payMoney}>现在消费10元</button>
                &nbsp;
                <span>包围函数更新</span>
                <button onClick={this.payMoney2}>现在消费20元</button>
                &nbsp;
                <span>不bind</span>
                <button onClick={this.payMoney.bind(this)}>现在消费10元</button>
                <button onClick={e => this.payMoney3(e)}>现在消费30元</button>
                &nbsp;
                <span>参数</span>
                <button onClick={e => this.payMoneyParam(50, e)}>方法参数消费，参数50</button>





                <h3>总结</h3>


                <h5>组件状态</h5>
                <ul>
                    <li><span>state 对应vue就是 data，都是响应式的</span></li>
                    <li><span>state命名空间下存储组件状态</span></li>
                    <li><span>构造函数中初始化组件状态</span></li>
                    <li><span>setState()更新组件状态</span></li>
                    <li><span>setState() 还支持函数写法，第一个参数是上一次状态，和 js写法不一样，要加括号，因为是jsx，括号自动返回</span></li>

                    <li><span>表达式显示 style 注意返回object dom写法</span></li>
                </ul>
                <h5>组件事件</h5>
                <h5>组件生命周期</h5>
                <ul>
                    <li><span>事件使用驼峰写法，和 js dom写法一致</span></li>
                    <li><span>不想bind，可以直接通过箭头函数完成,或者bind直接写jsx表达式这里， payMoney3 不带默认是 event， payMoneyParams带参数</span></li>
                </ul>

                <h5>条件判断</h5>
                <ul>
                    <li><span>简单的直接表达式处理，复杂用js 变量存储 jsx</span></li>
                    <li><span>if 用js变量存储，jsx表达式无法使用</span></li>
                    <li><span>不想render，返回 null</span></li>
                </ul>
            </div>
        )
    }

    //mark: 方法 

    payMoney() {
        let money = this.state.money - 10

        this.setState({
            money
        })
    }


    payMoney2() {
        this.setState(prevState => ({
            money: prevState.money - 20
        }))
    }

    payMoney3() {
        this.setState(prevState => ({
            money: prevState.money - 30
        }))
    }

    payMoneyParam(value, e) {
        this.setState(prevState => ({
            money: prevState.money - value
        }))
        console.log(e)
    }
}

export default UserState