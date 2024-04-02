const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000

mongoose.connect('mongodb://localhost/blog')

const db = mongoose.connection
db.on('error',(err) => {console.log(err)})
db.once('open',() => console.log('connection successful'))

const blogRouter = require('./routes/blogs')
const Article = require('./models/blog')

app.set('view engine' ,'ejs')
app.use(express.urlencoded({extended:false}))

app.use('/blogs',blogRouter)


app.get('/',async (request,response) => {
    const blogs = await Article.find().sort({createdAt:-1})
    response.render('blogs/index',{blogs:blogs})
}).get('/error',(req,res) => res.render('error'))

app.listen(PORT, () => {
    console.log(`App is Running at http://localhost:${PORT}`);
})



// const blogs = [
//     {
//         title:'the eternal sunshine of the spotless mind 💖',
//         createdAt:new Date(),
//         category:'flicks',
//         description:'forgetting about loved ones is easy but that what it makes us human, here is my perspective of this movie',        
//     },
//     {
//         title:'detective arriving on the scene',
//         createdAt:new Date(),
//         category:'games',
//         description:'Detective arriving on the scene" will always be one of the most chilling phrases in videogame history. The phasmid encounter is art.',        
//     }
// ]