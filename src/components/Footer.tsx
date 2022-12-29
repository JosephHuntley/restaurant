import { logo, cta_bg, pan } from '../assets';
import styles from '../styles';
import { hours, footerNav } from '../constants';
import Socials from './reusable/Socials';

function Footer() {
	return (
		<footer className='pt-52 flex flex-col md:px-32 pb-[50px] bg-secondary/10 '>
			<div className='h-0 self-center'>
				<div
					className='max-h-[407px] lg:min-h-[407px] md:min-h-[307px] min-h-[320px] max-w-[1151px] lg:min-w-[1000px] sm:min-w-[700px] min-w-[200px]   relative md:top-[-450px] top-[-450px] rounded-3xl flex flex-col justify-center items-center  '
					id='cta'>
					<h2 className='text-white font-davidLibre md:text-[50px] text-[30px] leading-[58px] font-bold text-center md:max-w-[804px] max-w-[400px]'>
						Get a Promo Code by <br className='md:flex hidden' />
						Subscribing to our Newsletter
					</h2>
					<div className=' sm:mt-10 mt-3 flex items-center'>
						<input
							className='md:w-[667px] w-[333px] h-[80px] rounded-2xl bg-white p-3 font-inter text-[18px] font-normal leading-22px'
							type='text'
							placeholder='Enter Your Email'
						/>
						<div className='w-0'>
							<button className='text-white bg-primary rounded-lg md:w-[150px] w-85px h-[57px] font-inter font-semibold text-[16px] leading-[58px] relative md:left-[-165px] left-[-90px]'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='flex md:flex-row flex-col  md:justify-between '>
				<div className='flex flex-col  '>
					<div className=' '>
						<div className='flex flex-row  items-end md:justify-start justify-center'>
							<img
								src={logo}
								alt='Logo'
							/>
							<p className='font-bold pl-[12px] pt-[28px] text-xl'>
								restaurant
							</p>
						</div>
						<p
							className={`${styles.paragraph} md:max-w-[408px] text-[16px] leading-[29px] mt-5 md:text-start text-center `}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore.{' '}
							<a
								href=''
								className='underline'>
								Learn more
							</a>
						</p>
					</div>

					<h6 className={`${styles.heading6} mt-6 md:text-start text-center`}>
						Open Hours
					</h6>
					<div className='flex md:flex-row flex-col md:justify-between items-center'>
						{hours.map(({ id, day, hours }, index) => (
							<div
								key={id}
								className={`mt-6  ${
									index === hours.length - 1 ? 'mr-0' : 'mr'
								}`}>
								<p className={`${styles.paragraph} md:text-start text-center`}>
									{day}
								</p>
								<p className={`${styles.paragraph}`}>{hours}</p>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-row flex-wrap justify-around md:mt-0 mt-10'>
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
				<div className='flex flex-col items-center'>
					<h6 className={`${styles.heading6} md:text-start text-center`}>
						FOLLOW US
					</h6>
					<Socials />
				</div>
			</div>
			<div className=''>
				<div className='width-full border-[0.5px] border-secondary/10 border-solid mt-6'></div>
				<div className='mt-8 flex md:flex-row flex-col md:justify-between items-center'>
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
