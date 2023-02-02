import { PencilLine } from 'phosphor-react';

import { Avatar } from '../avatar/Avatar';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />
            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/86542133?v=4'/>
                <strong>Bruna Paes</strong>
                <span>React and React Native developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}