import React, {useState} from 'react';
import './App.css';
import Post from './Post';
function App() {

  const [posts, setPosts] = useState([
    {
      username: "Mervio",
      caption:"Im hot",
      imageUrl:"https://rollingstone.uol.com.br/media/_versions/hoteoreia-fotodivulgacao_widelg.jpg"
    },
    {
      username: "Mervio",
      caption:"Im sad",
      imageUrl:"https://pbs.twimg.com/profile_images/1270188337505107969/oQ8_VRLJ_400x400.jpg"
    },
    {
      username: "Mervio",
      caption:"Im skinny",
      imageUrl:"https://moda.lunender.com/calcas/calca-jeans-com-elastano-jeans-medio-35825-003336-l1.jpg"
    }
  ]);

  return (
    
    <div className="app">
      <div className="app__header">
      <img 
        className="app__headerImage" 
        src="http://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
        alt=""
      />
      </div>

      {posts.map(post =>(
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
      ))
      }
  
      
    </div>
  );
}

export default App;
