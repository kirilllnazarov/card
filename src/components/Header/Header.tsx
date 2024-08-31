import styled from "styled-components";
import { myTheme } from "../styles/animatiom/Theme.styled";

export const Header = styled.h1`
	color: ${myTheme.colors.header || "red"};
	width: 70px;
	height: 19px;
	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	margin-left: 20px;
	margin-right: 210px;
	margin-top: 20px;
`;
