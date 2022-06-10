import {Avatar} from './../components/Avatar';
import '../global.css';

export default {
	title: 'Avatar',
	component: Avatar,
};

const Template = args => <Avatar {...args} />;

export const WithBorder = {
	args: {
		src: 'http://github.com/fellipefreiire.png',
		hasBorder: true,
	},
};

export const WithoutBorder = {
	args: {
		src: 'http://github.com/fellipefreiire.png',
		hasBorder: false,
	},
};
