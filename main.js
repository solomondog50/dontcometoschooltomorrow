var express = require('express');
var app = express();
app.use(express.static("public"))
app.get("/", function(req, res){
	res.sendFile('index.html' , { root :"."});
	//res.sendFile('styles.css' , { root :"."});
});

var port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log("Server Has Started!");
	console.log(port)
});

