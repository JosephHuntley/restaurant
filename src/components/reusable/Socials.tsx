import { Facebook, Twitter, Instagram } from '../../assets';

type props = {
	styles?: string;
};

function Socials({ styles }: props) {
	const socials: string[] = [Facebook, Twitter, Instagram];
	return (
		<div className={`flex-row flex `}>
			{socials.map((social, index) => (
				<div
					key={social}
					className={` border-secondary border-[1px] border-solid rounded-full w-[45px] h-[45px] cursor-pointer w-[38px] h-[38px] p-1.5 ${
						index === socials.length - 1 ? 'mr-0' : 'mr-3'
					}`}>
					<img
						className={` h-[25px] w-[25px]`}
						src={social}
						alt=''
					/>
				</div>
			))}
		</div>
	);
}

export default Socials;
