
import Home_button from '../components/home_button/home_button';
import Search_bar from '../components/search_bar/search_bar';
import Sign_in_button from '../components/sign_in_button/sign_in_button';
import Burger_menu from '../components/burger_menu/burger_menu';
import Side_bar from '../components/side_bar/side_bar';

import './home_screen.css'
function home_screen() {

  return (
    <div class="site_container">

      <div class="top_header">
        <div class="menu_and_button">
          <Burger_menu />
          <Home_button />
        </div>

        <Search_bar />
        <Sign_in_button />
      </div>

      <Side_bar />
    </div>
  );


} export default home_screen;