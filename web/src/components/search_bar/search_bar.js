import { ReactComponent as Search_icon } from './search_icon.svg'
import './search_bar.css'
function Search_bar() {

    return (
        <div className="search_bar">
            <form>
                <div class="search">
                    <input class="search_input" type="search" placeholder="Search"></input>
                    <span class="material-symbols-outlined search_icon">search</span>
                </div>
            </form>
        </div>
    );


} export default Search_bar;