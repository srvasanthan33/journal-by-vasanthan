const express = require("express")

const Blog = require('../models/blog')
const router = express.Router()

router.get('/new',(request,respond) => {
    respond.render('blogs/new', {blog: new Blog()})
})

router.get('/:id',async (request,response) => {
    
    try{
        const blog = await Blog.findById(request.params.id)
        if  (blog == null) response.redirect('/ ')
        response.render('blogs/show',{blog:blog})
    }
    catch(e)
    {
        response.redirect('/')
    }

    
    
})

router.post('/', async(request,response) => {
    let blog = new Blog({
        title:request.body.title,
        category:request.body.category,
        description:request.body.description,
        markdown:request.body.markdown
    })

try {
    blog = await blog.save()
    response.redirect(`/blogs/${blog.id}`)
}catch(err){
    console.log(err)
    response.render('blogs/new',{article:article})
}
    
})

module.exports = router