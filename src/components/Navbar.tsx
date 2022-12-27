import Button from './reusable/Button';
import { navLinks } from '../constants';
import { logo, circleText } from '../assets';

import NavMenu from './NavMenu';
import styles from '../styles';

function Navbar() {
	return (
		<nav className=''>
			{/* Rounded lines surrounding logo (Eclipses) */}
			<div className='h-0 w-0 '>
				<div className='left-[-600px] top-[-500px] circle rounded-full relative' />
				<div className='left-[-550px] top-[-1500px] circle rounded-full relative rotate-12' />
				<div className='left-[-500px] top-[-2350px] circle rounded-full relative' />
				{/* Text Circle*/}
				<img
					src={circleText}
					alt='Foods Delicious'
					className=' w-[104px] h-[104px] top-[250px] left-[75px] absolute md:inline hidden'
				/>
			</div>

			<div className='md:justify-between flex w-full  md:px-[100px] px-6 md:pt-[56px] pt-6'>
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
							className={` ${styles.links}  ${
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
			</div>
		</nav>
	);
}

export default Navbar;
