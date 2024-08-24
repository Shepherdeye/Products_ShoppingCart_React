const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency"
})
const FormatCurrency = (num) => {
    return CURRENCY_FORMATER.format(num)
}
export default FormatCurrency