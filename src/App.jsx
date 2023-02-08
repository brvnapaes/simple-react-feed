import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Post } from './components/post/Post';
import './global.css';

import styles from './App.module.css';


export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/86542133?v=4',
        name: 'Bruna Paes',
        role: 'React and React Native Developer',
      },
      content: [       
        { type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro molestias autem odio nam corporis sit ab at nihil temporibus. Dolor minima earum voluptatem recusandae corporis, dolores aliquid placeat accusantium consectetur.', },
        { type : 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur earum amet est voluptatem molestiae obcaecati impedit ipsum perferendis. Esse debitis nihil totam nesciunt beatae veniam voluptatibus sunt veritatis eveniet?' },
        { type: 'link', content: 'https://github.com/brvnapaes'},
      ],
      publishedAt: new Date('2023-02-03 19:20:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/89756031?v=4',
        name: 'Valter Junior',
        role: 'Java Developer',
      },
      content: [
        { type: 'link', content: 'https://github.com/valter-jr'},       
        { type : 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam pariatur nostrum nam facere quae laborum? In itaque incidunt nulla tempora repellendus nam quam alias necessitatibus, eaque iure eligendi unde.' },
      ],
      publishedAt: new Date('2023-02-04 14:15:30'),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return(
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}


