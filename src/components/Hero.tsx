import { Restaurant, TopLeft, TopRight, BottomRight, Dish } from '../assets';
import Button from './Button';
import Socials from './Socials';

function Hero() {
	return (
		<header
			id='home'
			className='md:flex-row flex-col flex py-3 md:pt-[225px] md:px-[125px] px-8 justify-center md:items-start items-center '>
			{/*=========== Left Side ===============*/}
			<div className='flex-1 flex-col xl:px-0 md:pr-16 md:mt-[100px] mt-16 '>
				<h1 className='font-davidLibre font-bold md:text-[70px] text-[50px] md:leading-[72px] max-w-[510px]'>
					We provide the best food for you
				</h1>
				<p className='md:pt-16 pt-6 font-normal font-davidLibre text-grey text-base leading-[29px] max-w-[376px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className='md:py-10 pt-8 flex flex-row '>
					<Button styles=' mr-8 max-w-[120px] max-h-[54px]'>Menu</Button>
					<Button styles='bg-primary z-10 max-w-[167px] max-h-[54px]'>
						Book a table
					</Button>
				</div>
				<div className='pt-12 flex flex-row'>
					<Socials />
					<div className='border-[1px] border-solid border-black opacity-[.15] w-[143px] h-[0px] self-center mx-5' />
				</div>
			</div>

			{/*=========== Right Side ===============*/}
			<div className='flex-1 flex  md:my-0 my-3 mt-32 relative justify-center items-center justify-items-center'>
				<img
					className='z-10 w-[516px] max-h-[712px] '
					src={Restaurant}
					alt='Dining Room'
				/>
				<img
					className=' z-0 top-[-75px] left-[-150px] absolute'
					src={TopLeft}
					alt='Leaf Artwork'
				/>
				<img
					className='z-0 top-[-115px] right-[-100px] absolute'
					src={TopRight}
					alt='Leaf Artwork'
				/>
				<img
					className=' z-20 md:bottom-[10px] bottom-[-125px] md:left-[-200px] left-[-150px] absolute'
					src={Dish}
					alt='Dish'
				/>
				<img
					className=' z-0 md:bottom-[10px] bottom-[-150px] md:rotate-0 rotate-90 right-[-140px] absolute '
					src={BottomRight}
					alt='Leaf Artwork'
				/>
			</div>
		</header>
	);
}

export default Hero;
