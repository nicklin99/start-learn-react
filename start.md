## 组件

写一个Hello world组件


JSX
```javascript
function Hello(props) {
  const jsx = (
    <div id="app">
      <p>{ props.message }</p>
    </div>
  )
  return jsx
}
```

JS

```
ReactDOM.render(
  <Hello message="hello world" />,
  document.getElementById('root')
);
```

props 是组件的属性，这点基本可vue类似，只是属性传入的写法不通,属性也是响应式的


```jsx
/*react*/
<desc>
hello world
</desc>
<script>
function Hello(props) {
    const jsx = (
        <div id="app0">
            <p>{ props.message }</p>
            <h1>Hello, world!</h1>
        </div>
    )
    return jsx
}

export default function App(){
    return <Hello message="hello react" />
}
</script>
```


## 条件与循环

### if else elseif

vue

- v-if
- v-else
- v-elseif

jsx

```jsx
/*react*/
<desc>
会员是否登录
</desc>
<script>
function UserHeader(props) {
    const isLogin = props.isLogin
    
    if (isLogin) {
        const jsx = (
            <p>欢迎回来</p>
        )
        return jsx
    } else {
        return <p>未登录</p>
    }
}

export default function App(){
    return (
        <div>
          isLogin = true <UserHeader isLogin={true} />
          isLogin = false <UserHeader isLogin={false} />
        </div>
    )
}
</script>
```

### 表达式

`? :` 三元表达式


```jsx
/*react*/
<desc>
会员是否登录
</desc>
<script>
function UserHeaderLabel(props) {
    const isLogin = props.isLogin
    
    return <p>user is {isLogin ? '已经登录' : '未登录'}</p>
}

export default function App(){
    return (
        <div>
          isLogin = true <UserHeaderLabel isLogin={true} />
          isLogin = false <UserHeaderLabel isLogin={false} />
        </div>
    )
}
</script>
```

`&&` `||` 内联表达式

```jsx
/*react*/
<desc>
会员是否登录
</desc>
<script>
function UserMoney(props) {
    const isLogin = props.isLogin
    
    return <p>我的余额 {isLogin && 100}</p>
}

function UserNoMoney(props) {
    const isLogin = props.isLogin
    
    return <p>我的余额 {isLogin || 0}</p>
}

export default function App(){
    return (
        <div>
          isLogin = true <UserMoney isLogin={true} />
          isLogin = false <UserNoMoney isLogin={false} />
        </div>
    )
}
</script>
```

## 属性总结