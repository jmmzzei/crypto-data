#!/usr/bin/env node
const chalk = require('chalk')
const fetch = require('node-fetch')
const inquirer = require('inquirer');
const program = require('commander')
const dotenv = require('dotenv')
const cfont = require('cfonts') 
const fs = require('fs')
dotenv.config()

program
    .arguments('get <crypto>', 'get crypto value')
    .option('-c, --coin <coin>', 'Add a coin')
    .option('-f, --fav <coin>', 'Add a coin to favorites')
    .version('0.0.1')

program.parse(process.argv)

cfont.say('CRYPTO DATA', {
    font: 'block',
    align: 'center'
})

if (program.coin) {
    fetchCoins(program.coin)
} else if(program.fav){
    addToFav(program.fav)
} else {
    popularOrCurstomSearch()
}

function addToFav(coin){
    let formattedCoin = coin.split('-').join(' ')
    let toWrite = formattedCoin + '\n' 
    fs.appendFileSync('fav.txt', toWrite, (err) => {
        if(err) throw err
    })
    console.log(`${chalk.magentaBright.inverse(formattedCoin + ' added to favs')}`)
}

function popularOrCurstomSearch(){
    let fav = fs.readFileSync('fav.txt', 'utf8',(err, data) => {
        if (err) return undefined
        return data
    });

    let choices = fav.split('\n')
    choices.pop()
    choices.unshift('- Custom Search')

    inquirer.prompt({
        type: 'list',
        name: 'startOption',
        message: 'Search for:',
        choices: choices
    }).then(answers => {
        if (answers.startOption === '- Custom Search') {
            askAndFetch()
        } else {
            fetchCoins(answers.startOption)
        }
    })
}

function askAndFetch() {
    inquirer.prompt({
        type: 'input',
        name: 'coin',
        message: 'Insert a coin:'
    }).then(answers => {
        
        if (answers.coin.trim() !== "") {
            fetchCoins(answers.coin)
        } else {
            console.log(chalk.red('You must specify a coin or press CTRL + C to exit.'))
            askAndFetch()
        }
    })
}

function fetchCoins(coin) {
    console.log(`Fetching data for: ${coin}...`)

    fetch('https://rest.coinapi.io/v1/assets/', {
        "X-CoinAPI-Key": process.env.COIN_API
    }).then(res => res.json())
        .then(res => {
            let filtered = res.filter(e => e.name === coin)

            if (filtered.length === 0) {
                console.log(`No data about ${coin}`);
            } else {
                console.log(
                    `${chalk.magentaBright.inverse('[ Results ]')}    
                
                ${chalk.blue.inverse(`Coin: ${filtered[0].name} (${filtered[0].asset_id})`)}
                
                ${chalk.red.inverse(`Price: $${filtered[0].price_usd}`)}
                
                ${chalk.white.inverse(`Volume (1hr): $${filtered[0].volume_1hrs_usd}`)}
                ${chalk.white.inverse(`Volume (1day): $${filtered[0].volume_1day_usd}`)}
                ${chalk.white.inverse(`Volume (1mth): $${filtered[0].volume_1mth_usd}`)}
                ${chalk.white.inverse(`Volume (1hr): $${filtered[0].volume_1hrs_usd}`)}
                `)
            }
        })
}