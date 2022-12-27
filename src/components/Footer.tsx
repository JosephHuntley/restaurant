import { logo } from '../assets';
import styles from '../styles';
import { hours, footerNav } from '../constants';
import Socials from './reusable/Socials';

function Footer() {
	return (
		<footer className='py-32 flex flex-col px-32 '>
			<div className='h-0'></div>
			<div className='flex flex-row justify-between'>
				<div className='flex flex-col'>
					<div className='flex items-end'>
						<img
							src={logo}
							alt='Logo'
						/>
						<p className='font-bold pl-[12px] pt-[28px] text-xl'>restaurant</p>
					</div>
					<p
						className={`${styles.paragraph} max-w-[408px] text-[16px] leading-[29px] mt-5`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore.{' '}
						<a
							href=''
							className='underline'>
							Learn more
						</a>
					</p>

					<h6 className={`${styles.heading6} mt-6`}>Open Hours</h6>
					<div className='flex flex-row justify-between'>
						{hours.map(({ id, day, hours }, index) => (
							<div
								key={id}
								className={`mt-6  ${
									index === hours.length - 1 ? 'mr-0' : 'mr'
								}`}>
								<p className={`${styles.paragraph}`}>{day}</p>
								<p className={`${styles.paragraph}`}>{hours}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-row flex-wrap'>
					{footerNav.map(({ id, section, content }, index) => (
						<div
							key={id}
							className={`${index === footerNav.length - 1 ? 'mr-0' : 'mr-6'}`}>
							<h6 className={`${styles.heading6}`}>{section}</h6>
							<ul>
								{content.map(({ id, title, link }, index) => (
									<li
										key={id}
										className={`${styles.links} mt-4`}>
										<a href={link}>{title}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className=''>
					<h6 className={`${styles.heading6}`}>FOLLOW US</h6>
					<Socials />
				</div>
			</div>
			<div className=''>
				<div className='width-full border-[0.5px] border-secondary/10 border-solid mt-6'></div>
				<div className='mt-8 flex justify-between'>
					<div>
						<p className={`${styles.paragraph} text-[16px] `}>
							&copy; 2022 Restaurant. All Rights Reserved.
						</p>
					</div>
					<div className='flex justify-between'>
						<a
							href=''
							className={`${styles.links} mr-6`}>
							Terms of Service
						</a>
						<a
							href=''
							className={`${styles.links}`}>
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
