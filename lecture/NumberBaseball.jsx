const React = require('react')
const { Component } = React

function getNumbers() { // 숫자 네 개를 랜덤하게 뽑는 함수

}


class NumberBaseball extends Component {
    state = {
        result : '',
        value: '',
        answer: getNumbers(),
        tries: [],

    };

    onSubmitForm = () => {

    }

    onChangeInput = () => {

    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {[
                        {fruit: '사과', taste: '맛있다'},
                        {fruit:'바나나', taste: '맛없다'},
                        {fruit:'포도', taste: '맛없다'},
                        {fruit:'귤', taste: '맛없다'},
                        {fruit:'감', taste: '맛있다'},
                        {fruit:'배', taste: '맛없다'},
                        {fruit:'밤', taste: '맛있다'}
                    ].map((v, i) => {
                        <li key={v.fruit}><b>{v.fruit}</b> - {i}</li>
                    })}
                </ul>
            </>
        );

    }

}

module.exports = NumberBaseball