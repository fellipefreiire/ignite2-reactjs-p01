import {Comment} from './../components/Comment';
import '../global.css';

export default {
	title: 'Comment',
	component: Comment,
};

const Template = args => <Comment {...args} />;

export const FirstStory = {
	args: {
		//👇 The args you need here will depend on your component
	},
};
