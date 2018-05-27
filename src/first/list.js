import React, {
    Component
} from 'react';


/**
 * 一定要包含 key
 * 
 * @class List
 * @extends {Component}
 */
class List extends Component {
    render() {
        const elems = this.props.list.map((elem, index) => {
            return <li key={elem + '_' + index}>{elem}</li>
        })
        return (
            <ul>
                <li>key写法和vue比起来少前面的，直接由括号标识,key最好不要用 index,可以组合，保证唯一，或自己生成 </li>
                {elems}</ul>
        );
    }
}

export default List;