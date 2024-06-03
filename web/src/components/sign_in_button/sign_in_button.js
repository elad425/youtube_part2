import { ReactComponent as Person_circle} from './person_circle.svg'
import './sign_in_button.css'
import {Link} from 'react-router-dom'

function sign_in_button() {
return (
    <div class ="button_div">
      <Link to="/login"><button class="sign_in_button"><Person_circle />sign in</button></Link>
    </div>
     
    );
}
export default sign_in_button;

