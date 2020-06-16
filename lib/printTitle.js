const cfont = require("cfonts")

function printTitle(){
    cfont.say("CRYPTO DATA", {
        font: "block",
        background: "black",
        align: "center"
    })
}

module.exports = printTitle
