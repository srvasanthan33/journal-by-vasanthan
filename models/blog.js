const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    category:{
        type:String,
        require:true,
        default: 'Misc'
    },
    description:{
        type:String,
        default: function() {
            // Ensure description is set only during document creation (insert)
            if (!this.isNew) {
              return undefined;
            }
      
            // Access the title property using `this.title`
            return this.title;
          }

    },
    markdown:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default: () => new Date().toISOString()
    }

})

module.exports = mongoose.model('Blog',blogSchema)