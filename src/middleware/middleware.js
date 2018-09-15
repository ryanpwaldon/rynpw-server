const bodyParser = require('body-parser')
const forceSsl = require('./force-ssl/force-ssl')
const cors = require('./cors/cors')

module.exports = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(forceSsl)
  app.use(cors)
}
