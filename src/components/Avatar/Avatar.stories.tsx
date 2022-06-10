import { ArgsTable } from '@storybook/addon-docs';
import { AvatarProps } from '../../@types/avatar';
import { Avatar } from './';
import { Story } from '@storybook/react';

// import '../../global.css';

export default {
	title: 'Avatar',
	component: Avatar,
	argTypes: {
		hasBorder: {
			control: {
				defaultValue: true,
				values: [true, false]
			}
		}
	}
};

export const WithBorder: Story<AvatarProps> = ({ hasBorder }) => {
	return (
		<Avatar />
	)
}

export const WithoutBorder: Story<AvatarProps> = ({ hasBorder }) => {
	return (
		<Avatar hasBorder={hasBorder} />
	)
}

// const Template = args => <Avatar {...args} />;

// {/* <ArgsTable of={Avatar} />

// export const WithBorder = {
// 	args: {
// 		src: 'http://github.com/fellipefreiire.png',
// 		hasBorder: true,
// 	},
// };

// export const WithoutBorder = {
// 	args: {
// 		src: 'http://github.com/fellipefreiire.png',
// 		hasBorder: false,
// 	},
// }; */}
