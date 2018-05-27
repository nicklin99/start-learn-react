import React, {
    Component
} from 'react';


/**
 * tr必须在tbody内，没有终端会输出警告信息
 * 
 * @class ListTable
 * @extends {Component}
 */
class ListTable extends Component {
    render() {
        const elems = this.props.list.map(elem => {
            return (
                <tr key={elem.id}>
                    <td>{elem.id}</td>
                    <td>{elem.name}</td>
                </tr>
            )
        })
        return (
            <table><tbody>{elems}</tbody></table>
        );
    }
}

export default ListTable;