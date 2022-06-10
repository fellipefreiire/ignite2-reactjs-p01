import {Header} from './../components/Header';
import '../global.css';

export default {
	title: 'Header',
	component: Header,
};

const Template = args => <Header {...args} />;

export const FirstStory = {
	args: {
		//👇 The args you need here will depend on your component
	},
};
