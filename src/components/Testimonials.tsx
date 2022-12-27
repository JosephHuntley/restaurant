import styles from '../styles';
import { pan } from '../assets';

function Testimonials() {
	return (
		<section className='flex flex-col justify-center bg-secondary/5 py-24 h-[3000px] '>
			<div className='flex flex-col justify-center '>
				<div className='h-0'>
					<img
						className='w-[1512px] h-[1289px] relative top-[-60px] left-[-475px]'
						src={pan}
						alt='Frying Pan'
					/>
				</div>
				<h1
					className={`${styles.heading} text-[60px] leading-[65px] text-center`}>
					Our Happy Customer
				</h1>
				<p
					className={`${styles.paragraph} max-w-[376px] text-center self-center mt-10`}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt{' '}
				</p>
			</div>
			<div className=''></div>
		</section>
	);
}

export default Testimonials;
