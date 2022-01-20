const router = require('express').Router()
const Item = require("../models/Item")
const Todo = require("../models/Todo")
const uploadFile = require("../../helpers/uploadFile")

// router.get("/", (req, res) => res.send("Hello from items routes!"))

router.get("/", async (req, res) => {
  const items = await Item.find()
  try {
    if (!items) res.status(404).json({
      success: false,
      message: "Items were not found!"
    })
    res.status(200).json({ 
      success: true, 
      data: items
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
})

router.post("/", uploadFile.single("image"), async (req, res) => {
  const {title, description, keywords} = req.body
  const image = req.file.path
  try {
    const item = new Item({ title, description, keywords, image })
    await item.save()
    res.status(201).json({
      success: true,
      message: "New Item has been created!",
      data: item
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!"
    })
  }
})

module.exports = router