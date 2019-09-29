import imageA from '../assets/avatar_a.png';
import imageB from '../assets/avatar_b.png';
import imageC from '../assets/avatar_c.png';

export default {
	Zayn: {
		id: 'Zayn',
		image: imageA,
		desc: 'I love to code',
		interests: ['Web Development'],
		projects: [
			{
				title: 'Brand Website',
				time: new Date(2018, 9, 12),
				desc: 'This is to design a website for a brand. Publize it',
				link: 'http://zaynjarvis.com',
			},
			{
				title: '天际诚通',
				time: new Date(2017, 8, 12),
				desc: '本项目旨在建立一个虚拟的东西， 至于内容是什么， 我也不是很清楚',
				link: 'http://zaynjarvis.com',
			},
			{
				title: 'Reactiv Pinsaka',
				time: new Date(2017, 3, 2),
				desc: 'No one is gonna read this, so I just write some random words here',
				link: 'http://zaynjarvis.com',
			},
			{
				title: 'Проект Айсберг',
				time: new Date(2017, 10, 6),
				desc: 'Этот проект потрясающий, но больно в том, что этот человек не знает русского!',
				link: 'http://zaynjarvis.com',
			},
		],
		comments: [
			{
				message: "Zayn is the best coder I've ever seen in my life!",
				author: 'Ed Sheeran',
			},
		],
	},
	James: {
		id: 'James',
		desc: 'I am good',
		image: imageB,
		interests: ['Project Management'],
		projects: [
			{
				title: 'SenseVime PM',
				time: new Date(2018, 9, 12),
				desc: 'This is a product to manage a project team in SenseVime',
				link: 'http://zaynjarvis.com',
			},
			{
				title: 'Xperience',
				time: new Date(2017, 3, 2),
				desc: 'No one is gonna read this, so I just write some random words here',
				link: 'http://zaynjarvis.com',
			},
			{
				title: '伟毅科技',
				time: new Date(2017, 10, 6),
				desc: '管理一个科技团队',
				link: 'http://zaynjarvis.com',
			},
		],
		comments: [
			{
				message: 'James knows what he is doing.',
				author: 'Jeffrey Preston Bezos',
			},
		],
	},
	Kun: {
		id: 'Kun',
		image: imageC,
		desc: 'I am tall',
		interests: ['UI design'],
		projects: [
			{
				title: 'SG Vibe',
				time: new Date(2018, 9, 12),
				desc: 'Design the frontend of SG Vibe',
				link: 'http://zaynjarvis.com',
			},
		],
		comments: [],
	},
};
