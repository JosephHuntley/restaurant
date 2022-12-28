import styles from '../../styles';

type props = {
	img: string;
	rating: number;
	message: string;
	name: string;
	title: string;
};

function Card({ img, rating: rating, message, name, title }: props) {
	return (
		<div className='bg-[#F3F4F4] opacity-100 w-[639px] h-[391px] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm flex flex-col z-90 relative items-center'>
			<div>
				<img
					className='relative top-[-50px] w-[109px] h-[109px]'
					src={img}
					alt='User Image'
				/>
				<div className='relative top-[-45px]'>
					<span className={`${1 <= rating ? 'star' : 'hidden'}`}>&#9733;</span>
					<span className={`${2 <= rating ? 'star' : 'hidden'}`}>&#9733;</span>
					<span className={`${3 <= rating ? 'star' : 'hidden'}`}>&#9733;</span>
					<span className={`${4 <= rating ? 'star' : 'hidden'}`}>&#9733;</span>
					<span className={`${5 <= rating ? 'star' : 'hidden'}`}>&#9733;</span>
				</div>
			</div>
			<div className='w-[383px] flex flex-col items-center '>
				<p className={`${styles.paragraph} `}>{message}</p>
				<div className='py-10'>
					<p className='text-[16px] font-semibold leading-[29px] font-inter text-center text-secondary'>
						{name}
					</p>
					<p className='text-[15px] font-normal leading-[29px] font-inter text-center text-[#5C6574]'>
						{title}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
