import Wallet from '../extra/Wallet'
import Revenue from '../extra/Revenue'

import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.

import '../../styles/user.scss';


export default function User() {

    const user = useSelector((state) => state.store.user);


    return (
        <>
            
            <div class='userMain'>
                <div class='wallet'>
                    <p>Your Balance</p>
                    <Wallet/>
                </div>
                <div class='revenue'>
                    <p>Your Revenue</p>
                    <Revenue/>
                </div>
                
            </div>

            <div class='userMinor'>
                <div class='userMinor'>
                    <img src={user.collectionImg} alt={user.username}></img>

                    <div>
                        <img src={user.profileImg} alt={user.username}></img>
                        <p>{user.username}</p>
                    </div>
                    
                    <hr/>
                    
                </div>
            </div>
        </>
    )

}