
function formatPrice(price) {
    // let strPrice = price.toString();

    return price.toFixed(2);
}



export function applyCurrency(price, currency) {
    
    let curr_price = price
    switch (currency) {
        case 'USD':
            curr_price = price* 1809.59;
            break;
        case 'EUR':
            curr_price = price* 1675.74;
            break;
        case 'NZD':
            curr_price = price* 2892.30;
            break;
        case 'JPY':
            curr_price = price* 249453.96;
            break;
        default:
            return price;

    }


    

    return formatPrice(curr_price);
}