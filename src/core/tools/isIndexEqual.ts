import { IndexType } from "../types/table.type"

const isIndexEqual = (index: IndexType | null, targetIndex: IndexType | null) => {
	if (!index || !targetIndex) return false

	return index.rowIndex === targetIndex.rowIndex && index.columnIndex === targetIndex.columnIndex
}

export default isIndexEqual
