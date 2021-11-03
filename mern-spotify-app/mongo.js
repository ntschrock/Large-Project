const mongoose = require('mongoose')
const mongoPath = 'mongodb+srv://RickL:Group11@cluster0.ujvrk.mongodb.net/SpotifyApp?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}