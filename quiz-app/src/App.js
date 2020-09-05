import React, { useState, useEffect } from 'react';
import './App.css';

import Landing from './Landing';
import Question from './Question';
import Result from './Result';

import QuizData from './QuizInfo.json';

function App() {
	const [step, setStep] = useState(1);
	const [question, setQuestion] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [selected, setSelected] = useState('');
	const [answer, setAnswer] = useState('');

	useEffect(() => {
		if (question < 5) {
			setAnswer(QuizData[question].Answer);
		}
	}, [question]);

	const selectedQuestion = (e) => {
		setSelected(e.target.value);
	};

	const score = () => {
		if (selected === answer) {
			setCorrect(correct + 1);
			setQuestion(question + 1);
		}
	};

	const next = () => {
		const radio = document.querySelectorAll('input[type=radio]');
		score();
		if (step === 1) {
			setStep(step + 1);
		} else if (question === 4) {
			setStep(step + 1);
		} else {
			setQuestion(question + 1);
		}
		radio.forEach((button) => (button.checked = false));
	};

	return (
		<div className='App'>
			{step === 1 && <Landing step={next} />}
			{step === 2 && (
				<Question
					question={QuizData[question].Question}
					choice1={QuizData[question].Choice1}
					choice2={QuizData[question].Choice2}
					choice3={QuizData[question].Choice3}
					choice4={QuizData[question].Choice4}
					step={next}
					selectedQuestion={selectedQuestion}
				/>
			)}
			{step === 3 && <Result results={correct} />}
		</div>
	);
}
export default App;
