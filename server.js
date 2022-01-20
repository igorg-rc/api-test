const express = require("express")
const path = require("path")
const keys = require("./config/keys")
const mongoose = require("mongoose")
const PORT = keys.PORT
const MONGO_URI = keys.MONGO_URI

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to mongodb"))
  .catch(error => console.log(error))

const app = express()

app.set('view engine', 'ejs')

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/',          require('./mongoose/routes/mainRoutes'))
app.use('/api/items', require('./mongoose/routes/itemRoutes'))

app.use('/downloads/images', express.static(path.join(__dirname, "downloads", "images")))

app.listen(PORT, () => console.log(`Application is running on port ${PORT}`))