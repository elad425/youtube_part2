import { ReactComponent as Burger_menu } from './burger_menu.svg'
import './burger_menu.css'

function burger_menu({ toggleSidebar }) {
  return (
    <div className="button_div">
      <button className="burger_menu" onClick={toggleSidebar}>
        <Burger_menu />
      </button>
    </div>
  );
}
export default burger_menu;

