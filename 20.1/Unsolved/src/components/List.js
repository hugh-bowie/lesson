import React from 'react';

function List(props) {
	const groceries = [
		{
			id: 1,
			name: 'Milk',
		},
		{
			id: 2,
			name: 'Eggs',
		},
		{
			id: 3,
			name: 'Cheese',
		},
		{
			id: 4,
			name: 'Cake Mix',
		},
		{
			id: 5,
			name: 'Carrots',
		},
		{
			id: 6,
			name: 'Juice',
		},
	];
	return (
		<header className='flex-row px-1'>
			<h2>
				<a data-testid='link' href='/'>
					<span role='img' aria-label='camera'>
						{' '}
						📸
					</span>{' '}
					Oh Snap!
				</a>
			</h2>
			<nav>
				<ul className='flex-row'>
					<li className='mx-2'>
						<a data-testid='about' href='#about' onClick={() => handleClick('About')}>
							About me
						</a>
					</li>
					<li className={'mx-2'}>
						<span onClick={() => handleClick('Contact')}>Contact</span>
					</li>
					{categories.map(category => (
						<li className='mx-1' key={category.name}>
							<span
								onClick={() => {
									handleClick(category.name);
								}}>
								{capitalizeFirstLetter(category.name)}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default List;
