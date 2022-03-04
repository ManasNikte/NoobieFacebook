// Facebook database array for my username & password
var database = [
    {
        username: "Manas",
        password: "BoomrahJasprit"
    },
    {
        username: "Tejas",
        password: "SonPapdi"
    },
    {
        username: "Kedar",
        password: "CringeItems"
    },
    {
        username: "Vinayak",
        password: "NoobPlayer"
    },
    {
        username: "NikhiL",
        password: "GotiShotGuy"
    },
    {
        username: "Rajdeep",
        password: "SastaKabirSingh"
    },
    {
        username: "Swayam",
        password: "DeadVoice"
    },
    {
        username: "Atharva",
        password: "ImposterMF"
    },
    {
        username: "Vivek",
        password: "RadheRadhe"
    },
    {
        username: "Vishal",
        password: "KhushiKeAnsoo"
    }
];

//  Facebook database array for 2 user's newsfeed timelines
var newsFeed = [
    {
        username: "Sammy",
        timeline: "JavaScript is nice!"
    },

    {
        username: "Magdalena",
        timeline: "JavaScript is kool!"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username == username && database[i].password == password) {
            return true;
        } 
    }
    return false;
}



// DEFINE a function named signInVerification
// for username & password verification
function signInVerification(username, password) {
    console.log(isUserValid(username, password))
    

// if my username is same as my database username AND
        if (isUserValid(username, password)) {
// console.log the newsFeed from the database
            console.log(newsFeed);
// else if username and password don't exist in the database...
        } else {
// display an alert box w a "Sorry" mssg
            alert("Sorry, wrong username and password!");
        }
}

// sign in form via 2 prompt boxes
var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

// this statement will CALL the signInVerification() function
signInVerification(userNamePrompt, passwordPrompt);