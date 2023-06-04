

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.
import $ from 'jquery';

import { useDispatch } from 'react-redux';
import {
  changeCurrency,
  liveUpdateTopCollections
} from '../../Reducers';

import '../../styles/rankings.scss';


export default function Rankings(props) {
    const dispatch = useDispatch();
    const options = [
        "ETH",
        "USD",
        "EUR",
        "NZD",
        "JPY"
    ]
    const topCollections = useSelector((state) => state.store.topCollections);



    useEffect(() => {                   // render once to avoid making copies.
        setInterval(function(){             // Just a mock example to show live data changes in Redux app.
            dispatch(liveUpdateTopCollections());
        }, 5000);
    }, [])

    


    const posNegStyle = function(value) {
        const positive = { color: 'green' };
        const negative = { color: 'red' };

        return (value > 0) ? positive : negative;
    }


    const roundMyNumbers = function(value) {

        return (value >= 1000) ? `${(value/1000).toFixed(1)}K` : value;
    }



    return (
        <>
            <div class='rankings'>
                <div class='head'>
                    <p>Top NFT's</p>

                    <div class='currencySelect'>
                        <p>Currency | </p>
                        <select name="currencys" class='currencys' onChange={e => dispatch(changeCurrency(e.target.value))}>
                            {options.map(o => (
                                <option key={o} value={o}>{o}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                
            
                <table>
                    <tr>
                        <th>Collections</th>
                        <th>Volume</th>
                        <th>Flow Price</th>
                        <th>Status</th>
                        <th class='minHide'>Owners</th>
                        <th class='minHide'>Items</th>
                    </tr>
                    <hr/>
                    
                    { topCollections.map(collection => {
                        // let tr_id = `collection${collection.id}`;
                        return (
                            <tr>
                                <td><img src={collection.img_url} alt={collection.imgUrl}></img><p>{collection.name}</p></td>
                                <td style={posNegStyle(collection.volume)}>{collection.volume}</td>
                                <td style={posNegStyle(collection.flowPrice)}>{collection.flowPrice}</td>
                                <td style={posNegStyle(collection.status)}>{collection.status}%</td>
                                <td class='minHide'>{roundMyNumbers(collection.owners)}</td>
                                <td class='minHide'>{roundMyNumbers(collection.items)}</td>
                            </tr>
                        )
                     })
                    }
                </table>

            </div>
            
        </>
    )

}