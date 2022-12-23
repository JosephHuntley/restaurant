import { Restaurant, TopLeft, TopRight, BottomRight, Dish } from '../assets';
import Button from './Button';
import Socials from './Socials';

function Hero() {
	return (
		<header
			id='home'
			className='md:flex-row flex-col flex  md:py-16 py-6 md:pt-[225px] md:px-[125px] justify-center items-start'>
			{/*=========== Left Side ===============*/}
			<div className='flex-1 flex-col xl:px-0 md:pr-16 mt-[100px]'>
				<h1 className='font-davidLibre font-bold md:text-[70px] md:leading-[72px] max-w-[510px]'>
					We provide the best food for you
				</h1>
				<p className='pt-16 font-normal font-davidLibre text-grey text-base leading-[29px] max-w-[376px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='md:py-10 flex md:flex-row flex-col'>
					<Button styles='text-[20px] mr-8 max-w-[120px] max-h-[54px]'>
						Menu
					</Button>
					<Button styles='bg-primary text-[20px] max-w-[167px] max-h-[54px] '>
						Book a table
					</Button>
				</div>
				<div className='pt-12 flex flex-row'>
					<Socials />
					<div className='border-[1px] border-solid border-black opacity-[.15] w-[143px] h-[0px] self-center mx-5' />
				</div>
			</div>

			{/*=========== Right Side ===============*/}
			<div className='flex-1 flex md:my-0 my-10 relative justify-center items-center'>
				<img
					className='z-10 w-[516px] h-[712px] '
					src={Restaurant}
					alt='Dining Room'
				/>
				<img
					className='z-0 top-[-75px] left-[-150px] absolute'
					src={TopLeft}
					alt='Leaf Artwork'
				/>
				<img
					className='z-0 top-[-115px] right-[-100px] absolute'
					src={TopRight}
					alt='Leaf Artwork'
				/>
				<img
					className='z-20 bottom-[10px] left-[-200px]  absolute'
					src={Dish}
					alt='Dish'
				/>
				<img
					className='z-0 bottom-[10px] right-[-140px] absolute '
					src={BottomRight}
					alt='Leaf Artwork'
				/>
			</div>
		</header>
	);
}

export default Hero;
