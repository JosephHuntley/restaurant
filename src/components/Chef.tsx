import styles from '../styles';
import Button from './reusable/Button';
import { chef, checkMark, garlic, garlicClove } from '../assets';
import { chefFacts } from '../constants';

function Chef() {
	return (
		<section className='flex sm:flex-row flex-col py-24 mb-44 justify-center'>
			<div className='flex flex-col sm:mt-32 sm:mr-16t'>
				<div className='flex flex-row h-0'>
					<img
						className={`${styles.artWork} w-[190px] h-[172px] relative top-[-75px] left-[-250px] sm:flex hidden`}
						src={garlicClove}
						alt='Garlic Clove'
					/>
					<img
						className='w-[290px] h-[303px] relative sm:top-[-160px] top-[-100px] sm:left-[-240px] left-[150px] '
						src={garlic}
						alt='Garlic'
					/>
				</div>
				<h1
					className={` ${styles.heading} text-[60px] leading-[65px] md:max-w-[480px] font-bold md:text-start text-center`}>
					Our Expert Chefs
				</h1>
				<p
					className={`${styles.paragraph} mt-8 md:max-w-[376px] max-w-[500px] md:text-start text-center md:self-start self-center`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div>
					<div className='flex justify-center'>
						<ul className='columns-2 my-5 '>
							{chefFacts.map(({ id, message }) => (
								<li key={id}>
									<p
										className={`${styles.paragraph} max-w-[258px] text-start mt-3 flex`}>
										<span className='w-[24px] h-[24px] bg-primary rounded-full flex justify-center align-center p-1 mr-3'>
											<img
												className=''
												src={checkMark}
												alt='Check Mark'
											/>
										</span>
										{message}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='md:py-10 pt-8 flex flex-row md:self-start self-center'>
					<Button styles='bg-black mr-8 max-w-[120px] max-h-[54px]'>
						Menu
					</Button>
					<Button styles='bg-primary z-10 max-w-[167px] max-h-[54px]'>
						Book a table
					</Button>
				</div>
			</div>
			<div className='flex justify-center md:mt-0 mt-10'>
				<img
					className='w-[507px] h-[695px] '
					src={chef}
					alt='Chef'
				/>
			</div>
		</section>
	);
}

export default Chef;
