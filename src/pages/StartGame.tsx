import { useState } from "react";
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

const FormGroup = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 400px;
`;

const Label = styled.label`
	font-size: 18px;
	margin-bottom: 5px;
	color: #333;
`;

const TextArea = styled.textarea`
	padding: 10px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
	height: 10em; /* Sätter höjden till 10em */
	box-sizing: border-box;
	line-height: 1.5; /* Avståndet mellan rader */
	vertical-align: top; /* Säkerställer att texten börjar högst upp */
	resize: none; /* Förhindrar användaren att ändra storlek */
`;

const Button = styled.button`
	padding: 10px 20px;
	margin-top: 20px;
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

function StartGame() {
	const [army1, setArmy1] = useState("");
	const [army2, setArmy2] = useState("");

	const handleSave = () => {
		console.log("Army 1:", army1);
		console.log("Army 2:", army2);
	};

	return (
		<Container>
			<FormGroup>
				<Label>Paste army 1</Label>
				<TextArea
					value={army1}
					onChange={(e) => setArmy1(e.target.value)}
					placeholder="Paste army 1 here"
				/>
			</FormGroup>

			<FormGroup>
				<Label>Paste army 2</Label>
				<TextArea
					value={army2}
					onChange={(e) => setArmy2(e.target.value)}
					placeholder="Paste army 2 here"
				/>
			</FormGroup>

			<Button onClick={handleSave}>Save</Button>
		</Container>
	);
}

export default StartGame;
