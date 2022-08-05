const bodyParser = require('body-parser')
const cards = require('./cardsRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cards)
}