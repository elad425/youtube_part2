import { ReactComponent as Person_circle} from './person_circle.svg'
import './sign_in_button.css'

function sign_in_button() {
return (
    <div class ="button_div">
      <button class="sign_in_button"><Person_circle />sign in</button>
    </div>
     
    );
}
export default sign_in_button;

