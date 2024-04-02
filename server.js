const express = require("express")
const app = express()

const PORT = 5000

const blogRouter = require('./routes/blogs')

app.set('view engine' ,'ejs')

app.use('/blogs',blogRouter)

app.get('/',(request,response) => {
    const blogs = [
        {
            title:'the eternal sunshine of the spotless mind 💖',
            createdAt:new Date(),
            category:'flicks',
            description:'forgetting about loved ones is easy but that what it makes us human, here is my perspective of this movie',        
        },
        {
            title:'detective arriving on the scene',
            createdAt:new Date(),
            category:'games',
            description:'Detective arriving on the scene" will always be one of the most chilling phrases in videogame history. The phasmid encounter is art.',        
        }
    ]
    response.render('index',{blogs:blogs})
})

app.listen(PORT, () => {
    console.log(`App is Running at http://localhost:${PORT}`);
})