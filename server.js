const express = require("express")
const app = express()

const PORT = 5000

const articleRouter = require('./routes/article')

app.set('view engine' ,'ejs')

app.use('/articles',articleRouter)

app.get('/',(request,response) => {
    response.render('index')
    response.send("hello ")
})

app.listen(PORT, () => {
    console.log(`App is Running at http://localhost:${PORT}`);
})