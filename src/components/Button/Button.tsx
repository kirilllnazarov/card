import styled from "styled-components";
import { myTheme } from "../styles/animatiom/Theme.styled";

type BtnReactComponent = {
	marginLeft?: string;
	color: string;
	backgroundColor: string;
	borderColor: string;

	colorHover: string;
	backgroundColorHower: string;
};

export const Btn = styled.button<BtnReactComponent>`
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
