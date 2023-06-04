import SignOut from "../login/SignOut";
import '../../styles/menu.scss';

import $ from 'jquery'
import { useEffect } from "react";


export default function Menu() {

    


    useEffect(() => {
        let bar = $('.bar');
        bar.on("click", () => {
            bar.toggle('active');
        });
    }, [])



    return (
        <>
            <div class='menu'>
                <div class='hamburger'>
                    <span class='bar'></span>
                    <span class='bar'></span>
                    <span class='bar'></span>
                </div>

                <SignOut/>
                <div class='menuContainer'>
                    <p>Menu</p>
                    
                    <div>
                        <img src='/icons/house.png' alt='https://www.flaticon.com/free-icons/enable' title='Dashboard'></img>
                        <button>Dashboard</button>
                    </div>
                    <div>
                        <img src='/icons/eye.png' alt='https://www.flaticon.com/free-icons/enable' title='User Analytics'></img>
                        <button>User Analytics</button>
                    </div>
                    <div>
                        <img src='/icons/star.png' alt='https://www.flaticon.com/free-icons/enable' title='Vip Collections'></img>
                        <button>Vip Collections</button>
                    </div>
                    <div>
                        <img src='/icons/bookmark.png' alt='https://www.flaticon.com/free-icons/enable' title='Invitation'></img>
                        <button>Invitation</button>
                    </div>

                    <hr/>
                </div>

                
            </div>
        </>
    )

}