const express = require("express")
const router = express.Router()

router.get('/new',(request,respond) => {
    respond.render('ryan')
})

module.exports = router