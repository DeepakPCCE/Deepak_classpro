var userModel = require('../models/Users');  //import data in controller

exports.getUsers = function () {
    return userModel.users;  //return users from models folder
}


exports.getUser = function (id) {
    for (var i = 0; i < userModel.users.length; i++) {
        if (userModel.users[i].id == id)
            return userModel.users[i];
    }
}

exports.compareAuth = function (username, password) {
    for (var i = 0; i < userModel.users.length; i++) {
        if (userModel.users[i].name == username && userModel.users[i].password == password) {
            return userModel.users[i];
            //return true;
        }
    }
    return false;
}

exports.postLogin=function(request,response){
    var result = users.compareAuth(request.body.email, request.body.password);
    if (result) {
        response.send("Login successful...Hi " + result.name + " " + result.password);
    }
    else {
        response.send("Login failed...Enter valid username/email or password...!!!");
    }
}