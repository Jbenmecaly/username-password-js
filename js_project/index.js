const prompt = require("prompt-sync")({ sigint: true });

function UserName() {
    let username = prompt("Enter your username: ");
    let password = prompt("Enter your password: ");
    
    if(username == "JoshuaIs1$" && password == "JamesIsL@"){
        console.log("Successful");
    } else {
        console.log("Invalid username or password");
    }
    
    console.log("Username: " + username);
    console.log("Password: " + password);
}

UserName();

