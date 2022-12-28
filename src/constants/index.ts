import {
	dish1,
	dish2,
	dish3,
	dish4,
	price,
	testimonial1,
	testimonial2,
} from '../assets';

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

export const chefFacts: { id: number; message: string }[] = [
	{ id: 1, message: 'Lorem ipsum dolor sit amet, consectetur' },

	{ id: 2, message: 'Lorem ipsum dolor sit amet, consectetur' },

	{ id: 3, message: 'Lorem ipsum dolor sit amet, consectetur' },

	{ id: 4, message: 'Lorem ipsum dolor sit amet, consectetur' },

	{ id: 5, message: 'Lorem ipsum dolor sit amet, consectetur' },

	{ id: 6, message: 'Lorem ipsum dolor sit amet, consectetur' },
];

export const hours: { id: number; day: string; hours: string }[] = [
	{ id: 1, day: 'Monday-Friday', hours: '8:00 am to 9:00 pm' },
	{ id: 2, day: 'Saturday', hours: '8:00 am to 11:00 pm' },
	{ id: 3, day: 'Sunday', hours: 'CLOSED' },
];

export const footerNav: {
	id: number;
	section: string;
	content: { id: number; title: string; link: string }[];
}[] = [
	{
		id: 1,
		section: 'Navigation',
		content: [
			{ id: 1, title: 'Menu', link: '/menu' },
			{ id: 2, title: 'About Us', link: '#about' },
			{ id: 3, title: 'Contact Us', link: '#Contact' },
			{ id: 4, title: 'Main Dishes', link: '#about' },
		],
	},
	{
		id: 2,
		section: 'Dishes',
		content: [
			{ id: 1, title: 'Fish & Veggies', link: '/menu/#fish_veggies' },
			{ id: 2, title: 'Tofu Chili', link: '/menu/#tofu_chili' },
			{ id: 3, title: 'Egg & Cucumber', link: '/menu/#egg_cucumber' },
			{ id: 4, title: 'Lumpia w/sauce', link: '/menu/#lumpia_wsauce' },
		],
	},
];

export const testimonials: {
	id: number;
	img: string;
	rating: number;
	message: string;
	name: string;
	title: string;
}[] = [
	{
		id: 1,
		img: testimonial1,
		rating: 3,
		message:
			'Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ',
		name: 'Ama Ampomah',
		title: 'CEO & Founder Inc.',
	},
	{
		id: 2,
		img: testimonial2,
		rating: 4,
		message:
			'Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper ',
		name: 'Ama Ampomah',
		title: 'CEO & Founder Inc.',
	},
];
