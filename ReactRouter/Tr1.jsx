import React, {useContext, memo} from "react";
import Td1 from './Td1'
import {TableContext} from "./Games";

const Tr1 = memo(({ rowIndex }) => {
    const { tableData } = useContext(TableContext)

    return (
        <tr>
            {tableData[0] && Array(tableData[0].length).fill().map((td, i) =>
                <Td1 rowIndex={rowIndex} cellIndex={i} />
            )}
        </tr>
    )
})

export default Tr1