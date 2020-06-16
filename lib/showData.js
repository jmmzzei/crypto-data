const chalk = require("chalk")
const supportsColor = require('supports-color');

function showData(filtered){
	if (typeof filtered == 'string') {
		console.log(`No data about ${filtered}`)	
	} else {
			let coin = {
				name: filtered.name,
				id: filtered.asset_id,
				price: filtered.price_usd.toFixed(2),
				volHrs:	filtered.volume_1hrs_usd.toFixed(2),
				volDay:	filtered.volume_1day_usd.toFixed(2),
				volMth: filtered.volume_1mth_usd.toFixed(2) 
			}			

			let description = {
				results: ' Results:',
				coin: ` Coin: ${coin.name} (${coin.id}) `,
				price: ` Price: $${coin.price} `,
				volHrs: ` Volume (1hr): $${coin.volHrs} `,
				volDay: ` Volume (1day): $${coin.volDay} `,
				volMth: ` Volume (1mth): $${coin.volMth} `
			}	
		
		if (supportsColor.stderr.has16m) {
			createColoredTable(description)	
		} else {
		for(let key in description){
			console.log(description[key])
			}	
		}
	}		    
}

function getLongest(description){
	let longest = description.coin.length
	for(let key in description){
		if(description[key].length > longest){
			longest = description[key].length
		}	
	}	
	return longest
}	

function insertWhitespaces(description, longest){
	for(let key in description){
		let diff = longest - description[key].length	
		for(let i = 0; i<diff; i++){
			description[key] += ' '
		}
	}
}

function createColoredTable(description){
	let longest = getLongest(description)
	insertWhitespaces(description,longest)
	let chalkFormat = chalk.bold.hex('#149414').bgHex('#000000')
	let table = `${chalk.hex('#000000').bgHex('#149414').bold.underline(description.results) } `
	for(let key in description){
		if (key !== 'results'){
			table += '\n'
			table += chalkFormat(description[key])	
		}
	}
	console.log(table)
}		

module.exports = showData
