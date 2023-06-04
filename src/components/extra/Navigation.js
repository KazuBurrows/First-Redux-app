
import '../../styles/navigation.scss';
import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.



export default function Navigation() {
    const user = useSelector((state) => state.store.user);

    const created = user.created;
    const owned = user.owned;
    const collections = [new Set(
        owned.map(nft => parseInt(nft.id[1]))
    )][0];

    
    return (
        <div class='navigation'>
            <p class='active'>Activity</p>
            <p>Created({created.length})</p>
            <p>Collections({collections.size})</p>
            <p>Owned({owned.length})</p>
        </div>
    )
}