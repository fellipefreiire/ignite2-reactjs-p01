import { AvatarProps } from '../../@types/avatar';
import styles from './Avatar.module.css';

export function Avatar({
	hasBorder = true,
	...rest
}: AvatarProps) {
	return (
		<img
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
			{...rest}
		/>
	);
}
