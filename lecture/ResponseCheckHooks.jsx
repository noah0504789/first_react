import React, {useRef, useState} from 'react';

const ReactCheckHooks = () => {
    const [state, setState] = useState('waiting')
    const [message, setMessage] = useState('클릭해서 시작하세요.')
    const [result, setResult] = useState([])
    const timeOut = useRef(null)
    const startTime = useRef()
    const endTime = useRef()

    const onClickScreen = () => {
        if (state === 'waiting') { // 빨간색
            setState('ready')
            setMessage('초록색이 되면 클릭하세요.')
            timeOut.current = setTimeout(()=>{  // 초록색
                setState('now')
                setMessage('지금 클릭')
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000) // 2~3초
        } else if(state === 'ready') { // 성급하게 클릭 (초록색 되기전에 빨간색 클릭함)
            clearTimeout(timeOut.current) // 타임아웃 삭제함
            setState('waiting')
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요')

        } else if(state === 'now') { // 파란색
            endTime.current = new Date();
            setState('waiting')
            setMessage('클릭해서 시작하세요')
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]
            })
        }
    }

    const onReset = () => {
        setResult([])
    }

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <div> 평균 시간 : {result.reduce((a,c) => a+c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
    }

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    )
}


