import React from 'react';

const Question = ({ question, choice1, choice2, choice3, choice4, answer, step, selectedQuestion }) => {
	return (
		<div className='Container'>
			<div className='Container__question'>
				<h5>{question}</h5>
			</div>
			<div className='Container__choices'>
				<label>
					<input type='radio' name='quiz' value={choice1} onChange={selectedQuestion} />
					{choice1}
				</label>
				<label>
					<input type='radio' name='quiz' value={choice2} onChange={selectedQuestion} />
					{choice2}
				</label>
				<label>
					<input type='radio' name='quiz' value={choice3} onChange={selectedQuestion} />
					{choice3}
				</label>
				<label>
					<input type='radio' name='quiz' value={choice4} onChange={selectedQuestion} />
					{choice4}
				</label>
			</div>
			<button onClick={step}>Next</button>
		</div>
	);
};

export default Question;
