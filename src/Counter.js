import React, { Component } from 'react';


const Problem = () => {
    throw (new Error('버그가 나타났다!'));

    return (
        <div>

        </div>
    )
}


class Counter extends Component {

    state = {
        number: 0,
        error: false
    };

    constructor(props) {
        super(props);
        console.log('constructor')
    };

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    /*
        shouldComponentUpdate() => update ( rerendering ) => 어떤 상황에서는 리랜더링하지 말라.
    */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('compnentDidUpdate');
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    };

    handleDecrease = () => {
        this.setState(({ number }) => ({
            number: number - 1
        }));
    };


    render() {
        console.log('render');

        if (this.state.error) return <h1>에러발생!</h1>;

        return (
            <div>
                <h1>카운터</h1>
                <p>값: {this.state.number}</p>
                {this.state.number === 4 && <Problem />}
                <button onClick={this.handleIncrease}>증가</button>
                <button onClick={this.handleDecrease}>감소</button>
            </div>
        )
    }
}

export default Counter;