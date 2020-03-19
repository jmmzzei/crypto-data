const fs = require('fs')
const path = require("path")
const chalk = require("chalk")

function addToFav(coin) {
	let formattedCoin = coin.split("-").join(" ")
	let toWrite = formattedCoin + "\n"
	fs.readFile(path.resolve(__dirname, "../fav.txt"), "utf8", (err, data) => {
		if (err) throw err
		let formattedArr = data.split("\n")
		if (!formattedArr.includes(formattedCoin)) {
			fs.appendFileSync(
				path.resolve(__dirname, "../fav.txt"),
				toWrite,
				err => {
					if (err) throw err
				}
			)
		}
	})
	console.log(
		`${chalk.magentaBright.inverse(formattedCoin + " added to crypto-data favs")}`
	)
}

module.exports = addToFav