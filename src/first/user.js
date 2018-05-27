
import React, { Component } from 'react';

class User extends Component {

    location() {
        return this.props.user.province + this.props.user.city
    }

    render() {
        let avatarStyle = this.props.avatarStyle

        return (
            <div className="example-user">
                <img src={this.props.user.avatar}
                    width={avatarStyle.size}
                    height={avatarStyle.size}
                    style={avatarStyle.circle ? { borderRadius: this.props.avatarStyle.size } : {}}
                    alt={this.props.user.username} />

                <div>
                    <span>{this.props.user.username}</span> <br />
                    <span>location: {this.location()}</span>
                </div>
            </div>
        )
    }
}

export default User