import { ReactComponent as Search_icon} from './search_icon.svg'
import './search_bar.css'
function search_bar() {
    
    return (
        <div className="search_bar">
           
            <form>
                <div class="search">
                    <span class="search_icon "></span>
                    <Search_icon  />
                    <input class="search_input" type="search" placeholder="search"></input>
                </div>
            </form>
        </div>
      );

    
}export default search_bar;