import { ReactComponent as Create } from './create.svg'
import './create_video_button.css'
import React from 'react';

function Create_video_button({onClick}) {
 
  return (
      <button class="create-btn" onClick={onClick}><Create /></button>
  );
}
export default Create_video_button;

