import styled from "styled-components"

const BackgroundConfig = {
	border: "1px solid rgba(0, 0, 0, 0.1)",
}

export const Body = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`

export const Header = styled.header`
	background-color: #fff;
	width: 100%;
	border-bottom: ${BackgroundConfig.border};
	display: flex;
	flex-direction: column;
	padding: 4px 20px;
`

export const Main = styled.main`
	width: 100%;
	height: 100%;
	flex: 1;
	display: flex;
	overflow: hidden;
`

export const Aside = styled.aside`
	background: #fff;
	min-width: 300px;
	height: 100%;
	border-right: ${BackgroundConfig.border};
`

export const Content = styled.div`
	margin: 5px;
	display: flex;
	overflow: hidden;
	position: relative;
	width: 100%;
`
