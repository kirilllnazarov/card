import pic from "../src/files/cardImage.png";
import { Card } from "./components/Card/Card";
import styled from "styled-components";

function App() {
	return (
		<Box>
			<Card
				picture={pic}
				header={"Headline"}
				text={
					"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestieornare in venen"
				}
			/>
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
