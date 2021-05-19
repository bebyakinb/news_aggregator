//import React from 'react';
import Post from './components/Post';
import posts from './posts.json';

function App() {
  return (
    <div>
			{
				posts.map(({title, description, image}, key) => (
					<Post 
						key = {key}
						title = {title}
						description = {description}
						image = {image}
					/>
				))}
		</div>
  );
}

export default App;
