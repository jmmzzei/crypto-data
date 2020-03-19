const fs = require('fs')
const chalk = require("chalk")
const path = require("path")

function removeFromFav(coin) {
	let formattedCoin = coin.split("-").join(" ")

	fs.readFile(path.resolve(__dirname, "../fav.txt"), "utf8", (err, data) => {
		if (err) throw err

		let formatted = data
			.split("\n")
			.join(" ")
			.replace(formattedCoin, "\n")
			.split(" ")
			.filter(el => el !== "\n")
			.filter(el => el)
			.join("\n")

		console.log(
			`${chalk.magentaBright.inverse(formattedCoin + " deleted from crypto-data favs")}`
		)

		fs.writeFile(
			path.resolve(__dirname, "../fav.txt"),
			formatted + "\n",
			err => {
				if (err) throw err
			}
		)
	})
}

module.exports = removeFromFav