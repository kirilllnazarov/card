import styled from "styled-components";
import { myTheme } from "../../styles/Theme.styled";
import { Header } from "../Header/Header";
import { Text } from "../Text/Text";
import { Btn } from "../Button/Button";
import { CardImage } from "../Images/Images";

type CardType = {
	picture: string;
	header: string;
	text: string;
	btnLeft: string;
	btnRight: string;
};

export const Card = (props: CardType) => {
	return (
		<CardStyle>
			<CardImage picture={props.picture} />
			<Header header={props.header} />
			<Text textType={props.text} />
			<Btn
				color={myTheme.colors.buttonLeftText}
				colorHover={myTheme.colors.colorLeftTextHover}
				backgroundColor={myTheme.colors.buttonLeftColor}
				backgroundColorHower={myTheme.colors.buttonLeftColorHower}
				borderColor={myTheme.colors.borderColor}
				marginLeft={"20px"}
			>
				{props.btnLeft}
			</Btn>
			<Btn
				color={myTheme.colors.buttoRightText}
				colorHover={myTheme.colors.colorRightTextHover}
				backgroundColor={myTheme.colors.buttonRightColor}
				backgroundColorHower={myTheme.colors.buttonRightColorHower}
				borderColor={myTheme.colors.borderColor}
				marginLeft={"12px"}
			>
				{props.btnRight}
			</Btn>
		</CardStyle>
	);
};

const CardStyle = styled.div`
	width: 300px;
	height: 350px;
	border-radius: 15px;
	background: ${myTheme.colors.cardBackground || "red"};
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;
