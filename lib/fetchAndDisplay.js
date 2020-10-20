const showData = require('../lib/showData')
const fetchCoin = require('../lib/fetchCoin')

async function fetchAndDisplay (coin) {
  let response = await fetchCoin(coin)
  showData(response)
}

module.exports = fetchAndDisplay
