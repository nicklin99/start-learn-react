import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: '1',
                password: '2',
            }
        }
    }

    changeName(val) {
        this.setState({
            name: val
        })
    }
    changePassword(val) {
        this.setState({
            'form.password': val
        })
    }

    render() {
        return (
            <div>
                <h3>表单输入</h3>
                <form>
                    <label>
                        账号:<input type="text"
                            name="name"
                            value={this.state.form.name}
                            onChange={e => this.changeName(e.target.value)} />
                    </label>
                    <label>
                        密码:<input type="password"
                            name="password"
                            value={this.state.form.password}
                            onChange={e => this.changePassword(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>


                <h3>faq</h3>
                <ul>
                    <li>对象状态如何更新？仅更新对象的一个key的值</li>
                </ul>

            </div>
        )
    }
}

export default UserForm