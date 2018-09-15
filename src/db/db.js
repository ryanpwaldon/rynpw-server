const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to db.'), err => console.log('Error connecting to db.', err))
}
