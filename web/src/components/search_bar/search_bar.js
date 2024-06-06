import { ReactComponent as Search_icon } from './search_icon.svg'
import './search_bar.css'
function Search_bar() {

    return (
        <div className="search_bar">
            <form>
                <div className="search">
                    <input className="search_input" type="search" placeholder="Search"></input>
                    <span className="material-symbols-outlined search_icon">search</span>
                </div>
            </form>
        </div>
    );


} export default Search_bar;