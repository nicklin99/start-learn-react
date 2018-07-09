import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import List from './first/list';
import ListTable from './first/list-object';
import User from './first/user';
import UserState from './first/state';
import UserForm from './first/form';

import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Learn React</h1>
        </header>
        <Hello message="hello world" />
        <div className="side">
          <ul>
            <li><p>react 安装</p><ul>
                <li><a href="#/configuration">create react app</a></li>
                <li><a href="#/themes">npm</a></li>
                <li><a href="#/plugins">script引入</a></li>
                </ul>
            </li>
            <li><p>介绍</p><ul>
                <li><a href="#/configuration">组件</a></li>
                <li><a href="#/themes">Themes</a></li>
                <li><a href="#/plugins">List of Plugins</a></li>
                <li><a href="#/write-a-plugin">Write a Plugin</a></li>
                <li><a href="#/markdown">Markdown configuration</a></li>
                <li><a href="#/language-highlight">Language highlighting</a></li>
                </ul>
            </li>
          </ul>
        </div>
        <div>

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="examples">
          <h1>属性</h1>
          <p>和vue基本差不多</p>
          <User user={{ avatar: "https://avatars0.githubusercontent.com/u/13115996?s=460&v=4", username: 'nicklin', province: '浙江', city: '台州' }} avatarStyle={{ size: 100, circle: true }}></User>

          <h1>循环</h1>
          <h3>数组循环</h3>
          <List list={[1, 2, 3, 4, 5, 6]} />
          <h3>数组对象</h3>
          <ListTable list={[{ id: 1, name: 'nicklin' }, { id: 2, name: 'test' }]} />

          <h1>事件绑定与处理、生命周期</h1>
          <UserState money="100"></UserState>

          <h1>表单</h1>
          <UserForm></UserForm>
        </div>
      </div >

    );
  }
}

export default App;
