import { HighlightBorderContainer, HighlightBorderItem } from "../../styled/highlight/HighlightBorder-styled"

interface HighlightBorderProps {
	highlightBorderProperty: HighlightBorderProperty
	cellLogicWidth: number
	cellLogicHeight: number
	isRender: boolean
	children?: React.ReactNode
}

export type HighlightBorderProperty = {
	borderOffsetLeft: number
	borderOffsetTop: number
	borderWidth: number
	offsetLeft: number
	offsetTop: number
	width: number
	height: number
	mousemoveHeaderOffsetTop: number
	mousemoveHeaderOffsetLeft: number
}

const HighlightBorder: React.FC<HighlightBorderProps> = ({ cellLogicHeight, cellLogicWidth, isRender, highlightBorderProperty: { borderWidth, offsetLeft, offsetTop, width, height }, children }) => {
	return (
		<HighlightBorderContainer data-testid="highlightborder-container" $offsetLeft={cellLogicWidth} $offsetTop={cellLogicHeight}>
			{children}
			<HighlightBorderItem
				$isRender={isRender && width !== 0 && height !== 0}
				$borderWidth={borderWidth}
				$width={width}
				$height={height}
				$offsetLeft={offsetLeft}
				$offsetTop={offsetTop}
				$cellLogicWidth={cellLogicWidth}
				$cellLogicHeight={cellLogicHeight}
			/>
		</HighlightBorderContainer>
	)
}

export { HighlightBorder }
