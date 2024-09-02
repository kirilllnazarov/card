import styled from "styled-components";

type CardImageType = {
	picture: string;
};

export const CardImage = (props: CardImageType) => {
	return <CardImageStyled src={props.picture} alt={"desert with blue sky"} />;
};

const CardImageStyled = styled.img`
	width: 280px;
	height: 170px;
	border-radius: 10px;
	margin-top: 10px;
	margin-left: 10px;
	margin-right: 10px;
`;
