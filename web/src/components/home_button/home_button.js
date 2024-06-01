import { ReactComponent as Home_button_icon} from './home_button.svg'
import './home_button.css'
function home_button() {
    
    return (
        <div className="home_button_div">
                  <button class ="home_button"> <Home_button_icon /> youtube </button>
        </div>
      );

    
}
export default home_button;