const React = require('react');
const { Component } = React;

class Try extends Component {
    state = {
        result: this.props.result,
        try: this.props.try
    }

    render() {
        const {tryInfo} = this.props
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )

    }
}

module.exports =  Try;