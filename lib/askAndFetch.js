const fetchAndDisplay = require('../lib/fetchAndDisplay')
const inquirer = require("inquirer")
const chalk = require("chalk")

function askAndFetch() {
	inquirer
		.prompt({
			type: "input",
			name: "coin",
			message: "Insert a coin:"
		})
		.then(answers => {
			if (answers.coin.trim() !== "") {
				fetchAndDisplay(answers.coin)
			} else {
				console.log(
					chalk.red(
						"You must specify a coin or press CTRL + C to exit."
					)
				)
				askAndFetch()
			}
		})
}

module.exports = askAndFetch