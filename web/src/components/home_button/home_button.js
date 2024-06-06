import { ReactComponent as Home_button_icon} from './home_button.svg'

import './home_button.css'
function Home_button({returnToHome}) {
    const returnHome =()=> {
      returnToHome();
    }
    return (
        <div className="home_button_div" onClick={returnHome}>
                  <button className ="home_button"> <Home_button_icon /> youtube </button>
        </div>
      );

    
}
export default Home_button;