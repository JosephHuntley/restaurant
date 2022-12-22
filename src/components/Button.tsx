import { ReactNode } from 'react';

type props = {
	styles?: string;
	children?: ReactNode;
};
const Button = ({ styles, children }: props) => {
	{
		/* Button Responsiveness on smaller devices */
	}
	return (
		<button
			type='button'
			className={`py-4 px-6  text-white rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm md:w-[167px] h-[64px] justify-center ${styles}`}
			style={{ boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)' }}>
			{children}
		</button>
	);
};

export default Button;
