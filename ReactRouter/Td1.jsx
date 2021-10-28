import React, {useCallback, useContext, memo, useMemo} from "react";
import {CLICK_MINE, CODE, FLAG_CELL, NORMALIZE_CELL, OPEN_CELL, QUESTION_CELL, TableContext} from "./Games";

const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#444'
            }
        case CODE.OPENED:
            return {
                background: 'white'
            }
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return {
                background: 'yellow'
            }
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: 'red'
            }
        default:
            return {
                background: 'white'
            }
    }
}

const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.CLICKED_MINE:
            return '펑';
        case CODE.FLAG_MINE:
        case CODE.FLAG:
            return '!'
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
            return '?'
        default:
            return code || '';
    }
}

const Td1 = memo(({ rowIndex, cellIndex }) => {
    const { tableData, dispatch, halted } = useContext(TableContext)

    const onClickTd = useCallback(() => {
        if (halted) {
            return;
        }
        switch(tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                return
            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex})
                return
            case CODE.MINE:
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex})
                return
            default:
                return
        }
    }, [tableData[rowIndex][cellIndex], halted])

    const onRightClickTd = useCallback((e) => {
        e.preventDefault() // 오른쪽 마우스를 누를 때 작업창이 안나오도록 막음
        if (halted) {
            return;
        }

        switch(tableData[rowIndex][cellIndex]) { // '보통 -> 깃발 -> ?칸' 으로 순환
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex})
            case CODE.FLAG:
            case CODE.FLAG_MINE:
                dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex})
            case CODE.QUESTION_MINE:
            case CODE.QUESTION:
                dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex})
            default:
                return
        }
    }, [tableData[rowIndex][cellIndex]])

    return useMemo(() => (
        <td
            style={getTdStyle(tableData[rowIndex][cellIndex])}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}
        >{getTdText(tableData[rowIndex][cellIndex])}</td>
    ), [tableData[rowIndex][cellIndex]])
})

export default Td1