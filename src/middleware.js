


export const currencyChangeMiddleware = (state) => (next) => (action) => {
    // Here you have access to `action.type` and `action.payload`
   
    
    if (action.type === 'nftStore/changeCurrency') {
        console.log('Logging action with type', action)
        console.log('Logging payload', action.payload)
    }

    console.log(state)

    // You should always do this at the end of your middleware
    return next(action)}

