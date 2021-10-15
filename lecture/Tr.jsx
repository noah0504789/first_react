import React, {useEffect, useMemo, useRef, memo} from "react";
import Td from './Td'

const Tr = memo(({rowData, rowIndex, dispatch}) => {
    const ref = useRef([])
    useEffect(() => {
        ref.current = [rowData, dispatch, rowIndex]
    }, [rowData, dispatch, rowIndex])

    return (
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                 useMemo(
                     () => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>,
                 [rowData[i]],
                 )
            ))}
        </tr>
    )
})

export default Tr