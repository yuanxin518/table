import deepClone from "../../tools/deepClone"
import { getColumnLabel, getRowLabel } from "./ruler"
import { CellData, CreateEmptyCellData, CreateRulerCellData, FullTableEmptyDataParams } from "./types"

/**
 * 根据row column数目返回一个矩阵 r * c
 * @param params
 */
export const createEmptyCellData: CreateEmptyCellData = (params: FullTableEmptyDataParams) => {
	const { rowNum, columnNum } = params

	return Array.from(Array(rowNum), () => new Array(columnNum).fill(null))
}

/**
 * 在空二维数组的基础上添加行标和列标（深克隆）
 * @param emptyRulerCellData
 */
export const createRulerCellData: CreateRulerCellData = (emptyRulerCellData: CellData) => {
	const tempEmptyRulerCellData = deepClone(emptyRulerCellData)

	const result = {
		data: tempEmptyRulerCellData,
		info: {
			rowLength: tempEmptyRulerCellData.length,
			columnLength: (tempEmptyRulerCellData[0] && tempEmptyRulerCellData[0].length) || 0,
		},
	}

	if (tempEmptyRulerCellData.length === 0) return result

	const rowLength = tempEmptyRulerCellData.length
	const columnLength = tempEmptyRulerCellData[0].length

	const columnLabels = getColumnLabel(columnLength, 65, 90)
	const rowLabels = getRowLabel(rowLength, 0)

	const resolvedColumnCellData = [...tempEmptyRulerCellData].map((item, i) => {
		item.unshift(rowLabels[i])
		return item
	})

	//inject one row into
	const rulerCellData = [[null, ...columnLabels], ...resolvedColumnCellData]

	return {
		data: rulerCellData,
		info: {
			rowLength: rulerCellData.length,
			columnLength: rulerCellData[0].length,
		},
	}
}
