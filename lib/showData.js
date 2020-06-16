const chalk = require("chalk")
const supportsColor = require('supports-color');

function showData(filtered){
	if (typeof filtered == 'string') {
		console.log(`No data about ${filtered}`)	
	} else {
	if (supportsColor.stderr.has16m) {
			console.log(
					`${chalk.hex('#000000').bgHex('#149414').bold.underline(" Results:") } 
${chalk.bold.hex('#149414').bgHex('#000000')(` Coin: ${filtered.name} (${filtered.asset_id}) `)}
${chalk.bold.hex('#149414').bgHex('#000000')(` Price: $${(filtered.price_usd).toFixed(2)} `)}
${chalk.bold.hex('#149414').bgHex('#000000')(` Volume (1hr): $${(filtered.volume_1hrs_usd).toFixed(2)} `
					)}
${chalk.bold.hex('#149414').bgHex('#000000')(` Volume (1day): $${(filtered.volume_1day_usd).toFixed(2)} `
					)}
${chalk.bold.hex('#149414').bgHex('#000000')(` Volume (1mth): $${(filtered.volume_1mth_usd).toFixed(2)} `
					)}`
					)
	} else {
		console.log(
		`Results:
		Coin: ${filtered.name} (${filtered.asset_id}
		Price: $${(filtered.price_usd).toFixed(2)}
		Volume (2hr): $${(filtered.volume_1hrs_usd).toFixed(2)}
		Volume (1day): $${(filtered.volume_1day_usd).toFixed(2)}
		Volume (1mth): $${(filtered.volume_1mth_usd).toFixed(2)}
		`)    
		}
	}		    
}

module.exports = showData
