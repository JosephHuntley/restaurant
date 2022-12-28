// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '../../styles';
import { pan } from '../../assets';
import Card from './Card';
import { testimonials } from '../../constants';

function Testimonials() {
	return (
		<section className='flex flex-col justify-center bg-secondary/5 pt-24 h-[1289px] items-center'>
			<div className='flex flex-col justify-center '>
				<div className='h-0'>
					<img
						className='w-[1512px] h-[1289px] relative top-[-60px] left-[-475px] z-0'
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

			<Swiper
				modules={[Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				autoHeight={true}
				loop={true}
				centeredSlides={true}>
				{testimonials.map(({ id, img, rating, message, name, title }) => (
					<SwiperSlide key={id}>
						<Card
							img={img}
							rating={rating}
							message={message}
							name={name}
							title={title}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}

export default Testimonials;
