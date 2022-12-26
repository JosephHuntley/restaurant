import { dishes } from '../../constants/index';
import DishCard from './DishCard';

function Dishes() {
	return (
		<div className='flex flex-row flex-wrap justify-center'>
			{dishes.map(({ id, title, desc, img, price }, index) => (
				<DishCard
					key={id}
					title={title}
					desc={desc}
					index={index === dishes.length - 1}
					img={img}
					price={price}
				/>
			))}
		</div>
	);
}
export default Dishes;
