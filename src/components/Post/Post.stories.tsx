import { Post } from './';
import '../../global.css';

import { posts } from '../../static/posts';

export default {
	title: 'Post',
	component: Post,
};

// const Template = args => <Post {...args} />;

export const FirstStory = {
	args: {
		author: posts[0].author,
		content: posts[0].content,
		publishedAt: posts[0].publishedAt,
	},
};
