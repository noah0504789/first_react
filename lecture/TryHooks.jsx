const React = require('react');
const {memo, useState} = React

const Try = memo(({ tryInfo }) => {
    const [result, setResult] = useState(tryInfo.result)

    const onClick = () => {
        setResult('1')
    }

    return (
        <li>
            <div>{tryInfo.try}</div>
            <div onClick={onClick}>{result}</div>
        </li>
    )
})

module.exports = Try;