const cfont = require("cfonts")

function printTitle(){
    cfont.say("CRYPTO DATA", {
        font: "block",
        colors: ['green','green'],
        background: "black",
        align: "center"
    })
}

module.exports = printTitle
