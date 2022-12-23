import { ReactNode } from 'react';

type props = {
	styles?: string;
	children?: ReactNode;
};
const Button = ({ styles, children }: props) => {
	return (
		<button
			type='button'
			className={` font-davidLibre font-medium font-size-[16px] py-4 px-8 text-white bg-black rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm ${styles}`}
			style={{ boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.15)' }}>
			{children}
		</button>
	);
};

export default Button;
