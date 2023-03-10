import { useState } from 'react';

import { navLinks } from '../constants';
import Hamburger from 'hamburger-react';
import Button from './reusable/Button';

function NavMenu() {
	const [toggleMenu, setToggleMenu] = useState(false);

	const handleToggle = () => {
		setToggleMenu((prevState) => !prevState);
	};
	return (
		<div className='md:hidden flex flex-1 justify-end items-center z-10 '>
			<Hamburger
				toggled={toggleMenu}
				toggle={setToggleMenu}
			/>
			<div
				className={`${
					toggleMenu ? 'flex' : 'hidden'
				} p-6 right-0 top-24 absolute mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-secondary text-white flex-col`}>
				<ul className='list-none flex justify-end items-start flex-1 flex-col '>
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={` font-davidLibre font-normal cursor-pointer text-[20px] ${
								index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
							}`}>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
				<Button styles='bg-primary mt-5 leading-7'>Book a table</Button>
			</div>
		</div>
	);
}

export default NavMenu;
