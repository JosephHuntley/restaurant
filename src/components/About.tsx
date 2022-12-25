import styles from '../styles';
import Dishes from './dishes/Dishes';
import Button from './reusable/Button';
import {
	TopRight,
	BottomRight,
	mainDish,
	onion,
	garlicClove,
	garlic,
	herbs,
	herbs2,
	leaf1,
	leaf2,
	leaf3,
	leaf4,
} from '../assets';

function About() {
	return (
		<section
			id='about'
			className='flex flex-col justify-center bg-dimWhite/[0.07] pb-64 mt-24 justify-center  text-center px-8 '>
			<div className=''>
				<div className='mt-16 flex flex-col justify center'>
					<h1 className={`md:text-[60px] leading-[65px] ${styles.heading} `}>
						Our Special Dishes
					</h1>
					<p
						className={`${styles.paragraph} place-self-center mt-5 max-w-[376px] `}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt
					</p>
					<img
						className={`${styles.artWork} max-h-[212px] max-w-[224px] absolute left-[278px] top-[1180px]`}
						src={TopRight}
						alt='Leaf Artwork'
					/>
					<img
						className={`${styles.artWork} max-h-[257px] max-w-[180px] absolute left-[945px] top-[1180px]`}
						src={BottomRight}
						alt='Leaf Artwork'
					/>
				</div>
				<Dishes />
				<div className='flex-row flex h-0'>
					<img
						src={onion}
						alt='Onion'
						className={`${styles.artWork} w-[99px] h-[102px] relative top-[-65px] left-[355px]`}
					/>
					<img
						src={herbs}
						alt='herbs'
						className={`${styles.artWork} w-[375px] h-[148px] relative top-[40px] left-[450px]`}
					/>
					<img
						src={garlicClove}
						alt='Garlic Clove'
						className={`${styles.artWork}-w-[90px] h-[81px] relative top-[-40px] left-[575px]`}
					/>
					<img
						src={garlic}
						alt='garlic'
						className={`${styles.artWork} w-[118px] h-[124px] relative top-[-70px] left-[625px]`}
					/>
				</div>
			</div>

			<div className='flex flex-row justify-center mt-36 '>
				<div className=' '>
					<div className='flex flex-row h-0'>
						<img
							src={leaf1}
							alt=''
							className={`z-10 w-[91px] h-[189px] relative top-[200px] left-[20px]`}
						/>
						<img
							src={leaf2}
							alt=''
							className={`z-10 w-[209px] h-[133px] relative top-[540px] left-[-20px]`}
						/>
						<img
							src={leaf3}
							alt=''
							className={`z-10 w-[194px] h-[129px] relative top-[85px] left-[275px]`}
						/>

						<img
							src={leaf4}
							alt=''
							className={`z-10 w-[96px] h-[178px] relative top-[450px] left-[-125px]`}
						/>
					</div>
					<img
						className='max-w-[719px] max-h-[667px] mr-24'
						src={mainDish}
						alt='Main Dish'
					/>
				</div>

				<div className=''>
					<img
						src={TopRight}
						alt='Leaf Artwork'
						className={`${styles.artWork} w-[224px] h-[212px] relative top-[100px] left-[-50px]`}
					/>
					<h1
						className={` ${styles.heading} text-[60px] leading-[65px] max-w-[480px] font-bold text-start`}>
						Welcome to Our Restaurant
					</h1>
					<p className={`${styles.paragraph} mt-8 max-w-[376px] text-start`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className='md:py-10 pt-8 flex flex-row '>
						<Button styles='bg-black mr-8 max-w-[120px] max-h-[54px]'>
							Menu
						</Button>
						<Button styles='bg-primary z-10 max-w-[167px] max-h-[54px]'>
							Book a table
						</Button>
					</div>
					<div className='flex flex-row h-0 mb-16'>
						<img
							src={herbs2}
							alt='Herbs'
							className={`${styles.artWork} w-[451px] h-[320px] relative top-[-250px] left-[250px]`}
						/>
						<img
							src={garlicClove}
							alt='garlic Clove'
							className={`${styles.artWork} w-[90px] h-[81px] relative top-[-110px] opacity-70 left-[-475px]`}
						/>
						<img
							src={garlicClove}
							alt='garlic clove'
							className={`${styles.artWork} w-[90px] h-[81px] relative top-[-10px] left-[-450px] opacity-100 rotate-90`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
