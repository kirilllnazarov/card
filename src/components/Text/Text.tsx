import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";

type TextProps = {
	textType: string;
};

export const Text = (props: TextProps) => {
	return (
		<TextStyle>{props.textType}</TextStyle>
	)
};

const TextStyle = styled.p`
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
