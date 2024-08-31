import styled from "styled-components";
import { myTheme } from "../styles/animatiom/Theme.styled";

export const Paragraph = styled.p`
	color: ${myTheme.colors.paragraph || "red"};
	font-size: 12px;
	font-weight: 500;
	line-height: 20px;
	width: 260px;
	height: 40px;
	margin-top: 20px;
	margin-left: 20px;
	margin-right: 20px;
`;
