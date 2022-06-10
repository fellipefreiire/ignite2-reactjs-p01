import { ThumbsUp, Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react"

import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'publish' | 'delete' | 'like',
  likeCount?: number
  onLikeClick?: () => void
}

export function Button({ children, variant, likeCount, onLikeClick, ...rest }: ButtonProps) {

  return (
    <>
      {variant === 'publish' && (
        <button
          className={styles.publishButton}
          {...rest}
        >
          Publicar
        </button>
      )}

      {variant === 'delete' && (
        <button
          className={styles.deleteButton}
          {...rest}
        >
          <Trash size={24} />
        </button>
      )}

      {variant === 'like' && (
        <button className={styles.likeButton} onClick={onLikeClick}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button>
      )}
    </>
  )
}