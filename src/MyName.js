import React, { Component } from 'react';


class MyName extends Component {

    render() {
        return (
            <div>
                <h3>안녕하세요. 저는 {this.props.name} 입니다. </h3>
            </div>
        )
    }
}


MyName.defaultProps = {
    name: '기본이름'
};


export default MyName;