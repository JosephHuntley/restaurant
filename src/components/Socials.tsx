import { Facebook, Twitter, Instagram } from '../assets';

type props = {
	styles?: string;
};

function Socials({ styles }: props) {
	const socials: string[] = [Facebook, Twitter, Instagram];
	return (
		<div className={`flex-row flex ${styles}`}>
			{socials.map((social, index) => (
				<div
					key={social}
					className={`border-secondary border-[1px] border-solid rounded-full w-[45px] h-[45px] cursor-pointer  ${
						index === socials.length - 1 ? 'mr-0' : 'mr-3'
					}`}>
					<img
						className={` m-1.5 w-[29px] h-[29px]`}
						src={social}
						alt=''
					/>
				</div>
			))}
		</div>
	);
}

export default Socials;
