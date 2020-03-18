# CRYPTO-DATA

Command line app for getting cryptocurrencies related data retreived from CoinAPI.

## Installation

	npm i -g crypto-data


## Usage

Options:

	--coin <coin> 			-c 			Fetch data for a specific coin.	
	--add-fav <coin> 		-f 			Add a coin to favorites.
	--rm-fav <coin> 		-rf 		    Remove a coin from favorites.

Type

	crypto-data
without options, to run the application. If you have added favorite coins to the app, you will have a quick-access to them. But you could also make a search inside the interface by selecting the "Custom Search" item and then typing the required coin. The application will retreive the cryptocurrency current value and its volume in one hour, day and month.

> **Note:** The API Key used is released under a free plan, so the daily requests limit is 100.