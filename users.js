var users = [
	{
	id:1,
	name:"xyz@xyz.com",
	username:"xyz",
	password:"abc"
	},
	{
	id:2,
	name: "abc@abc.com",
	username:"abc",
	password:"xyz"
	},
	{
	id: 3,
	name: "lmn",
	username: "lmn",
	password: "jkl"
	}
	];
exports.getUsers=function(){
return users;
}

exports.getUser=function(id){
	for (var i = 0; i < users.length; i++)
	{
		if(users[i].id==id)
			return users[i];
	}
}

exports.compareAuth=function(username,password){
    for(var i=0;i<users.length;i++)
    {
        if (users[i].name == username && users[i].password == password)
        {
            return users[i];
            //return true;
        }            
    }
    return false;
}