

import { useSelector, useDispatch } from 'react-redux';
import {
    signOut,
} from '../../Reducers';
import '../../styles/login.scss';


export default function SignOut() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.store.user)

    return (
        <>
            <div class='signOut'>
                <img src={user.profileImg} alt={user.username} title={user.username}></img>

                <div class='partContents'>
                    <div class='username'>{user.username}</div>
                    <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
                
            </div>
        </>
    )

}