import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		onDeleteComment(content);
	}

	function handleLikeComment() {
		setLikeCount(state => state + 1);
	}

	return (
		<div className={styles.comment}>
			<Avatar
				hasBorder={false}
				src='https://github.com/fellipefreiire.png'
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Felipe Freire</strong>
							<time
								title='09 de Junho às 15:41h'
								dateTime='2022-06-09 15:41:30'
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button onClick={handleDeleteComment} title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
				</div>

				<footer>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
