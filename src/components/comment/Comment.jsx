import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../avatar/Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://github.com/brvnapaes.png' alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>DBruna Paes</strong>
              <time title='02 de Fevereiro às 08:13h' dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque similique, praesentium nisi perferendis excepturi ut quae vero corporis explicabo mollitia! Tenetur deserunt quos quas totam earum quisquam suscipit sint!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}