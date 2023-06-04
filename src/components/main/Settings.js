
import '../../styles/settings.scss';



export default function Settings() {

    return (
        <>
            <div class='settings'>
                <p>Settings</p>
                <div>
                    <img src='/icons/bell.png' alt='created by IcoGhost - Flaticon' title='Notification'></img>
                    <button>Notification</button>
                </div>
                <div>
                    <img src='/icons/unlock.png' alt='created by IcoGhost - Flaticon' title='Subscription'></img>
                    <button>Subscription</button>
                </div>
                <div>
                    <img src='/icons/power.png' alt='created by IcoGhost - Flaticon' title='Promotion'></img>
                    <button>Promotion</button>
                </div>
                
            </div>
        </>
    )

}