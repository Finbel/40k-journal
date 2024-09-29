import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: #f4f4f9;
	padding: 20px;
`;

const Button = styled.button`
	padding: 10px 20px;
	margin: 10px;
	font-size: 18px;
	color: white;
	background-color: #007bff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	max-width: 200px;

	&:hover {
		background-color: #0056b3;
	}
`;

function Home() {
	const navigate = useNavigate();

	return (
		<Container>
			{/* Knapp som navigerar till Start Game */}
			<Button onClick={() => navigate("/start-game")}>Start Game</Button>

			{/* Knapp som för närvarande inte leder någonstans */}
			<Button>Games</Button>
		</Container>
	);
}

export default Home;
