const mongoose = require('mongoose');
// express generator npx express-generator -v ejs <project Name>
//                                                  ^^Will generate directory with name
//                                                       ^^ if blank will fill out current directory with express template
//process.env.DATABASE_URL
//Use this for online database ^^
mongoose.connect('mongodb://localhost/puppies', {
useNewUrlParser:true,
useUnifiedTopology: true,
useCreateIndex:true
})


const db = mongoose.connection;


//database connection event

db.on('connected', function(){
    console.log(`Mongoose connected to : ${db.host}:${db.port}`)

})