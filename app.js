//for express and body parser 
const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
const ejs = require('ejs');


const nodemailer = require('nodemailer');
//native modules (built -in modules )
// const request = require('request');
// const https = require('https');
//defining the app 
const app = express();
app.set("view engine",'ejs');

//used for the public folder so than i can placed my css and java script files clear
app.use(express.static("public"));
//body parser post the data (forms)
app.use(bodyParser.urlencoded({extended:true}));
//function to send the file signup.html
app.get("/",function(req,res){
	res.render("index")
});
//post the form data 
app.post("/",function(req,res){
	const name = req.body.name;
	const email = req.body.email;
	console.log(name,email);

	let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your email', // generated ethereal user
      pass: 'pass' // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"djgh" <skjsdg135@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
	res.render('index')
})
app.listen(process.env.PORT || 3000,function(){
	console.log("I am listening at the port 3000");
})

//Api key 
//ca38ba7c25e1dabc22ccedfefe33f0d6-us18

//list id
//757c40c579