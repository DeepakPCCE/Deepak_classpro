var express = require('express');
var hbs = require('hbs');  //handler bar
var path = require('path');
var bodyParser =require('body-parser');

// User Model
var usersController = require('./controllers/users');
var app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
			{
				  extended: false
			}));	
 
app.use(express.static('public'));  // gives access to the public folder contents statically with internet connection to anyone

 


// Routes
app.get('/', function (req, res) {
	//res.sendfile('./views/index.html');
    console.log(usersController.getUsers());
	res.render('index', {
						title: "Home",
						users: usersController.getUsers
						});
	// or res.render('index',users.getUsers);     });
});



app.get('/users/:id', function (req, res) {
    var user = usersController.getUser(req.params.id);
	res.render('profile', {
					title: "User Profile",
					users: user
					});
});



app.get('/login', function (req, res) {
    res.render('login', {
        title: "Login page"
    });
});



app.post('/login',usersController.postLogin);



app.get('/signup', function (req, res) {
    res.render('signup',{
        title: "Signup"
    });
});



app.get('/aboutus', function (req, res) {
    res.render('aboutus', {
        title: "About Us"
    });	
});

app.listen(3000);


// IMPORTANT CODE BEFORE ADDING CONTROLLERS AND MODELS FOLDER
//app.post('/login', function (request, response) {
//    //console.log(request.body);
//    //console.log(request.body.email);
//    //console.log(request.body.password);
//    //response.send("Send Data " + request.body.email + " " + request.body.password);

//    var result = users.compareAuth(request.body.email, request.body.password);
//    if (result) {
//        //response.send("Login successful " + request.body.email + " " + request.body.password);
//        response.send("Login successful..Hi " + result.name + " " + result.password);
//    }
//    else {
//        response.send("Login failed...Enter valid username/email or password...!!!");
//    }

//    // OR
//    //var user = users.getUsers();
//    //for (var i = 0; i < user.length; i++) {
//    //    if (user[i].name == request.body.email && user[i].password==request.body.password)
//    //        response.send("Login successful");
//    //    else
//    //        response.send("Invalid email");
//    //}
//});