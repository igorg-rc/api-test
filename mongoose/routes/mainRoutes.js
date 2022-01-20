const router = require("express").Router()

router.get('/', (req, res) => {
  res.send("Hello World!")
})

router.get('/about', (req, res) => {
  res.send("About page")
})

router.get('/info', (req, res) => {
  res.send("Info page")
})

router.get('/api', (req, res) => {
  res.status(200).json({ success: true, message: "API endpoint" })
})

module.exports = router