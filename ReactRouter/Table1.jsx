import React, { useContext, memo } from "react";
import Tr1 from "./Tr1";
import {TableContext} from "./Games";

const Table1 = memo(() => {
    const { tableData } = useContext(TableContext)
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) =>
                <Tr1 rowIndex={i} />
            )}
        </table>
    )
})

export default Table1