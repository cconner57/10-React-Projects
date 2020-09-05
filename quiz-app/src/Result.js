import React from 'react';

const Result = ({ results }) => {
	return (
		<div className='Container'>
			{results > 0 ? <h1>You got {results} correct!</h1> : <h1>Try Again</h1>}
		</div>
	);
};

export default Result;
