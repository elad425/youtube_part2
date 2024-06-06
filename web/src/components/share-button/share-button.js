import './share-button.css'

import { ReactComponent as Share_icon } from './share-icon.svg'

function Share_button( ) {

  
    return (
        
                <div class="dropdown">
                    <button className='share-btn btn btn-outline-primary under-btn dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"><Share_icon />share</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Whatsapp</a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="#">Facebook</a></li>
                        <li><hr class="dropdown-divider"></hr></li>
                        <li><a class="dropdown-item" href="#">Instagram</a></li>
                    </ul>
                </div>
           
    );
}
export default Share_button