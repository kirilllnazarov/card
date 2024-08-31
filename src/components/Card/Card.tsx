import styled from "styled-components";
import { myTheme } from "../styles/animatiom/Theme.styled";

export const Card = styled.div`
	width: 300px;
	height: 350px;
	border-radius: 15px;
	background: ${myTheme.colors.cardBackground || "red"};
	box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
`;
