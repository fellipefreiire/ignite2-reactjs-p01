import {Header} from './components/Header';
import {Sidebar} from './components/Sidebar';
import {Post} from './components/Post';

import './global.css';
import styles from './App.module.css';

import {posts} from './static/posts';

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</>
	);
}

export default App;
