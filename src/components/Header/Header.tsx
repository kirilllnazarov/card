import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

type HeaderType = {
	header: string;
};

export const Header = (props: HeaderType) => {
	return (
		<HeaderStyle>{props.header}</HeaderStyle>
	)
};

const HeaderStyle = styled.h2`
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
