import { Btn } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Paragraph } from "./components/Paragraph/Paragraph";
import { CardImage } from "./components/Images/Images";
import pic from "../src/files/cardImage.png";
import { Card } from "./components/Card/Card";
import styled from "styled-components";
import { myTheme } from "./components/styles/animatiom/Theme.styled";

function App() {
	return (
		<Box>
			<Card>
				<CardImage src={pic} />
				<Header>Headline</Header>
				<Paragraph>
					Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
					ornare in venen.
				</Paragraph>
				<Btn
					color={myTheme.colors.buttonLeftText}
					colorHover={myTheme.colors.colorLeftTextHover}
					backgroundColor={myTheme.colors.buttonLeftColor}
					backgroundColorHower={myTheme.colors.buttonLeftColorHower}
					borderColor={myTheme.colors.borderColor}
					marginLeft={"20px"}
				>
					See more
				</Btn>
				<Btn
					color={myTheme.colors.buttoRightText}
					colorHover={myTheme.colors.colorRightTextHover}
					backgroundColor={myTheme.colors.buttonRightColor}
					backgroundColorHower={myTheme.colors.buttonRightColorHower}
					borderColor={myTheme.colors.borderColor}
					marginLeft={"12px"}
				>
					Save
				</Btn>
			</Card>
		</Box>
	);
}

export default App;

const Box = styled.div`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	button {
		cursor: pointer;
	}
	img {
		cursor: zoom-in;
	}
`;
