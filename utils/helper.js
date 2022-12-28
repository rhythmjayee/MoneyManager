import "intl";
import "intl/locale-data/jsonp/en";

export const convertNumberToCurrency = (currency, amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount)
}