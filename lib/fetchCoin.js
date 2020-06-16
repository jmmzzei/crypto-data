const fetch = require('node-fetch')
const chalk = require("chalk")
const supportsColor = require('supports-color');

async function fetchCoin(coin) {
    let formattedCoin = coin.split("-").join(" ")
    if (supportsColor.stderr.has16m) 
    console.log(`${chalk.hex('#000000').bgHex('#149414').bold(" ***   Fetching data...   *** ") }`)
     else console.log('Fetching data...') 
    return await fetch("https://rest.coinapi.io/v1/assets/", {
	"X-CoinAPI-Key": process.env.COIN_API
    })
    .then(res => res.json())
    .then(res => {
	let filtered = res.filter(e => e.name && e.name.toLowerCase() === formattedCoin.toLowerCase())
	return filtered.length > 0 ? filtered[0] : formattedCoin 
    })
}

module.exports = fetchCoin
