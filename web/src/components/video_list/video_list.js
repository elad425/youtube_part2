import './video_list.css';
import Video from '../video_card/video_card';
import Videos from '../../data/video_data.json'
import { useState } from 'react';
function App() {
  const [videoList,setVideoList]=useState(Videos)
//   const addArticle =()=>{
//     const article ={
//       "id":3,
//       "title": "omggggggg",
//       "author" :"obama",
//       "category" :"donno",
//       "publication_date":"2000000-01-01"
//<button onClick={addArticle}>Add</button>

//     }
  
  return (
   <div className='videos-container-grid'>
    {
    videoList.map((video) =>
      <Video {...video}/>
    )
    }
  </div>
    
  );
}

export default App;
