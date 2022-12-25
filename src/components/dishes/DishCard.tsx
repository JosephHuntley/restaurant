type props = {
	title: string;
	desc: string;
	index: boolean;
	img: string;
	price: string;
};

import styles from '../../styles';

function DishCard({ title, desc, index, img, price }: props) {
	return (
		<div
			className={`mt-32 w-[265px] h-[309px] border-2 border-white border-solid rounded-bl-xl rounded-tr-xl rounded-tl-[2rem] rounded-br-[2rem]  rounded-tr-md rounded-bl-md  flex flex-col text-center hover:bg-white z-20 ${
				index ? 'mr-0' : 'mr-7'
			}`}>
			<div className='top-[-100px] left-[10px] relative'>
				<img
					className='max-w-[207px] max-h-[207px] z-10'
					src={img}
					alt={title}
				/>
				<img
					src={price}
					alt='Price'
					className='w-[100px] h-[100px] relative top-[-200px] left-[130px] z-20'
				/>
			</div>
			<h6 className={`font-bold text-xl relative top-[-175px] `}>{title}</h6>
			<p
				className={`relative top-[-150px] max-w-[225px] self-center ${styles.paragraph}`}>
				{desc}
			</p>
		</div>
	);
}

export default DishCard;
