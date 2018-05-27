import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import List from './first/list';
import ListTable from './first/list-object';
import User from './first/user';
import UserState from './first/state';
import UserForm from './first/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React and Learn React</h1>
        </header>
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
