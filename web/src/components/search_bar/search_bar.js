import { ReactComponent as Search_icon } from './search_icon.svg'
import React, { useRef } from 'react';
import './search_bar.css'
function Search_bar({doSearch}) {
    const searchBox = useRef(null);
    const search = function (){
        doSearch(searchBox.current.value)
    }
    return (
        <div className="search_bar">
            <form>
                <div className="search">
                    <input ref={searchBox} onKeyUp={search} className="search_input" type="search" placeholder="Search"></input>
                    <span className="material-symbols-outlined search_icon">search</span>
                </div>
            </form>
        </div>
    );


} export default Search_bar;