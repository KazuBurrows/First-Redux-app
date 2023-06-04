
import { applyCurrency } from './Currency';
import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.



export default function Wallet() {
    const owned = useSelector((state) => state.store.user.owned);
    const currency = useSelector((state) => state.store.currency);


    let prices = owned.flatMap(nft => {
        return nft.price;
    })

    let initialValue = 0;
    let sumTotal = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );



    return (
        <div>
            {applyCurrency(sumTotal, currency)} {currency}
        </div>
    )
}