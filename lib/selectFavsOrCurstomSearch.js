const askAndFetch = require('../lib/askAndFetch')
const fetchAndDisplay = require('../lib/fetchAndDisplay')
const inquirer = require("inquirer")
const path = require("path")
const fs = require('fs')

function selectFavsOrCurstomSearch() {
	let fav = fs.readFileSync(
		path.resolve(__dirname, "../fav.txt"),
		"utf8",
		(err, data) => {
			if (err) return undefined
			return data
		}
	)

	let choices = fav.trim().split("\n")
	if (choices[choices.length - 1] === "") {
		choices.pop()
	}
	choices.unshift("- Custom Search")

	inquirer
		.prompt({
			type: "list",
			name: "startOption",
			message: "Selected: ",
			choices: choices
		})
		.then(answers => {
			if (answers.startOption === "- Custom Search") {
				askAndFetch()
			} else {
			fetchAndDisplay(answers.startOption)	
			}
		})
}

module.exports = selectFavsOrCurstomSearch
