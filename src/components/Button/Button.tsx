
import styled from "styled-components";

type BtnReactComponent = {
	color: string;
	colorHover: string;
	backgroundColor: string;
	backgroundColorHower: string;
	borderColor: string;
	marginLeft: string;
	children: string;
};

export const Btn = (props: BtnReactComponent) => {
	return (
		<BtnStyled
			color={props.color}
			colorHover={props.colorHover}
			backgroundColor={props.backgroundColor}
			backgroundColorHower={props.backgroundColorHower}
			borderColor={props.borderColor}
			marginLeft={props.marginLeft}
		>
			{props.children}
		</BtnStyled>
	);
};

const BtnStyled = styled.button<BtnReactComponent>`
	font-size: 10px;
	font-weight: 700;
	width: 86px;
	height: 30px;
	border-radius: 5px;
	border: 2px solid;
	color: ${(props) => props.color};
	background-color: ${(props) => props.backgroundColor};
	border-color: ${(props) => props.borderColor};
	margin-left: ${(props) => props.marginLeft};
	margin-top: 19px;
	margin-bottom: 22px;

	&:hover {
		background-color: ${(props) => props.backgroundColorHower};
		color: ${(props) => props.colorHover};
	}
`;
