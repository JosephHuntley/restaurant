import Button from './reusable/Button';
import { navLinks } from '../constants';
import { logo, circleText } from '../assets';

import NavMenu from './NavMenu';

function Navbar() {
	return (
		<nav className='w-full flex md:px-[180px] px-6 sm:pt-[56px] pt-6 justify-between navbar'>
			<div className='flex items-end'>
				<img
					src={logo}
					alt='Logo'
				/>
				<p className='font-bold pl-[12px] pt-[28px] text-xl'>restaurant</p>
			</div>
			<ul className=' md:flex hidden items-end flex-row '>
				{navLinks.map((nav: { title: string; id: string }, index: number) => (
					<li
						key={nav.id}
						className={`font-normal cursor font-size-[16px] leading-7 font-inter text-dimWhite  ${
							index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
						}`}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<Button styles='bg-primary md:flex hidden leading-7 max-w-[167px]'>
				Book a table
			</Button>
			<NavMenu />

			{/* Rounded lines surrounding logo (Eclipses) */}
			<div className='left-[-548px] top-[-452px] circle rounded-full md:flex ' />
			<div className='left-[-604px] top-[-353.84px] circle rounded-full rotate-[17.41deg]' />
			<div className='left-[-450px] top-[-428px] circle rounded-full' />

			{/* Text Circle*/}
			<img
				src={circleText}
				alt='Foods Delicious'
				className='absolute md:flex hidden w-[104px] h-[104px] top-[275px] left-[119px]'
			/>
		</nav>
	);
}

export default Navbar;
