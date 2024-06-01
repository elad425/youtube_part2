import './side_bar.css'
import { ReactComponent as Home_icon} from './icons/home.svg'
import { ReactComponent as Shorts_icon} from './icons/shorts.svg'
import { ReactComponent as Subsctriptions_icon} from './icons/subscriptions.svg'
import { ReactComponent as You_icon} from './icons/you.svg'
import { ReactComponent as History_icon} from './icons/history.svg'

function side_bar() {

    return (
        <div className="side_bar">
                <lu class="list">
                    <li>
                       <button class="side_bar_button"><Home_icon /> Home</button> 
                    </li>
                    <li>
                       <button class="side_bar_button"><Shorts_icon /> Shorts</button> 
                    </li>
                    <li>
                       <button class="side_bar_button"><Subsctriptions_icon /> Subscriptions</button> 
                    </li>
                    <li>
                       <button class="side_bar_button"><You_icon /> You</button> 
                    </li>
                    <li>
                       <button class="side_bar_button"><History_icon /> History</button> 
                    </li>
                </lu>
        </div>
    );


}
export default side_bar;