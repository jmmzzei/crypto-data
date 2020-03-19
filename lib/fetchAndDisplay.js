const chalk = require("chalk")
const fetch = require('node-fetch')

function fetchCoins(coin) {
	console.log(`Fetching data for: ${coin}...`)

	fetch("https://rest.coinapi.io/v1/assets/", {
		"X-CoinAPI-Key": process.env.COIN_API
	})
		.then(res => res.json())
		.then(res => {
			let filtered = res.filter(e => e.name === coin)

			if (filtered.length === 0) {
				console.log(`No data about ${coin}`)
			} else {
				console.log(
					`${chalk.magentaBright.inverse("Results:")}    
                
                ${chalk.blue.inverse(
					`Coin: ${filtered[0].name} (${filtered[0].asset_id})`
				)}
                ${chalk.red.inverse(`Price: $${filtered[0].price_usd}`)}
                ${chalk.white.inverse(
					`Volume (1hr): $${filtered[0].volume_1hrs_usd}`
				)}
                ${chalk.white.inverse(
					`Volume (1day): $${filtered[0].volume_1day_usd}`
				)}
                ${chalk.white.inverse(
					`Volume (1mth): $${filtered[0].volume_1mth_usd}`
				)}
                `
				)
			}
		})
}

module.exports = fetchCoins