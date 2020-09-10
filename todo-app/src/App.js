import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState(['Orange juice', 'Cheese', 'Carrots']);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, newTodo]);
		setNewTodo('');
	};

	const handleDelete = (todoValue) => {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo !== todoValue);
		});
	};

	return (
		<div className='Todo'>
			<div className='Todo__container'>
				<form className='Todo__form' onSubmit={handleFormSubmit}>
					<h1>Shopping List</h1>
					<input
						type='text'
						className='Todo__input'
						value={newTodo}
						placeholder='Enter todo'
						onChange={(e) => setNewTodo(e.target.value)}
					/>
				</form>
				<ul className='Todo__list'>
					{todos.map((todo, key) => (
						<li
							key={key}
							className='Todo__item'
							onClick={() => handleDelete(todo)}>
							{todo}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
