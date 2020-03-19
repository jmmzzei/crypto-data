#!/usr/bin/env node
const program = require("commander")
const dotenv = require("dotenv")
const addToFav = require('../lib/addToFav')
const removeFromFav = require('../lib/removeFromFav')
const fetchAndDisplay = require('../lib/fetchAndDisplay')
const selectFavsOrCurstomSearch = require('../lib/selectFavsOrCurstomSearch')
const printTitle = require('../lib/printTitle')

dotenv.config()

program
	.arguments("get <crypto>", "get crypto value")
	.option("-c, --coin <coin>", "Fetch data for a specific coin")
	.option("-f, --add-fav <coin>", "Add a coin to favorites")
	.option("-r, --rm-fav <coin>", "Remove a coin from favorites")
	.version("1.0.0")

program.parse(process.argv)

if (program.coin) {
	printTitle()
	fetchAndDisplay(program.coin)
} else if (program.addFav) {
	addToFav(program.addFav)
} else if (program.rmFav) {
	removeFromFav(program.rmFav)
} else {
	printTitle()
	selectFavsOrCurstomSearch()
}
