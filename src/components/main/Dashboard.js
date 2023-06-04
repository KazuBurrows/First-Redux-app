import React, { useState, useEffect } from 'react';
import nft_featured_db from '../../data/nft_featured.json';
import nft_db from '../../data/nft_db.json';

import { applyCurrency } from '../extra/Currency';
import { useSelector } from 'react-redux';      // Subscribes to state changes in Reducers.

import $ from 'jquery';
import '../../styles/dashboard.scss';

export default function Dashboard() {

    const [nfts, setNfts] = useState([]);
    const store = useSelector((state) => state.store);

    useEffect(() => {
        let featured = nft_featured_db.nfts.flatMap(nft_id => {             // Loop through nft id's in 'nft_featured' db.
            let collection_id = parseInt(nft_id[1]);                        // Splice nft's id to get collection id.
            
            let f_nfts = nft_db[collection_id].nfts.find(nft => {           // Get nft object from 'nft_db'.
                if (nft.id === nft_id) return nft;
            })

            return f_nfts;      // return nft object.
        });
        
        featured.sort(() => Math.random() - 0.5);      // Randomize array.
        setNfts(featured);

        setInterval(slideNext, 4000);               // Called here to avoid copies. ---------Find a way to pause interval on 'drag scroll'.--------
    },[])



    useEffect(() => {
        dragScrollSetup()
    }, [nfts])



    /**
     * Setup mouse click event handlers for drag scroll in 'flex-scroll' div.
     */
    const dragScrollSetup = function() {
        


        let slider = document.querySelector('.flex-scroll');
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
            
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');

        });

        slider.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;

        });


        let fractionDiv = 2;
        slider.scrollLeft = slider.offsetWidth/fractionDiv;
        
    }

    

    /**
     * Auto scroll on 'flex-scroll'.
     */
    function slideNext() {
        let flexScroll = $('.flex-scroll');
        flexScroll.animate({left: '-200%'}, 200, function() {
    
            flexScroll.css('left', '-100%');
        
            $('.featuredNfts').last().after(        // After 'animate', 
                $('.featuredNfts').first()      // Last element goes to first after 'animate'.
            );
        });
    
    }



    // Infinate scroll.
    // https://codepen.io/dcorb/details/eJLMxa


    return (
        <>
            <div class='dashboard'>
                <div class='square-back'>
                    <h3>Featured NFTS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                

                <div class='scroll-container'>
                    <div class="flex-scroll">
                        {nfts.map(data => {
                            let price = data.price;

                            return (
                                <div class='featuredNfts'>
                                    <img src={data.imageUrl} alt={data.name}></img>
                                    <p>{data.name}</p>
                                    <hr/>
                                    <p>{applyCurrency(price, store.currency)} {store.currency}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </>
    )

}