import { Avatar } from '../avatar/Avatar';

import { Comment } from '../comment/Comment';

import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://avatars.githubusercontent.com/u/86542133?v=4' />
                    <div className={styles.authorInfo}>
                        <strong>Bruna Paes</strong>
                        <span>React and React Native Developer</span>
                    </div>
                </div>
                <time title='5 de Janeiro às 13:20h' dateTime='2022-01-15'>
                    Publicado há 1h
                </time>
            </header>
            <div className={styles.content}>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro molestias autem odio nam corporis sit ab at nihil temporibus. Dolor minima earum voluptatem recusandae corporis, dolores aliquid placeat accusantium consectetur.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur earum amet est voluptatem molestiae obcaecati impedit ipsum perferendis. Esse debitis nihil totam nesciunt beatae veniam voluptatibus sunt veritatis eveniet?
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime eligendi laborum, illo inventore ab aliquid consectetur porro molestias voluptas iure officia accusantium consequatur corporis perspiciatis optio. Earum officia vel beatae.
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>
                    Deixe seu feedback!
                </strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}
