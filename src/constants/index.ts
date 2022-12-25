import { dish1, dish2, dish3, dish4, price } from '../assets';

export const navLinks: { id: string; title: string }[] = [
	{
		id: 'menu',
		title: 'Menu',
	},
	{
		id: 'events',
		title: 'Events',
	},
	{
		id: 'gallery',
		title: 'Gallery',
	},
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];
export const dishes: {
	id: number;
	title: string;
	desc: string;
	img: string;
	price: string;
}[] = [
	{
		id: 1,
		title: 'Lumpia with Sauce',
		desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
		img: dish1,
		price: price,
	},
	{
		id: 2,
		title: 'Fish and Veggie',
		desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
		img: dish2,
		price: price,
	},
	{
		id: 3,
		title: 'Tofu Chili',
		desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
		img: dish3,
		price: price,
	},
	{
		id: 4,
		title: 'Egg and Cucumber',
		desc: 'Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor ',
		img: dish4,
		price: price,
	},
];
