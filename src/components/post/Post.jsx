import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';

import { useState } from 'react';

import { Avatar } from '../avatar/Avatar';

import { Comment } from '../comment/Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }){

    const [comments, setComments] = useState(['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateComment() {
        event.preventDefault();

        const newCommentText = event.target.comment.value;

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Digite um comentário!');
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link') {
                            return <p key={line.content}><a href={line.content}>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>
                    Deixe seu feedback!
                </strong>
                <textarea
                    name='comment' 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}
