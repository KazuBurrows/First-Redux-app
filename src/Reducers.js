import { createSlice, current } from '@reduxjs/toolkit';
import users_db from './data/users.json';
import nft_db from './data/nft_db.json';
import nft_collections from './data/nft_collections.json';

// import

const initialState = {
  isLoginState: true,
  user: {},
  currency: 'ETH',
  topCollections: []
};


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



export const Reducer = createSlice({
  name: 'nftStore',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state = true, action) => {
      let username = action.payload;
      // get ALL user data.
      let user = users_db.find(data => {
        if (username === data.username) {
          return data;
        }
      });





      let owned = user.owned.flatMap(o_id => {                                // Get all users owned nft's.
        let o_collection_id = parseInt(o_id[1]);

        let matched_nft = nft_db[o_collection_id].nfts.find(nft => {           // Loop through entire Nft db, match owned Nft to Nft in 'nft_db' to get entire nft object data.
            return (nft.id === o_id);                                             // Returns and nft object.
        })
        
        return matched_nft;
      });


      let created = user.created.flatMap(c_id => {                                // Get all users owned nft's.
        let c_collection_id = parseInt(c_id[1]);

        let matched_nft = nft_db[c_collection_id].nfts.find(nft => {           // Loop through entire Nft db, match owned Nft to Nft in 'nft_db' to get entire nft object data.
            return (nft.id === c_id);                                             // Returns and nft object.
        })
        
        return matched_nft;
      });


      let topCollections = nft_collections.map(collection => {
        let copy = {...collection};

        copy.volume = getRandomInt(6500, 8000);
        copy.flowPrice = getRandomInt(3, 40);
        copy.status = getRandomInt(-50, 70);
        copy.owners = getRandomInt(8000, 12000);
        copy.items = getRandomInt(3000, 6000);

        return copy;
      })
      state.topCollections = topCollections;



      state.user = {
        ...user,
        "owned": owned,
        "created": created

      };



      state.isLoginState = false;     // Change to user dashboard.

    },
    signOut: (state, action) => {
      // Reset to initial state.
      state.user = {};
      state.isLoginState = true;
      state.currency = 'ETH';
      state.topCollections = [];
    },
    changeCurrency: (state=initialState, action) => {
      state.currency = action.payload;

    },
    liveUpdateTopCollections: (state=[], action) => {
      // console.log(current(state).topCollections)

      let topCollections = state.topCollections.map(collection => {
        collection.volume = getRandomInt(6500, 8000);
        collection.flowPrice = getRandomInt(3, 40);
        collection.status = getRandomInt(-50, 70);
        collection.owners = getRandomInt(8000, 12000);
        collection.items = getRandomInt(3000, 6000);

        return collection;
      })

      state.topCollections = topCollections;
      
    }
  },
});

export const { login, signOut, changeCurrency, liveUpdateTopCollections } = Reducer.actions;


export default Reducer.reducer;
